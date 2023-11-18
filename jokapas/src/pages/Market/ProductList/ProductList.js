import { Product } from "./Product"
import "./productList.css"
export function ProductList(){
    return(
        <div className="product-list-container">
            <h2>Termék lista</h2>
            <Product/>
            <Product/>
            <Product/>
        </div>
    )
}