import { Link } from "react-router-dom"
import "./product.css"
import { RatingStars } from "./RatingStars"
export function Product({product}){
    return(
        <div className="product-container">
            <div className="product-img-container">
                <img className="product-img" src="shovel.png" alt="product"/>
            </div>
            <div className="product-data-container">
                <Link to={'/product/' + product.id}>{product.name}</Link>
                <span>Teszt Elek <RatingStars rating={3}/></span>
                <p className="product-description">{product.description}
                </p>
            </div>
            <div className="product-buy-container">
                <h3>{product.price} Krajcár</h3>
                <button className="add-cart-button">Kosárba teszem</button>
            </div>
        </div>
    )
}