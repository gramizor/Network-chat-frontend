import s from './Header.module.scss'
import ChatIcon from '@mui/icons-material/Chat';
import ModalAuth from '../ModalAuth/ModalAuth';

const Header = () => {
    return (
        <div>

            <div className={s.container}>
                <button className={s.iconContainer}>
                    <ChatIcon sx={{ fontSize: 30 }} />
                    <span>WhisperChat</span>
                </button>
                {/* <button className={s.iconContainer}>
                    <span>Никнейм</span>
                    <img src={logout} alt="logout" />
                    <LogoutIcon sx={{ fontSize: 30 }} />
                </button> */}
                <button className={s.iconContainer}>
                    <ModalAuth />
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