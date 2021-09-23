import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Avatars from "../../components/Avatars/Avatars";
import AppContainer from "../../hoc/AppContainer";

const Register = () => {
  const { loggedIn } = useSelector((state) => state.sessionReducer);

  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });

  const onRegisterSubmit = (event) => {
    event.preventDefault();
    //dispatch register attempt action 


    console.log("Register.onRegisterSubmit()", user);
  };

  const onInputChange = event => {
    setUser({
      ...user,
      [event.target.id]: event.target.value
    })
  }

  return (
    <AppContainer>
      {loggedIn && <Redirect to="/timeline" />}
      <form className="mb-3" onSubmit={onRegisterSubmit}>
        <h1> Register for Text Forum</h1>
        <p>Complete the form to create your account. </p>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Choose a username
          </label>
          <input type="text" id="username" className="form-control" onChange= { onInputChange } />
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
            onChange= { onInputChange }
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
            onChange= { onInputChange }
          />
        </div>
        <Avatars />
        <button className="btn btn-success btn-lg">Register</button>
      </form>
      <p className="mb-3">
        <Link to="/">Already registered? Login here </Link>
      </p>
    </AppContainer>
  );
};
export default Register;
