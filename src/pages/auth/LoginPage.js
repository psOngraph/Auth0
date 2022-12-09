import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../assets/css/login.css';

import authLayout from '../../hoc/authLayout';
import { Button } from 'react-bootstrap';

const LoginPage = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  console.log('check user', user, isAuthenticated);
  return (
    <>
      <div className="login-form">
        <div className=" align-items-center mt-4 mb-5 ">
          <h1 className="text-center">Let's Get Started</h1>
        </div>
        <div className="d-grid gap-4 mt-3 mb-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => loginWithRedirect()}
          >
            Sign In
          </Button>
          {/* <Button variant="primary" size="lg">
            Sign Up
          </Button> */}
        </div>
      </div>
    </>
  );
};
export default authLayout(LoginPage);
// export default authLayout(LoginPage);
