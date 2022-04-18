import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../cards/Cards.css'
const Profile = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {

    return (
      <div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

      </div>
    )
  }

  return (
    isAuthenticated && (<center>
      <div className="card text-dark bg-light mb-3" >
    <img className="card img" src={user.picture} alt={user.name}/>
    <div className="card-body">
      <h5 className="card-title">{user.name}</h5>
      <p className="card-text">Email: {user.email}</p>
    </div>
  </div>
    </center>
    )
  )

}

export default Profile