import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'


export const Messsage = ({ message }) => {

    const { account } = useContext(AccountContext)

    return (
        <>
            {account.sub !== message.senderId ?
                <>
                    <div className="message-container-main">
                        <div className="message-container">
                            <div className="message-text">
                                {message.text}
                            </div>
                            <div className="message-container-created">
                                12:49
                            </div>
                        </div>
                    </div >
                </> :
                <>
                    <div className="message-container-main-sender">
                        <div className="message-container">
                            <div className="message-text">
                                {message.text}
                            </div>
                            <div className="message-container-created">
                                12:49
                            </div>
                        </div>
                    </div >
                </>
            }
        </>
    )
}
