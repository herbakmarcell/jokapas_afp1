import { RatingStars } from "../Market/ProductList/RatingStars";
import "./singleProduct.css"
import { useParams } from "react-router-dom";
export function SingleProduct(){
    const {id} = useParams();
    return(
        <div className="single-product-container">
            <div className="product-title-container">
                Termék címe
            </div>
            <div className="product-content-container">
                <div className="product-container-div">
                    <div className="product-img-container">
                        <img className="product-img" src="shovel.png" alt="product-img"/>
                        </div>
                        
                    <div className="product-details">Részletek</div>
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