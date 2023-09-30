import { useContext } from 'react'
import { GoogleLogin, GoogleLoginResponse } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { AccountContext } from '../../context/AccountProvider'
import { addUser } from '../../services/Api'

export const Login = () => {
    const { setAccount } = useContext(AccountContext)

    const onLoginSuccess = async (res: GoogleLoginResponse) => {
        const decoded: any = jwtDecode(res.credential)
        await addUser(decoded).then(res => setAccount(res.data))
        window.localStorage.setItem("user", JSON.stringify(decoded))
    }

    const onLoginError = () => {
        console.log("Error While Login")
    }

    return (
        <>
            <div>
                <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </div>
        </>
    )
}
