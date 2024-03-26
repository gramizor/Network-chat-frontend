import s from './Header.module.scss'
// import ghost from '../Icons/ghost.png'
import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';

const Header = () => {
    return (
        <div>

            <div className={s.container}>
                <button className={s.iconContainer}>
                    {/* <img src={ghost} alt="ghost" /> */}
                    <ChatIcon sx={{ fontSize: 30 }} />
                    <span>WhisperChat</span>
                </button>
                {/* <button className={s.iconContainer}>
                    <span>Никнейм</span>
                    <img src={logout} alt="logout" />
                    <LogoutIcon sx={{ fontSize: 30 }} />
                </button> */}
                <button className={s.iconContainer}>
                    <span>Войти</span>
                    <LoginIcon sx={{ fontSize: 30 }} />
                </button>
            </div>
            <div className={s.banner}>
                <button>
                    Чтобы начать общение, необходимо войти в систему
                </button>
            </div>
        </div>
    )
}

export default Header