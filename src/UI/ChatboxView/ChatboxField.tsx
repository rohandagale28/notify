import React from 'react'
import { useEffect, useRef } from 'react'
import { Messsage } from "./Messsage"
import { EmptyChatbox } from '../../components/EmptyChatbox/EmptyChatbox'

export const ChatboxField = ({ messages }) => {

    const containerRef = useRef(null)

    console.log(messages)

    useEffect(() => {
        // containerRef.current?.scrollTo({ top: containerRef, block: "end" })
    }, [messages])

    return (
        <>
            <div className="chatbox-field" ref={containerRef}>
                {messages.length > 0 ? messages.map((item) => {
                    return (
                        <React.Fragment key={item._id}>
                            <Messsage message={item} />
                        </React.Fragment>
                    )
                }
                ) :
                    <>
                        <EmptyChatbox text={"No Messages"} />
                    </>
                }
            </div>
        </>
    )
}
