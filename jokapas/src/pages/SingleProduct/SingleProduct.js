import { RatingStars } from "../Market/ProductList/RatingStars";
import { useParams } from "react-router-dom";
import "./singleProduct.css"
import { Details } from "./Details";
import axios from 'axios';
import { useEffect,useState } from "react"
export function SingleProduct(){
    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3001/api/products/' + id, { withCredentials: true }).then((response) => {
        console.log(response.data);
        setProduct(response.data)
        setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            setProduct([])
        })
    },[])
    return(
        <div className="single-product-container">
             {loading ? (<p>loading</p>) : 
            ( 
            <>
                <div className="product-title-container">
                    <h2>{product.name}</h2>
                </div>
                <div className="product-content-container">
                    <div className="product-container-div">
                        <div className="product-img-container">
                            <img className="product-img" src="kes.png" alt="product-img"/>
                        </div>
                            
                        <Details product={product}/>
                    </div>
                    <div className="user-div">
                        <img className="profile-img" src="avatar.jpg" alt="profile-img"/>
                        <div className="profile-data">
                            <span>Teszt Elek (teszt)</span>
                            <div><RatingStars rating={3}/></div>
                        </div>
                    </div>
                </div>
            </>
            )}
        </div>
    )
}