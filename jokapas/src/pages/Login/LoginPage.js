import './loginPage.css'
import { useForm } from "react-hook-form"
import { useNavigate, Link } from 'react-router-dom'

export function LoginPage() {
    const correctLogin = {user:"admin", password:"admin"}
    const {handleSubmit, register, formState: {errors, isValid, isDirty}} = useForm()
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        //TODO: KICSERÉLNI, HA KÉSZ A BACKEND
        const fakeToken = "faketoken123"
        if(correctLogin.user === data.username && correctLogin.password === data.password){
            console.log("Sikeres bejelentkezés!")
            localStorage.setItem("token", fakeToken)
            navigate("/")
            window.location.reload()
        }
        else{
            console.log("Sikertelen bejelentkezés!")
        }
    }
    return(
        <div className="login-container">
            <h1>Bejelentkezés</h1>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    id="username"
                    name='username'
                    className="login-input" 
                    placeholder="Név"
                    {...register('username', {
                        required: 'Ez a mező kötelező'
                    })}
                 />
                 {errors.username && <span className="login-error">{errors.username.message}</span>}

                <input 
                    className="login-input" 
                    type="password" 
                    placeholder="Jelszó"
                    id="password"
                    name='password'
                    {...register('password', {
                        required: 'Ez a mező kötelező'
                    })}
                />
                {errors.password && <span className="login-error">{errors.password.message}</span>}

                <button disabled={!isDirty || !isValid} type="submit" className='login-button'>Bejelentkezés</button>
            </form>
            <div className='register-form-link'>
                Még nem regisztrált? <Link to="/register">Regisztrálok</Link>
            </div>
        </div>
    )
}