import "./details.css"
export function Details({order}) {
    return (
        <div className="order-details-container">
            <h2 className="detail-title">Tulajdonságok</h2>
            <div className="order-details">
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
                {order.description}
            </div>
            <div className="detail-footer">
                <span>Feladás dátuma: {order.publish_date}</span>
            </div>
        </div>
    )
}