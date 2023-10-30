import './loginPage.css'
import { useForm } from "react-hook-form"

export function LoginPage() {
    const correctLogin = {user:"admin", password:"admin"}
    const {handleSubmit, register, formState: {errors, isValid, isDirty}} = useForm()

    const onSubmit = (data) => {
        if(correctLogin.user == data.username && correctLogin.password == data.password){
            console.log("Sikeres bejelentkezés!")
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
                 {errors.username && <p className="error">{errors.username.message}</p>}

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
                {errors.password && <p className="error">{errors.password.message}</p>}

                <button disabled={!isDirty || !isValid} type="submit" className='login-button'>Bejelentkezés</button>
            </form>
        </div>
    )
}