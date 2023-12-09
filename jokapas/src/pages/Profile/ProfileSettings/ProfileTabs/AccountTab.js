import "./accountTab.css"
export function AccountTab({user}){
    return (
        <div className="account-tab-container">
            <div className="data-types with-border">
                <h3 className="type-title">Alapadatok</h3>
                <div className="data-container">
                    <p className="data-field">Felhasználónév: {user.username} <span className="edit-button">Szerkesztés</span></p>
                    <p className="data-field">Teljes név: {user.full_name} <span className="edit-button">Szerkesztés</span></p>
                    
                </div>
            </div>
            <div className="data-types">
                <h3 className="type-title">Email</h3>
                <div className="data-container">
                    <p className="data-field">Email: {user.email} <span className="edit-button">Szerkesztés</span></p>
                </div>
            </div>
        </div>
    )
}