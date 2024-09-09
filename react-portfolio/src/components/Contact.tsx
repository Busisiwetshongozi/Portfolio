import styles from './Contact.module.css'


function Contact(){
    return (
<div className={styles.container}>
<h1 className={styles.heading}>
        <span className={styles.heading}>Need My Services? Let's Talk..</span><br />
        <span className={styles.contacts}></span>
      </h1>

      <button>Contact</button>
<p className={styles.number}>call:  0717484599</p>
<p className={styles.email}>email:  busisiwe@gmail.com</p>
<p className={styles.facebook}>facebook: </p>
<p></p>




</div>




    );
}
export default Contact;