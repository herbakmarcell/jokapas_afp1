import { Product } from "./Product"
import "./productList.css"
import axios from 'axios';
import { useEffect,useState } from "react"
export function ProductList(){
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3001/api/products', { withCredentials: true }).then((response) => {
        setLoading(false)
        console.log(response.data);
        setProductList(response.data)
        })
        .catch((error) => {
            setLoading(false)
            setProductList([])
        })
    },[])
    return(
        <div className="product-list-container">
            <h2>Termék lista</h2>
            
            {loading ? (<p>loading</p>) : 
            (
                productList.map((product) => (
                    
                    <Product product={product}/>
                ))
            )
            }
        </div>
    )
}