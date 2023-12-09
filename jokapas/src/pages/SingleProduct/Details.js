import "./details.css"
export function Details() {
    return (
        <div className="product-details-container">
            <h2 className="detail-title">Tulajdonságok</h2>
            <div className="product-details">
                <div className="detail-column">
                    <span className="detail">Ár: 30000 Ft</span>
                    <span className="detail">Állapot: Használt</span>
                </div>
                <div className="detail-column">
                    <span className="detail">Régió: Nógrád vármegye</span>
                    <span className="detail">Gyártási év: 2021</span>
                </div>
            </div>
            <h2 className="detail-title">Leírás</h2>
            <div className="description">
                Eladásra kínálok egy strapabíró használt lapátot, mely ideális választás kerti munkákhoz vagy általános talajmunkákhoz. 
                Az acél lapát lapja rendkívül tartós és még mindig kiváló állapotban van. 
                A fás nyél megfelelő fogást biztosít, és könnyű vele dolgozni.
            </div>
            <div className="detail-footer">
                <span>Feladás dátuma: 2023.12.02.</span>
                <button className="cart-button">Kosárba rakás</button>
            </div>
        </div>
    )
}