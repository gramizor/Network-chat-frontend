import {
  Button as MUIButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  styled,
  Typography,
} from "@mui/material";
import { Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useApp } from "../../store/appSlice";
import styles from "./styles.module.css";
import { IconBrandWechat } from "@tabler/icons-react";
import { useWebSocket } from "../../hooks/useWebSocket";
import { IconLogin2 } from "@tabler/icons-react";
import { IconLogout } from "@tabler/icons-react";

const StyledText = styled(Typography)(() => ({
  margin: 0,
  color: "var(--clr-on-surface)",
}));

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { saveUserName, clearChat, userName } = useApp();

  const { createConnection, closeConnection } = useWebSocket();

  useEffect(() => {
    const user = localStorage.getItem("userName");
    if (!user) return;
    saveUserName(user);
    createConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("userName");
    saveUserName("");
    clearChat();
    closeConnection();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const login = (name: string) => {
    if (!name) return;
    localStorage.setItem("userName", name);
    saveUserName(name);
    createConnection();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles["image-wrapper"]}>
          <IconBrandWechat stroke={1.5} size={34} />
        </div>
        <div className={styles["buttons-wrapper"]}>
          {userName ? (
            <>
              <Button
                variant="subtle"
                color="rgba(0, 0, 0, 1)"
                onClick={handleLogoutClick}
                rightSection={<IconLogout stroke={1} />}
              >
                <StyledText>{userName}</StyledText>
              </Button>
            </>
          ) : (
            <Button
              variant="subtle"
              color="rgba(0, 0, 0, 1)"
              onClick={handleLoginClick}
              rightSection={<IconLogin2 stroke={1} />}
            >
              <StyledText>Войти </StyledText>
            </Button>
          )}
        </div>
      </div>
      <Dialog
        open={isModalOpen}
        onClose={handleModalClose}
        fullWidth
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const name = formJson.login;
            login(name.toString());
            handleModalClose();
          },
        }}
      >
        <DialogTitle>Вход</DialogTitle>
        <DialogContent>
          <DialogContentText>Введите логин</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="login"
            label="Логин"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <MUIButton onClick={handleModalClose}>Закрыть</MUIButton>
          <MUIButton type="submit">Войти</MUIButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

export { NavBar };
