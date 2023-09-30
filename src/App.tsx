import React from 'react'
import "./sass/main.scss"
import { Messanger } from './UI/Authchecker/Auth'
import AccountProvider from './context/AccountProvider'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const App = () => {
  const clientId = "372173973000-23ufh2fiel3j0s7414gvlo77ksr8nl11.apps.googleusercontent.com"

  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messanger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </React.Fragment>
  )
}
