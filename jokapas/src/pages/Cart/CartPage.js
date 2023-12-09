import './cartPage.css'
import { CartList } from './CartList/CartList' 

export function CartPage(){
    return(
        <div className='cart-container'>
            <div className='cart-title'>
                Kosár
                
                
            </div>
            <div className='cart-content-container'>
                    <CartList/>
                </div>
        </div>
    )
}