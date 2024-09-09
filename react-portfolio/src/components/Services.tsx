import styles from './Services.module.css';
import Backend from '../assets/backend.jpg';

function Services() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Services</h1>
      <div className={styles.container}>
     
      <div className={styles.card}>
      
  <div className={styles.cardbody}>
    <h5 className={styles.cardtitle}>Backend
    </h5>
 
    <h6 className={styles.cardsubtitle}>Server-Side Development</h6>
    <img src={Backend} alt="" className={styles.backend} />
    <p className={styles.cardtext}>
      Backend development involves server-side logic, database interactions, and API integration. 
    </p>
  </div>
</div>

        <div className={styles.card}>
  <div className={styles.cardbody}>
    <h5 className={styles.cardtitle}>Database</h5>
    <h6 className={styles.cardsubtitle}>Data Management and Storage</h6>
    <p className={styles.cardtext}>
      Databases store, manage, and retrieve structured data efficiently. They support complex queries, transactions, and data integrity for applications and businesses.
    </p>
  </div>
</div>

        <div className={styles.card}>
  <div className={styles.cardbody}>
    <h5 className={styles.cardtitle}>Design</h5>
    <h6 className={styles.cardsubtitle}>Crafting Visual Experiences</h6>
    <p className={styles.cardtext}>
      Design involves creating visually appealing and user-friendly interfaces. It focuses on layout, color schemes, to enhance user experience.
    </p>
  </div>
</div>

        <div className={styles.card}>
  <div className={styles.cardbody}>
    <h5 className={styles.cardtitle}>Git</h5>
    <h6 className={styles.cardsubtitle}>Version Control System</h6>
    <p className={styles.cardtext}>
      Git is a distributed version control system that tracks changes in source code during software development. 
    </p>
  </div>
</div>



        <div className={styles.card}>
  <div className={styles.cardbody}>
    <h5 className={styles.cardtitle}>Frontend Development</h5>
    <h6 className={styles.cardsubtitle}>Building Engaging User Experiences</h6>
    <p className={styles.cardtext}>
      Frontend development focuses on creating the visual and interactive aspects of a website or application. 
    </p>
  </div>
</div>

      </div>
    </div>
  );
}

export default Services;
