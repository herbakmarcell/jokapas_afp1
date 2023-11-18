import { Link } from "react-router-dom"
import "./product.css"
import { RatingStars } from "./RatingStars"
export function Product(){
    return(
        <div className="product-container">
            <div className="product-img-container">
                <img className="product-img" src="shovel.png" alt="product"/>
            </div>
            <div className="product-datas-container">
                <Link to="/">Címe ennek a terméknek, lehet hosszu is</Link>
                <span>Teszt Elek <RatingStars rating={3}/></span>
                <p className="product-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
            </div>
            <div className="product-buy-container">
                <h3>12 000 Krajcár</h3>
                <button className="add-cart-button">Kosárba teszem</button>
            </div>
        </div>
    )
}