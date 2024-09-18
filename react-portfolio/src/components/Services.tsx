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
 <h6 className={styles.cardsubtitle}> * SpringBoot</h6>
    <img src={Backend} alt="" className={styles.backend} />
    <p className={styles.cardtext}>
     
    </p>
  </div>
</div>

        <div className={styles.card}>
  <div className={styles.cardbody}>
    <h5 className={styles.cardtitle}>Databases</h5>
    <h6 className={styles.cardsubtitle}>*  PostgreSQL</h6>
  
  </div>
</div>

        <div className={styles.card}>
  <div className={styles.cardbody}>
    <h5 className={styles.cardtitle}>App Design</h5>
    <h6 className={styles.cardsubtitle}>* Figma</h6>
   
  </div>
</div>

        <div className={styles.card}>
  <div className={styles.cardbody}>
    <h5 className={styles.cardtitle}>Git</h5>
    <h6 className={styles.cardsubtitle}> * Version Control System</h6>
   
  </div>
</div>



        <div className={styles.card}>
  <div className={styles.cardbody}>
    <h5 className={styles.cardtitle}>Frontend Development</h5>
    <h6 className={styles.cardsubtitle}> * Angular</h6>
    <h6 className={styles.cardsubtitle}> * React</h6>
   
  </div>
</div>

      </div>
    </div>
  );
}

export default Services;
