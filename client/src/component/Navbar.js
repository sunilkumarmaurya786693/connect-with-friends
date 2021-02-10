import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = ()=> {
    return(
      <nav className={styles.navBody}>
      <div className={styles.navWrapper}>
        <Link  to="/" className={styles.instagramHome}>Instagram</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/create-post">Create Post</Link></li>
        </ul>
      </div>
    </nav>
    ); 
}

export default Navbar;
