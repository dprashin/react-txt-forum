import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import AppContainer from "../../hoc/AppContainer"
import { loginAttemptAction } from "../../store/actions/loginActions"


const Login = () => {
    const dispatch = useDispatch()

    const {loginError, loginAttempting } = useSelector(state => state.loginReducer)

    //create state for login
    const [credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })

    const onInputChange = event => {
        setCredentials({
            ...credentials,
            [event.target.id]: event.target.value
        })
    }

    const onFormSubmit = event => {
        event.preventDefault() //stop the page reload
        dispatch(loginAttemptAction(credentials))
    }

    return (
        <AppContainer>
            <form className="mt-3 mb-3" onSubmit={ onFormSubmit }>
                <h1>Login to Text Forum</h1>
                <p>Welcome to the form where text is king! 💕 </p>

                <div className="mb-3">
                    <label htmlFor="username" className="form_label">Username</label>
                    <input type="txt" id="username" className="form-control" placeholder="Username" onChange={ onInputChange }/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form_label">password</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" onChange={ onInputChange }/>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">Login</button>
            </form>

            { loginAttempting && 
                <p> Trying to login</p>
            }

            { loginError && 
                <div className="alert alert-danger" role="alert">
                    <h4>Unsuccessful</h4>
                    <p className="mb-0">{loginError}</p>
                </div>
            }
        </AppContainer>
    )
}
export default Login