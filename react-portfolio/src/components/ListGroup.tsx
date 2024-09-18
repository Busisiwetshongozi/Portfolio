import styles from './ListGroup.module.css';
import cv from '../assets/Busisiwe Tshongozi.pdf'; 

function ListGroup() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cv; 
        link.setAttribute('download', 'Busisiwe Tshongozi.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container}>
            <ul className={styles.listGroup}>
                <li className={styles.listItem}>About</li>
                <li className={styles.listItem}>Services</li>
                <li className={styles.listItem}>Projects</li>
                <li className={styles.listItem}>Contact</li>
                <li className={styles.listItem} onClick={handleDownloadCV} style={{ cursor: 'pointer' }}>
                    Download CV
                </li>
            </ul>
        </div>
    );
}

export default ListGroup;
