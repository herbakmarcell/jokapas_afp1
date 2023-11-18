import "./accountTab.css"
export function AccountTab(){
    return (
        <div className="account-tab-container">
            <div className="data-types with-border">
                <h3 className="type-title">Alapadatok</h3>
                <div className="data-container">
                    <p className="data-field">Felhasználónév: Admin</p>
                    <p className="data-field">Teljes név: Admin Admin</p>
                    
                </div>
            </div>
            <div className="data-types">
                <h3 className="type-title">Email</h3>
                <div className="data-container">
                    <p className="data-field">Email: admin@admin.coman</p>
                </div>
            </div>  
            
        </div>
    )
}