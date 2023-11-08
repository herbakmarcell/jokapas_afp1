import { TwoFATab } from "./2FATab";
import { AccountTab } from "./AccountTab";
import { DeleteTab } from "./DeleteTab";
import { HistoryTab } from "./HistoryTab";
import { SecurityTab } from "./SecurityTab";

export function ProfileTabs({activeTab}){
    return (
        <>
        {activeTab === 0 && 
                <AccountTab/>
        }
        {activeTab === 1 && 
            <div>
                <HistoryTab/>
            </div>
        }
        {activeTab === 2 && 
            <div>
                <SecurityTab/>
            </div>
        }
        {activeTab === 3 && 
            <div>
                <TwoFATab/>
            </div>
        }
        {activeTab === 4 && 
            <div>
                <DeleteTab/>
            </div>
        }
        </>
    )
}