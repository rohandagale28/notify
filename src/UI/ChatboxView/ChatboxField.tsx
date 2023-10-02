import React from 'react'
import { useEffect, useRef } from 'react'
import { Message } from "./Message"
import { EmptyChatbox } from '../../components/EmptyChatbox/EmptyChatbox'

export const ChatboxField = ({ messages }) => {

    const containerRef = useRef(null)

    console.log(messages)

    useEffect(() => {
        containerRef.current?.scrollIntoView({ block: "end", behavior: "smooth" })
    }, [messages])

    return (
        <>
            <div className="chatbox-field" ref={containerRef}>
                {messages.length > 0 ? (
                    messages.map((item) => (
                        <React.Fragment key={item._id}>
                            <Message message={item} />
                        </React.Fragment>
                    ))
                ) : (
                    <EmptyChatbox text={"No Messages"} />
                )}
            </div>
        </>
    )
}
