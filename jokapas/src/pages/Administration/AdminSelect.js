import React, { useState } from 'react'

export function ListFirst(){
    
    const [selects,setSelects] = useState()
        return(
            <div>
                <select value={selects} on change={e=>e.setSelects(e.target.value)}>
                    <option>-</option>
                    <option>Egy</option>
                    <option>Ketto </option>
                    <option>Harom </option>
                    <option>Negy </option>
                </select>
            </div>
        )
}

export function ListSecond(){
    
    const [selects,setSelects] = useState()
        return(
            <div>
                <select value={selects} on change={e=>e.setSelects(e.target.value)}>
                    <option>-</option>
                    <option>Egy </option>
                    <option>Ketto </option>
                    <option>Harom </option>
                    <option>Negy </option>
                    </select>
            </div>
        )
}