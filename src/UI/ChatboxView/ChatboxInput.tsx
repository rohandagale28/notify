import { useState, useContext } from "react"
import { DocIcon } from "../../components/svg/DocIcon"
import { SendIcon } from "../../components/svg/SendIcon"
import { newMessage } from "../../services/Api"
import { AccountContext } from "../../context/AccountProvider"

interface Message {
    senderId: string;
    receiverId: string;
    conversationId: string;
    type: string;
    text: string;
}

export const ChatboxInput = ({ conversationId, setMessages }) => {
    const { account, person, setTrigger, trigger, socket } = useContext(AccountContext)
    const [text, setText] = useState("")

    const sendText = async (e: React.FormEvent) => {
        e.preventDefault()

        const message: Message = {
            senderId: account.sub,
            receiverId: person.sub,
            conversationId: conversationId._id,
            type: "text",
            text: text
        }

        if (text.trim() === "") {
            console.log("message should be something")
        }
        else {
            try {
                socket.emit("sendMessage", message)
                await newMessage(message);
                setMessages((prev) => [...prev, message])
            } catch (err) {
                console.log("coldn't send message")
            }
        }
        setText("")
        setTrigger(!trigger)
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
