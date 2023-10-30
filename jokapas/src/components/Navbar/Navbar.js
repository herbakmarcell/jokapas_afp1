import { Link } from 'react-router-dom'
import './navbar.css'
import { CustomLink } from './CustomLink'
import { LoginPage } from '../../pages/Login/LoginPage'

export function Navbar() {
    return(
        <div className="container">
            <nav className='navbar'>
                <Link className='nav-title' to="/">Jokapás</Link>
                <div className="links">
                    <ul className="nav-links">
                        <CustomLink to ="/market">
                            Kínálat
                        </CustomLink>
                        <CustomLink to ="/admin">
                            Ügyintézés
                        </CustomLink>
                        <CustomLink to ="/faq">
                            GYIK
                        </CustomLink>
                    </ul>
                    <Link className="login-link" to="/login">
                        Bejelentkezés
                    </Link>
                </div>
            </nav>
        </div>
    )
}