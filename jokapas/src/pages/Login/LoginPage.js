import './loginPage.css'
export function LoginPage() {
    return(
        <div className="login-container">
            <form className="login-form">
                <input placeholder="Név"/>
                <input type="password" placeholder="Jelszó"/>
                <button>Bejelentkezés</button>
            </form>
        </div>
    )
}