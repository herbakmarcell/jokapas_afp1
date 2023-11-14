import './administrationPage.css'
import './AdminSelect'
import { ListFirst, ListSecond } from './AdminSelect';
import { Link } from "react-router-dom";


export function AdminPage(){
    return(
        <div className="admin-container">
            <div className='admin-title'>
                Ügyintézés
            </div>
            <div className="list-container">
                <ListFirst/>
                <ListSecond/>
            </div>
            <div>
                <form className='desc-container'>
                    <label className='desc-title'>
                        Megjegyzés
                    </label>
                    <textarea className='desc-text' placeholder='Leírás' rows="4" cols="50"/>
                    <button className='desc-submit-button' type="submit"><Link to="/adminsuccess"> Küldés</Link></button>
                </form>
            </div>
        </div>
    )
}