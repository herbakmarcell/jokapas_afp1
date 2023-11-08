import { useState } from "react"
import { ProfileOptions } from "./ProfileOptions"
import { ProfileSettings } from "./ProfileSettings/ProfileSettings"
import "./profilePage.css"
import { ProfileTabs } from "./ProfileSettings/ProfileTabs/ProfileTabs"
export function ProfilePage() {
    const [activeTab, setActiveTab] = useState(0)

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
                        </div>
                        <div className="profile-name">
                            Admin
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
                        <ProfileTabs activeTab={activeTab}/>
                    </div>
                </div>
            </div>
        </div>
    )
}