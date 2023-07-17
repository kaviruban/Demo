import React, { Fragment } from 'react'
import { useNavigate } from 'react-router';
import "./UserProfilePage.css"


function UserProfilePage() {
  const navigate = useNavigate();
  return (
    <Fragment>
        <nav className='NavigationBar'>
          <p>My Bookings</p>
          <p>Logout</p>
        </nav>

        <div className='LocationDetails'>
          <input placeholder='Current Location' />
          <input placeholder='Going to' />
          <button className='search-button' onClick={() => {navigate("/BusesAvailable")}}>Search</button>
        </div>
    </Fragment>
  );

}

export default UserProfilePage