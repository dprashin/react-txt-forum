import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import AppContainer from "../../hoc/AppContainer";

const Register = () => {
  const { loggedIn } = useSelector((state) => state.sessionReducer);
  return (
    <AppContainer>
      {loggedIn && <Redirect to="/timeline" />}
      <form className="mb-3">
        <h1> Register for Text Forum</h1>
        <p>Complete the form to create your account. </p>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Choose a username
          </label>
          <input type="text" id="username" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Chooose a password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="*********"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder="*********"
          />
        </div>
        <button className="btn btn-success btn-lg">Register</button>
      </form>
      <p className="mb-3">
        <Link to="/">Already registered? Login here </Link>
      </p>
    </AppContainer>
  );
};
export default Register;
