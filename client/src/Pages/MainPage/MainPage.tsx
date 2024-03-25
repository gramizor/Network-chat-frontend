import React from 'react'
import s from './MainPage.module.scss'
import Header from '../../Components/Header/Header'

type Props = {}

const MainPage = (props: Props) => {
    return (
        <div className={s.container}>
            <Header />
            MainPage
        </div>
    )
}

export default MainPage