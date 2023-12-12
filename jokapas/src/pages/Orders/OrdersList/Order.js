import { Link } from "react-router-dom"
import "./order.css"
import { RatingStars } from "./RatingStars"
export function Order({order}){
    return(
        <div className="order-container">
            <div className="order-img-container">
                <img className="order-img" src="shovel.png" alt="order"/>
            </div>
            <div className="order-data-container">
                <Link to={'/order/' + order.id}>{order.name}</Link>
                <span>Teszt Elek <RatingStars rating={3}/></span>
                <p className="order-description">{order.description}
                </p>
            </div>
            <div className="order-buy-container">
                <h3>{product.price} Krajcár</h3>
            </div>
        </div>
    )
}