import React, { useState } from 'react'

export function ListFirst(){
    
    const [selects,setSelects] = useState()
        return(
            <div>
                <select value={selects} on change={e=>e.setSelects(e.target.value)}>
                    <option>-</option>                    
                    <option>Személyes </option>
                    <option>Kapcsolat </option>
                    <option>Webshop </option>
                    <option>Szállítás </option>
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
                    <option>Rendelés </option>
                    <option>Feltöltés </option>
                    <option>Licitálás </option>
                    <option>Fizetés </option>
                    <option>Profil </option>
                    </select>
            </div>
        )
}
export function ListThird(){
    
    const [selects,setSelects] = useState()
        return(
            <div>
                <select value={selects} on change={e=>e.setSelects(e.target.value)}>
                    <option>-</option>
                    <option>Jánosné (Chatbot) </option>
                    <option>Telefonos kapcsolatfelvétel </option>
                    <option>Email </option>
                    <option>Közösségi  </option>
                    </select>
            </div>
        )
}