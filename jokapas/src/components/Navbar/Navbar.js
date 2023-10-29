import { Link } from 'react-router-dom'
import './navbar.css'
import { CustomLink } from './CustomLink'
import { LoginPage } from '../../pages/Login/LoginPage'

export function Navbar() {
    return(
        <div className="container">
            <nav className='navbar'>
                <Link className='nav-title' to="/">Jokapás</Link>
                <div class="link-container">
                    <ul class="nav-links">
                        <CustomLink>
                            Kínálat
                        </CustomLink>
                        <CustomLink>
                            Ügyintézés
                        </CustomLink>
                        <CustomLink>
                            GYIK
                        </CustomLink>
                    </ul>
                    <Link to="/login">
                        Bejelentkezés
                    </Link>
                </div>
            </nav>
        </div>
        
    )
}