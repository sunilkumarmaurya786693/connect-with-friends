import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    message:"there is an issue"
  });
  const { vertical, horizontal, open,message } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const Signup_handler = (e) => {
    e.preventDefault();
    console.log('this is clicked',name,password,email);
    fetch('http://localhost:5000/signup',{
      method:"post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email
      })
    }).then(res=>res.json())
      .then(data => {
        if(data.error){
          setState({ ...state, open:true });
          // setState({...state, message:data.error})
        }
        console.log('this is data------>',message);
      })
    }
  return (
    <div className={`row ${styles.loginContainer}`}>
      <div className={`card ${styles.cardContainer}`}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        className={styles.errorToast}
      />
        <form>
          <input
            type="text"
            placeholder="name"
            className={styles.inputText}
            onChange = {(e)=> setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="email"
            className={styles.inputText}
            onChange = {(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            className={styles.inputText}
            onChange = {(e)=> setEmail(e.target.value)}
          ></input>
          <button className={styles.loginButton} onClick={(e)=> Signup_handler(e)}>Signup</button>
        </form>

        <h5 className={styles.changeRoute}>
          <Link to="/login" className={styles.linkColor}>
            Already have an account
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;
