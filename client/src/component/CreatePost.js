import React from "react";
import styles from './CreatePost.module.css';
const CreatePost = () => {
  return (
    <div className={`card ${styles.input_field}`}>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      <div className="file-field input-field">
        <div className={styles.button}>
          <span>Upload image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className={styles.button}>Submit Post</button>
    </div>
  );
};

export default CreatePost;
