import React from "react";
import { Link } from "react-router-dom";
import "./adminSuccess.css"

export function AdminSuccess(){
    return(
        <div className="admin-success-container">
            <div>
                <h1>Sikeresen elküldte bla bla Győző kiegészíti</h1>
            </div>
            <div className="admin-success-link-container">
                <Link to="/" className='admin-success-link'> Vissza a főoldalra </Link>
            </div>
        </div>
    )
}