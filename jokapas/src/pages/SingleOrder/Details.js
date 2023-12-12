import "./details.css"
export function Details({product}) {
    return (
        <div className="product-details-container">
            <h2 className="detail-title">Tulajdonságok</h2>
            <div className="product-details">
                <div className="detail-column">
                    <span className="detail">Ár: {order.price} Ft</span>
                    <span className="detail">Állapot: {order.status}</span>
                </div>
                <div className="detail-column">
                    <span className="detail">Régió: {order.region}</span>
                    <span className="detail">Gyártási év: {order.year}</span>
                </div>
            </div>
            <h2 className="detail-title">Leírás</h2>
            <div className="description">
                {product.description}
            </div>
            <div className="detail-footer">
                <span>Feladás dátuma: {order.publish_date}</span>
                <button className="cart-button">Kosárba rakás</button>
            </div>
        </div>
    )
}