
import styles from './ListGroup.module.css';

function ListGroup() {
  return (
    <div className={styles.container}>
    
      <ul className={styles.listGroup}>
        <li  className={styles.listItem}>About</li>
        <li  className={styles.listItem}>Services</li>
        <li className={styles.listItem}>Projects</li>
        <li className={styles.listItem}>Contact</li>
        <li className={styles.listItem}>Download CV</li>
    
      </ul>
    </div>
  );
}

export default ListGroup;