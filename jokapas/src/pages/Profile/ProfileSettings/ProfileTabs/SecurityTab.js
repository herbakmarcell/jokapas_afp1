import "./securityTab.css"
export function SecurityTab({user}){
    return(
        <div className="security-tab-container">
            <div className="data-types with-border">
                <h3 className="type-title">Jelszó</h3>
                <div className="data-container">
                    <p className="data-field">Jelszó: <span className="password-markers">*****</span> <span className="edit-button">Szerkesztés</span></p>
                </div>
            </div>
        </div>
    )
}