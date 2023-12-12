
import { useState } from 'react'
import './ordersPage.css'
import { Spinner } from '../../components/Spinner/Spinner'
export function OrdersPage(){
    const [isLoading, setLoading] = useState(false)

    if(isLoading){
        return <Spinner/>
    }
    return(
        <div className="orders-container">
            <div className="orders-title">Rendelések</div>
            <div className="orders-content-container">
            </div>
        </div>
    )
}