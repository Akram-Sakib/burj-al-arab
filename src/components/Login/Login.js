import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Login.css";


const Login = () => {

    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || "/home"; 

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
            history.push(redirect_uri);
        })
    }

    return (
        <div className="App">
            <h1>This is Login</h1>
            <form>
            <input type="email" name="" id="" placeholder="Your Email" />
            <br />
            <input type="password" name="" id="" />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <p>
            New to ema-john?  <Link to="/register">Create Account</Link >
          </p>
          <div>-----------or-----------</div>
          <button onClick={handleGoogleLogin} className="btn-regular">
            Google Sign In
          </button>
        </div>
    );
};

export default Login;