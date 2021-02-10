import React from 'react';
import styles from './Login.module.css';
import {Link} from 'react-router-dom';
const Login = ()=> {
    return(
      <div className={`row ${styles.loginContainer}`}>
      <div className={`card ${styles.cardContainer}`}>
      <form>
           <input type="text" placeholder="email" className={styles.inputText}></input>
            <input type="password" placeholder="password" className={styles.inputText}></input>
          <button className={styles.loginButton}>LOGIN</button>
      </form>
      <h5 className={styles.changeRoute}>
      <Link to="/signup" className={styles.linkColor}>
      Create a new account  
      </Link>
      </h5>
      </div>
  </div>
    ); 
}

export default Login;
