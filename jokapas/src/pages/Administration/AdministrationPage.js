import './administrationPage.css'
import './AdminSelect'
import { ListFirst, ListSecond, ListThird } from './AdminSelect';
import { Link } from "react-router-dom";



export function AdminPage(){
    return(
        <div className="admin-container">
            <div className='admin-title'>
                Ügyintézés
            </div>
            <div className="main-list-container">
                <div className='list-container'>
                    <span className='list-title'>Probléma típusa:</span>
                    <ListFirst/>
                </div>
                <div className='list-container'>                    
                    <span className='list-title'>Probléma forrása:</span>
                    <ListSecond/>
                </div>
                <div className='list-container'>
                    <span className='list-title'>Támogatás típusa:</span>
                    <ListThird/>
                </div>
                
            </div>
            <div>
                <form className='desc-container'>
                    <label className='desc-title'>
                        Megjegyzés
                    </label>
                    <textarea className='desc-text' placeholder='Leírás' rows="4" cols="50"/>
                    <button className='file-upload-button' type="submit">Fájl feltöltése</button>                    
                    <button className='desc-submit-button' type="submit"><Link to="/adminsuccess"> Küldés</Link></button>
                </form>
            </div>
        </div>
    )
}