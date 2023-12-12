import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { CustomLink } from './CustomLink'
import { LoginPage } from '../../pages/Login/LoginPage'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import axios from 'axios'

export function Navbar() {
    const {userId, setUserId} = useContext(UserContext)
    const navigate = useNavigate();
    function onLogout(){
        axios.post('http://localhost:3001/api/logout', null, {withCredentials: true})
        .then((response)=> {
            console.log(response)
            setUserId("")
            navigate("/")
        })
        
    }
    return(
        <div className="container">
            <nav className='navbar'>
                <div className="links">
                    <Link className='nav-title' to="/"> <img className='nav-logo' src="logo.png" alt="logo"/></Link>
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
                        {userId ?
                        <CustomLink to ="/orders">
                            Rendelések
                        </CustomLink>
                        :
                        ""
                        }
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
                        <div className='auth-navbar-container'>
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