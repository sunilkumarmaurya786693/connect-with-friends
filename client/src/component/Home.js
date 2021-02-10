import React from 'react';
import styles from './Home.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Home = ()=> {
    return(
      <div className={styles.home}>
        
        <div className={`card ${styles.home_card}`}>
          <h5>
            Ramesh
          </h5>
          <div className={styles.card_image}>
           <img className ={styles.card_images} src="https://images.pexels.com/photos/89770/pexels-photo-89770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className={styles.card_content}>
            <FavoriteIcon style={{ color: "red" }}/>
            <h6>
              title
            </h6>
            <p>
              this is second posts
            </p>
            <input type="text" placeholder="add a comment" />
          </div>
        </div>

        <div className={`card ${styles.home_card}`}>
          <h5>
            Ramesh
          </h5>
          <div className={styles.card_image}>
           <img className ={styles.card_images} src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className={styles.card_content}>
            <FavoriteBorderIcon />
            <h6>
              title
            </h6>
            <p>
              this is second posts
            </p>
            <input type="text" placeholder="add a comment" />
          </div>
        </div>
          
      </div>
    ); 
}

export default Home;
