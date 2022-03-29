import React from 'react'

function LogoutButton({ handleLogoutClick }) {
  return (
    <button onClick={handleLogoutClick}>Logout</button>
  )
}

export default LogoutButton