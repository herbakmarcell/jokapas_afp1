import { Link } from 'react-router-dom'
import './homePage.css'
export function HomePage() {
    return(
        <div className="home-container">
            <div className="home-title">
                Jókapás
            </div>
            <div className="home-pic-container">
                <img className="home-pic" src="/homePage.png" alt="homepage"/>
            </div>
            <Link className="home-link" to="/market">
                Vásárlás megkezdése
            </Link>
        </div>
    )
}