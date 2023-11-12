import './registerPage.css'
import { useForm } from "react-hook-form"
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

export function RegisterPage() {
    const {handleSubmit, register, formState: {errors, isValid, isDirty}} = useForm({mode: "onChange"})
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        const user = {username: data.username, email:data.email, password:data.password, full_name:"teszt elek"}
        axios.post('http://localhost:3001/api/register', user
            
          )
          .then((response) => {
            console.log(response);
              // Handle data
          })
          .catch((error) => {
            console.log(error);
          })
    }
    return(
        <div className="register-container">
            <h1>Regisztráció</h1>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    id="username"
                    name='username'
                    className="register-input" 
                    placeholder="Név"
                    {...register('username', {
                        required: 'Ez a mező kötelező'
                    })}
                 />
                 {errors.username && <span className="register-error">{errors.username.message}</span>}

                 <input
                    type='email'
                    id="email"
                    name='email'
                    className="register-input" 
                    placeholder="Email"
                    {...register('email', {
                        required: 'Ez a mező kötelező',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Email formátuma nem megfelelő",
                        },
                    })}
                 />
                 {errors.email && <span className="register-error">{errors.email.message}</span>}

                <input 
                    className="register-input" 
                    type="password" 
                    placeholder="Jelszó"
                    id="password"
                    name='password'
                    {...register('password', {
                        required: 'Ez a mező kötelező'
                    })}
                />
                {errors.password && <span className="register-error">{errors.password.message}</span>}

                <button disabled={!isDirty || !isValid} type="submit" className='register-button'>Regisztráció</button>
            </form>
            <div className='login-form-link'>
                Van már felhasználója? <Link to="/login">Bejelentkezés</Link>
            </div>
        </div>
    )
}