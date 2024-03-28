import { Button, TextField, styled } from '@mui/material'
import s from './SendForm.module.scss'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

type Props = {}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const SendForm = (props: Props) => {
    return (
        <div className={s.inputForm}>
            <form className={s.form}>
                    <Button
                        // component="label"
                        role={undefined}
                        aria-label="delete"
                        // tabIndex={-1}
                        color="inherit"
                    >
                        <AttachFileOutlinedIcon
                            sx={{ fontSize: 40 }}
                        />
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <TextField
                        sx={{ width: '100%', }}
                        label="Введите сообщение"
                        variant="outlined"
                    />
                <Button
                    variant="contained"
                    sx={{ padding: '0 25px', marginLeft: '30px' }}
                >
                    Отправить
                </Button>
            </form>
        </div>
    )
}

export default SendForm