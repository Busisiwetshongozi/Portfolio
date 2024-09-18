import styles from './Contact.module.css';
import Github from '../assets/github.png';
import Linked from '../assets/linked.png';

function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                <span>Need My Services? Let's Talk..</span><br />
                <span className={styles.contacts}></span>
            </h1>

            {/* Form Section */}
            <form action="https://api.web3forms.com/submit" method="POST">
                {/* Replace with your Access Key */}
                <div className={styles.fields}>
                    <input type="hidden" name="access_key" value="be0f8fda-05a2-40f1-877a-656db659f61e" />

                    {/* Form Inputs */}
                    <div className={styles.inputs}>
                        <input type="text" name="name" placeholder="Your Name" required className={styles.inputField} />
                        <input type="email" name="email" placeholder="Your Email" required className={styles.inputField} />
                    </div>
                    <div className={styles.message}>
                        <textarea name="message" placeholder="Your Message" required className={styles.textareaField}></textarea>
                    </div>

                    {/* Honeypot Spam Protection */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    
                    <button className={styles.button} type="submit">Submit </button>
                </div>
            </form>

            <div className={styles.info}>
                <p className={styles.number}>call: 0717484599</p>
                <p className={styles.email}>email: busisiwe@gmail.com</p>
                
                <div className={styles.Linked}>
                    <p className={styles.Linked}>
                        LinkedIn: 
                        <a href="https://www.linkedin.com/in/busisiwe-tshongozi-b6918b308/" target="_blank" rel="noopener noreferrer">
                            <button className={styles.Linkedbtn}>
                                <img src={Linked} alt="LinkedIn" className={styles.Linkedimg} />
                            </button>
                        </a>
                    </p>
                </div>

                <div className={styles.github}>
                    <p className={styles.github}>
                        GitHub: 
                        <a href="https://github.com/Busisiwetshongozi/Busisiwetshongozi" target="_blank" rel="noopener noreferrer">
                            <button className={styles.githubutton}>
                                <img src={Github} alt="GitHub" className={styles.githubimg} />
                            </button>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
