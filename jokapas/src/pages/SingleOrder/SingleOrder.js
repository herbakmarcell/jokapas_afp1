import { RatingStars } from "../Market/ProductList/RatingStars";
import { useParams } from "react-router-dom";
import "./singleOrder.css"
import { Details } from "./Details";
import axios from 'axios';
import { useEffect,useState } from "react"
export function SingleOrder(){
    const {id} = useParams();
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3001/api/orders/' + id, { withCredentials: true }).then((response) => {
        console.log(response.data);
        setOrder(response.data)
        setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            setOrder([])
        })
    },[])
    return(
        <div className="single-order-container">
             {loading ? (<p>loading</p>) : 
            ( 
            <>
                <div className="order-title-container">
                    <h2>{order.name}</h2>
                </div>
                <div className="order-content-container">
                    <div className="order-container-div">
                        <div className="order-img-container">
                            <img className="order-img" src="shovel.png" alt="order-img"/>
                        </div>
                            
                        <Details order={order}/>
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