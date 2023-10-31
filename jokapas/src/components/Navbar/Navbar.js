import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { CustomLink } from './CustomLink'
import { LoginPage } from '../../pages/Login/LoginPage'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function Navbar() {
    const {userId, setUserId} = useContext(UserContext)
    const navigate = useNavigate();
    function onLogout(){
        localStorage.removeItem("token")
        navigate("/")
        window.location.reload();
    }
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
                    {userId ? 
                        <div className='profil-container'>
                            <Link className="auth-link" to="/profile">
                                Profil
                            </Link>
                            <Link className="auth-link" to="/" onClick={onLogout}>
                                Kijelentkezés
                            </Link>
                        </div>
                        :
                        <div>
                            <Link className="auth-link" to="/login">
                                Bejelentkezés
                            </Link>
                            <Link className="auth-link" to="/register">
                                Regisztráció
                            </Link>
                        </div>
                    }
                    
                </div>
            </nav>
        </div>
    )
}