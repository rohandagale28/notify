import { createContext, useState, useEffect } from "react"
import { io, Socket } from 'socket.io-client'


export const AccountContext = createContext<any | undefined>(undefined)

const AccountProvider = ({ children }: { children: React.ReactNode }) => {
    const [account, setAccount] = useState<object>()
    const [person, setPerson] = useState<object>({})
    const [user, setUser] = useState<object>({})
    const [messages, setMessages] = useState<object[]>([])
    const [trigger, setTrigger] = useState(false)
    const [newMessage, setNewMessage] = useState({})
    const [search, setSearch] = useState<string>()
    const [socket, setSocket] = useState<Socket | null>(null)

    useEffect(() => {
        setSocket(io("ws://localhost:9000"))
    }, [])

    return (
        <AccountContext.Provider value={{ account, setAccount, user, setUser, person, setPerson, messages, setMessages, trigger, setTrigger, newMessage, setNewMessage, search, setSearch, socket }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider