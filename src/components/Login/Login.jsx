const Login = () => {
    return (
        <form className="mt-3">
            <h1>Login to Text Forum</h1>
            <p>Welcome to the form where text is king! 💕 </p>

            <div className="mb-3">
                <label htmlFor="username" className="form_label">Username</label>
                <input type="txt" id="username" className="form-control" placeholder="Username"/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form_label">password</label>
                <input type="txt" id="password" className="form-control" placeholder="Password"/>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">Login</button>
        </form>
    )
}
export default Login