import React, { useContext, useEffect } from "react"
import { Messanger } from "./Messanger"
import { AccountContext } from "../../../context/AccountProvider"
import { getUsers } from "../../../services/Api"

export const ConversationList = ({ account }) => {

    const { newMessage, search } = useContext(AccountContext)

    const fetchData = async () => {
        try {
            const response = await getUsers(search);
            console.log(response)
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }


    useEffect(() => {
        fetchData()
    }, [search])


    return (
        <>
            <div className="conversation-list">
                {!search ? <>
                    {account ? account?.contact_list?.map((item) => {
                        return (
                            <React.Fragment key={item.sub}>
                                <Messanger contact={item} newMessage={newMessage} />
                            </React.Fragment>
                        )
                    }
                    ) :
                        <>
                            Add Friends
                        </>
                    }
                </>
                    :
                    <>
                        searching
                    </>}

            </div>
        </>
    )
}
