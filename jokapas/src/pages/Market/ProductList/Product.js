import { Link } from "react-router-dom"
import "./product.css"
import { RatingStars } from "./RatingStars"

export function Product({product}){
    const getImageSource = (productId) => {
        switch (productId) {
            case 1:
                return "kes.png";
            case 2:
                return "festmeny.png";
            case 3:
                return "gereble.png"


        }
    };

    const imageSource = getImageSource(product.id);
    return(
        <div className="product-container">
            <div className="product-img-container">
            <img className="product-img" src={imageSource} alt="product" />
            </div>
            <div className="product-data-container">
                <Link to={'/product/' + product.id}>{product.name}</Link>
                <span>{product.seller_name} <RatingStars rating={3}/></span>
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