import "./profileSettings.css"
import { useState } from 'react';
export function ProfileSettings({showActiveTab}) {
    const [active, setActive] = useState(0)

    function updateActiveTab(activeTab){
        setActive(activeTab)
        showActiveTab(activeTab)
    }

    return (
        <ul className="profile-setting-ul">
            <li className={active === 0 ? "profile-setting-li active" : "profile-setting-li"} onClick={()=> updateActiveTab(0)}>Adatlap</li>
            <li className={active === 1 ? "profile-setting-li active" : "profile-setting-li"} onClick={()=> updateActiveTab(1)}>Vásárlási előzmények</li>
            <li className={active === 2 ? "profile-setting-li active" : "profile-setting-li"} onClick={()=> updateActiveTab(2)}>Biztonság</li>
            <li className={active === 3 ? "profile-setting-li active" : "profile-setting-li"} onClick={()=> updateActiveTab(3)}>Felhasználó törlése</li>
        </ul>
    )
}