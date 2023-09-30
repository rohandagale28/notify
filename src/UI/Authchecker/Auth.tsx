import React, { useContext, useEffect } from 'react'
import "../../sass/ui.scss"
import { Login } from '../LoginView/Login'
import { AccountContext } from '../../context/AccountProvider'
import { UI } from '../UI'
import { addUser } from '../../services/Api'

export const Messanger = () => {
    const { account, setAccount } = useContext(AccountContext)

    useEffect(() => {
        const user: any = window.localStorage.getItem("user")

        if (user) {
            const existingUser = JSON.parse(user)
            const Existuser = async () => {
                await addUser(existingUser).then(res => setAccount(res.data))
            }
            Existuser()
        }

    }, [])

    return (
        <React.Fragment>
            {account ? <UI /> : <Login />}
        </React.Fragment>
    )
}
