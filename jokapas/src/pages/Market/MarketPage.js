
import { FilterPanel } from './FilterPanel/FilterPanel'
import './marketPage.css'
export function MarketPage(){
    return(
        <div className="market-container">
            <div className="market-title">Kínálat</div>
            <div className="market-content-container">
                <FilterPanel/>
            </div>
        </div>
    )
}