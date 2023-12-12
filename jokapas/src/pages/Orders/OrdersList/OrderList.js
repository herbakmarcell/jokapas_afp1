import { Order } from "./Order"
import "./orderList.css"
import axios from 'axios';
import { useEffect,useState } from "react"
export function OrderList(){
    const [orderList, setOrderList] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3001/api/orders', { withCredentials: true }).then((response) => {
        setLoading(false)
        console.log(response.data);
        setOrderList(response.data)
        })
        .catch((error) => {
            setLoading(false)
            setOrderList([])
        })
    },[])
    return(
        <div className="order-list-container">
            <h2>Termék lista</h2>
            {loading ? (<p>loading</p>) : 
            (
                orderList.map((order) => (
                    <Order order={order}/>
                ))
            )
            }
        </div>
    )
}