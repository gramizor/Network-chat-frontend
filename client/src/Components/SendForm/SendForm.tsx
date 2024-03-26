import { Input } from '@mui/material'
import React from 'react'

type Props = {}

const SendForm = (props: Props) => {
    return (
        <div>
            <form action="/send" method="post">
                <Input sx={{ width:"100%" }}></Input>
            </form>
        </div>
    )
}

export default SendForm