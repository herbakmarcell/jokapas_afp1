import { AccountTab } from "./AccountTab";
import { DeleteTab } from "./DeleteTab";
import { HistoryTab } from "./HistoryTab";
import { SecurityTab } from "./SecurityTab";

export function ProfileTabs({activeTab, user}){
    return (
        <>
        {activeTab === 0 && 
                <AccountTab user={user}/>
        }
        {activeTab === 1 && 
            <div>
                <HistoryTab/>
            </div>
        }
        {activeTab === 2 && 
            <div>
                <SecurityTab user={user}/>
            </div>
        }
        {activeTab === 3 && 
            <div>
                <DeleteTab/>
            </div>
        }
        </>
    )
}