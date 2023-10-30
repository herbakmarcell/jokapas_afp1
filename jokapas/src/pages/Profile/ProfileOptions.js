import "./profileOptions.css"
export function ProfileOptions(){
    return(
        <div className="options-container">
            <div className="tracking-div">
                <button className="option-button">Rendeléskövetés</button>
            </div>
            <div className="rates-div">
                <button className="option-button">Értékelések</button>
            </div>
            <div className="cart-div">
                Kosárban található termékek száma: 5
            </div>
            <div className="placeholder-div">
                Placeholder
            </div>
        </div>
    )
}