import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (

    <div >
      
      <div className=" gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-outline-primary" onClick={() => loginWithRedirect()}>Login</button>

        <button type="button" className="btn btn-outline-secondary" onClick={() => logout({ returTo: window.location.origin })}>
          Logout</button>
      </div>
    </div>

  )
}

export default LoginButton