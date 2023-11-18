
import { FilterPanel } from './FilterPanel/FilterPanel'
import { ProductList } from './ProductList/ProductList'
import './marketPage.css'
export function MarketPage(){
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