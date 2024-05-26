import React from 'react'

const UserDetails = ({user}) => {
   return(
    <div>
      <h1 className=' flex flex-start text-2xl'> {user.name}:</h1>
      <p className=' grid items-start justify-start mb-2'>{user.bio}</p>
      <span> <b>DOB:</b> {user.dob}</span>
    </div>
  );
};

export default UserDetails;


