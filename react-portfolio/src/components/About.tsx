import styles from './About.module.css';
import potImage from '../assets/pot.webp'; // Ensure the path is correct

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.greeting}>Hi, my name is</span><br />
        <span className={styles.name}>Busisiwe Tshongozi</span>
      </h1>
      <p className={styles.content}>
        I am a full stack web developer currently based in Johannesburg, South Africa.<br />
        I have worked on various projects, from an employee management application <br />to a laundromat application.<br />
        In these projects, I have focused on providing the best application <br /> functionalities and user experience.
      </p>
      <img src={potImage} alt="Pot" className={styles.image} />
    </div>
  );
}

export default About;
