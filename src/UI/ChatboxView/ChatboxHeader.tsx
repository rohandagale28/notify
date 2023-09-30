import profile from '../../assets/profile.png'
import { CallIcon } from '../../components/svg/CallIcon'
import { SearchIcon } from '../../components/svg/SearchIcon'
import { VideoIcon } from '../../components/svg/VideoIcon'


export const ChatboxHeader = ({ person }) => {
    return (
        <>
            <div className="chatbox-header">
                <div className="user-profile">
                    <img src={person?.picture} />
                </div>
                <div className="user-name">
                    {person?.name}
                </div>
                <div className="chatbox-icons">
                    <div className="video-icon">
                        <VideoIcon />
                    </div>
                    <div className="call-icon">
                        <CallIcon />
                    </div>
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                </div>
            </div>
        </>
    )
}
