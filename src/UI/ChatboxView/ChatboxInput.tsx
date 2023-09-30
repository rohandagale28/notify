import { useState, useContext, useEffect } from "react"
import { DocIcon } from "../../components/svg/DocIcon"
import { SendIcon } from "../../components/svg/SendIcon"
import { newMessage } from "../../services/Api"
import { AccountContext } from "../../context/AccountProvider"

export const ChatboxInput = ({ conversationId }) => {
    const { account, person, setTrigger, trigger, setNewMessage, socket } = useContext(AccountContext)
    const [text, setText] = useState("")

    const sendText = async (e: any) => {
        e.preventDefault()
        let message = {
            senderId: account.sub,
            receiverId: person.sub,
            conversationId: conversationId,
            type: "text",
            text: text
        }

        if (text.length === 0) {
            console.log("message should be something")
        }
        else {
            try {
                socket.emit("sendMessage", message)
                await newMessage(message);
            } catch (err) {
                console.log("coldn't send message")
            }
        }
        setText("")
        setTrigger(!trigger)
        setNewMessage(message)

    }

    return (
        <>
            <div className="chatbox-input">
                <div className="chatbox-input-icons">
                    <DocIcon />
                </div>
                <div className="chatbox-input-field">
                    <form action="" onSubmit={sendText}>
                        <input type="text" placeholder="Write a message" value={text} onChange={(e) => setText(e.target.value)} />
                    </form>
                </div>
                <div className="send-icon" onClick={sendText}>
                    <SendIcon />
                </div>
            </div>
        </>
    )
}
