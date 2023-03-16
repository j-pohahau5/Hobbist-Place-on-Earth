import React from 'react';
import { Link } from 'react-router-dom';
// import image from '../../assets/fon.png';
import Auth from '../../utils/auth';
import logo from '../../assets/lolo.png';
 


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header style={{
      backgroundColor: '#eee8b6', border: '3px solid #5b8c80'}}>

      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="a" to="/">
            <h1 className="m-2">Hobbiest Place On Earth</h1>
          </Link>


            <img src={logo} alt=""/>

          <p className="m-0"></p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>

  );
};


export default Header;