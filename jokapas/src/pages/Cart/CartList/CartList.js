import { CartProduct } from "./CartProduct"
import "./cartList.css"
export function CartList(){
    return(
        <div className="cart-list-container">
            <h2>Kosár tartalma</h2>
            <CartProduct id={1}/>
            <CartProduct id={2}/>
            <CartProduct id={3}/>
        </div>
    )
}