import { RatingStars } from "../Market/ProductList/RatingStars";
import { useParams } from "react-router-dom";
import "./singleProduct.css"
import { Details } from "./Details";
export function SingleProduct(){
    const {id} = useParams();
    return(
        <div className="single-product-container">
            <div className="product-title-container">
                Használt lapát
            </div>
            <div className="product-content-container">
                <div className="product-container-div">
                    <div className="product-img-container">
                        <img className="product-img" src="shovel.png" alt="product-img"/>
                        </div>
                        
                    <Details/>
                </div>
                <div className="user-div">
                    <img className="profile-img" src="avatar.jpg" alt="profile-img"/>
                    <div className="profile-data">
                        <span>Teszt Elek (teszt)</span>
                        <div><RatingStars rating={3}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}