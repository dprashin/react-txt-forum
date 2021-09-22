import { useState } from "react"
import AppContainer from "../../hoc/AppContainer"
const Login = () => {
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
    return (
        <AppContainer>
            <form className="mt-3">
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
        </AppContainer>
    )
}
export default Login