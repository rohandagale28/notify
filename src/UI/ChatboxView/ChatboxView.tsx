import { useContext, useEffect, useState } from 'react'
import { AccountContext } from "../../context/AccountProvider"
import "../../sass/chatbox.scss"
import { ChatboxField } from "./ChatboxField"
import { ChatboxHeader } from "./ChatboxHeader"
import { ChatboxInput } from "./ChatboxInput"
import { EmptyChatbox } from '../../components/EmptyChatbox/EmptyChatbox'
import { createConversation, getMessages } from '../../services/Api'

export const ChatboxView = () => {
    const { person, account, trigger, socket } = useContext(AccountContext)

    const [conversationId, setConversationId] = useState<string | undefined>(undefined);
    const [messages, setMessages] = useState<object[]>([])
    const [incommingMessage, setIncommingMessage] = useState<any>()


    const getConversationMessages = async () => {
        try {
            const conversationIdResponse = await createConversation({ senderId: account.sub, receiverId: person.sub })
            const conversationId = conversationIdResponse.data._id
            setConversationId(conversationId)

            const res = await getMessages(conversationId)
            setMessages(res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        socket.on("getMessage", (data: object) => {
            console.log(data, "this data is comming in msg format")
            setIncommingMessage(data)
        })
    }, [])

    useEffect(() => {
        console.log(incommingMessage, "this is inccomeing useState")
        incommingMessage && person.sub === incommingMessage.senderId &&
            setMessages((prev: any) => [...prev, incommingMessage])
    }, [incommingMessage])

    useEffect(() => {
        getConversationMessages()
    }, [person, conversationId, trigger])

    return (
        <>
            <div className="chatbox">
                {Object.keys(person).length ?
                    <>
                        <ChatboxHeader person={person} />
                        <ChatboxField messages={messages} />
                        <ChatboxInput conversationId={conversationId} />
                    </>
                    :
                    <>
                        <EmptyChatbox text={"start Conversation"} />
                    </>
                }
            </div>
        </>
    )
}
