import styles from './Projects.module.css';
import screenshot1 from '../assets/Screenshot1.png';
import screenshot2 from '../assets/Screenshot3.png'

function Projects() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Projects</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardbody}>
                        <h5 className={styles.cardtitle}>Quiz App</h5>
                        <h6 className={styles.cardsubtitle}>Server-Side Development</h6>
                        <p className={styles.cardtext}></p>
                    </div>
                </div>

                <div className={styles.card}>
          
                    <div className={styles.cardbody}>
                    
                        <h5 className={styles.cardtitle}>Employee Management App</h5>
                        <h6 className={styles.cardsubtitle}>Data Management and Storage</h6>
                        <img src={screenshot1} alt="Employee Management App" className={styles.image} />
        
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardbody}>
                        <h5 className={styles.cardtitle}>Event Management App</h5>
                        <h6 className={styles.cardsubtitle}>Crafting Visual Experiences</h6>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardbody}>
                        <h5 className={styles.cardtitle}>Laundrymat App</h5>
                        <h6 className={styles.cardsubtitle}>Version Control System</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
