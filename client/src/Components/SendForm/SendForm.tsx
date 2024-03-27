import { TextField } from '@mui/material'
import React from 'react'
import s from './SendForm.module.scss'

type Props = {}

const SendForm = (props: Props) => {
    return (
        <div className={s.inputForm}>
            <form action="/send" method="post">
                <TextField
                    sx={{ width: '100%' }}
                    label="Введите сообщение"
                    variant="outlined"
                />
            </form>
        </div>
    )
}

export default SendForm