import s from './Header.module.scss'
import login from '../Icons/login.png'
// import logout from '../Icons/logout.png'
import ghost from '../Icons/ghost.png'

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.iconContainer}>
                <img src={ghost} alt="ghost" />
                <span>WhisperChat</span>
            </div>
            {/* <div className={s.iconContainer}>
                <span>Никнейм</span>
                <img src={logout} alt="logout" />
            </div> */}
            <div className={s.iconContainer}>
                <span>Войти</span>
                <img src={login} alt="login" />
            </div>
        </div>
    )
}

export default Header