import React from 'react'
import SendForm from '../SendForm/SendForm'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <div>
            Message
            <SendForm />
        </div>
    )
}

export default MainLayout