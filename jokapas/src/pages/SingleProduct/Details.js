import "./details.css"
export function Details({product}) {
    return (
        <div className="product-details-container">
            <h2 className="detail-title">Tulajdonságok</h2>
            <div className="product-details">
                <div className="detail-column">
                    <span className="detail">Ár: {product.price} Ft</span>
                    <span className="detail">Állapot: {product.status}</span>
                </div>
                <div className="detail-column">
                    <span className="detail">Régió: {product.region}</span>
                    <span className="detail">Gyártási év: {product.year}</span>
                </div>
            </div>
            <h2 className="detail-title">Leírás</h2>
            <div className="description">
                {product.description}
            </div>
            <div className="detail-footer">
                <span>Feladás dátuma: {product.publish_date}</span>
                <button className="cart-button">Kosárba rakás</button>
            </div>
        </div>
    )
}