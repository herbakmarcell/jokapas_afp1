
import { useState } from 'react'
import { FilterPanel } from './FilterPanel/FilterPanel'
import { ProductList } from './ProductList/ProductList'
import './marketPage.css'
import { Spinner } from '../../components/Spinner/Spinner'
export function MarketPage(){
    const [isLoading, setLoading] = useState(false)

    if(isLoading){
        return <Spinner/>
    }
    return(
        <div className="market-container">
            <div className="market-title">Kínálat</div>
            <div className="market-content-container">
                <FilterPanel/>
                <ProductList/>
            </div>
        </div>
    )
}