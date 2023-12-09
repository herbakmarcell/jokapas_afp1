import { useEffect,useState } from "react"
import { ProfileOptions } from "./ProfileOptions"
import { ProfileSettings } from "./ProfileSettings/ProfileSettings"
import "./profilePage.css"
import { ProfileTabs } from "./ProfileSettings/ProfileTabs/ProfileTabs"
import axios from 'axios';
export function ProfilePage() {
    const [activeTab, setActiveTab] = useState(0)
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/api/user', { withCredentials: true }).then((response) => {
        console.log(response.data);
        setUser(response.data)
        console.log(user.username)
        })
        .catch((error) => {
            setUser([])
        })
    },[])
    function showActiveTab(active){
        setActiveTab(active)
    }
    return(
        <div className='profile-container'>
            <div className="profile-div">
                <div className="profile-header">
                    <div className="profile-pic-container">
                        <div className="profile-pic">
                            <img className="profile-avatar" src="avatar.jpg" alt="avatar"/>
                            <span className="edit-img">Profilkép szerkesztése</span>
                        </div>
                        <div className="profile-name">
                            {user.username}
                        </div>
                    </div>
                    <div className="profile-options">
                        <ProfileOptions/>
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-functions-left">
                        <ProfileSettings showActiveTab={showActiveTab}/>
                    </div>
                    <div className="profile-functions-right">
                        <ProfileTabs activeTab={activeTab} user={user}/>
                    </div>
                </div>
            </div>
        </div>
    )
}