import React from 'react'
import { NavLink, Link } from 'react-router-dom';


const Header = (props)=>

<div className="header flex-center">
  <div className='logo'>
     <Link to="/"> <h2>Integrify</h2></Link>
  </div>
    <ul>
      <li><NavLink exact to='/'>Add User</NavLink></li>
      <li><NavLink to='/ListUsers'>User List</NavLink></li>
    </ul>


</div>



export default Header;
