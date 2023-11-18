import { Product } from "./Product"
import "./productList.css"
export function ProductList(){
    return(
        <div className="product-list-container">
            <h2>Termék lista</h2>
            <Product id={1}/>
            <Product id={2}/>
            <Product id={3}/>
        </div>
    )
}