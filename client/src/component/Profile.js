import React from 'react';
import  profileImage from '../assets/avatar-inner-1.svg';
import vivanPhoto from '../assets/vivan.jpg';
import styles from './Profile.module.css';
const Profile = ()=> {
    return(
      <div className={styles.Container}>
      <div className={styles.profileContainer}>
          <div>
            <img className={styles.profileImage} src={profileImage}/>
          </div>
          <div>
          <div className={styles.profileDetials}>
            Sunil Maurya
          </div>
          <div>
            <span>40 Posts </span> 
            <span> 120 Followers </span>
            <span> 150 Following</span>
          </div>
          </div>
      </div>
      <div className={styles.imageGallery}>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      <img className={styles.photoGallery} src={vivanPhoto}/>
      </div>
      </div>
    ); 
}

export default Profile;
