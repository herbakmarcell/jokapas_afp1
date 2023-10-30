import { ProfileOptions } from "./ProfileOptions"
import "./profilePage.css"
export function ProfilePage() {
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
                        Left
                    </div>
                    <div className="profile-functions-right">
                        Right
                    </div>
                </div>
            </div>
        </div>
    )
}