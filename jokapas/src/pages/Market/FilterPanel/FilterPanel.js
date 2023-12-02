import { Category } from "./Category";
import "./filterPanel.css"
import React, {useState} from 'react'
export function FilterPanel() {
    const [searchInput, setSearchInput] = useState("")
    function handleChange(e) {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    return (
        <div className="filter-container">
            <input type="text" 
                placeholder="Keresés" 
                onChange={handleChange} 
                value={searchInput}
                className="filter-search"
            />
            <div className="category-container">
                <Category text={"Mezőgazdasági"} id={"1"}/>
                <Category text={"Konyhai"} id={"2"}/>
                <Category text={"Kertészeti"} id={"3"}/>
                <Category text={"Hadászati"} id={"4"}/>
            </div>
        </div>
    )
}