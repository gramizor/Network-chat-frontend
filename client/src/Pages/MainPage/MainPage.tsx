// import React from 'react'
import s from './MainPage.module.scss'
import Header from '../../Components/Header/Header'
import MainLayout from '../../Components/MainLayout/MainLayout'

// type Props = {}

const MainPage = () => {
    return (
        <div className={s.container}>
            <Header />
            <MainLayout />
        </div>
    )
}

export default MainPage