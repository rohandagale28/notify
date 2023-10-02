import { useContext } from 'react'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { AccountContext } from '../../context/AccountProvider'
import { addUser } from '../../services/Api'
import { GoogleUserInfo } from './GoogleUserInfo'

export const Login = () => {
    const { setAccount } = useContext(AccountContext)

    const onLoginSuccess = async (res: CredentialResponse) => {
        const decoded: GoogleUserInfo = jwtDecode(res.credential as string)
        await addUser(decoded).then(res => setAccount(res))
        window.localStorage.setItem("user", JSON.stringify(decoded))
    }

    const onLoginError = () => {
        console.error("error while login")
    }

    return (
        <>
            <div>
                <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </div>
        </>
    )
}
