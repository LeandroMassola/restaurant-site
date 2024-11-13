import styles from '../../public/assets/css/footer.module.css'
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiTripadvisor  } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
    
    return(
        <footer className={styles.footerCont}>
            <div className={styles.contFindUs}>
                <h5 className={styles.headerFIndUs}><u>Find Us!</u></h5>
                <ul className={styles.footerList}>
                    <li className={`${styles.icons} ${styles.igIcon}`}>
                        <a><PiInstagramLogoFill/></a>
                    </li>
                    <li className={`${styles.icons} ${styles.tripIcon}`}>
                        <a><SiTripadvisor/></a>
                    </li>
                    <li className={`${styles.icons} ${styles.whatsIcon}`}>
                        <a><IoLogoWhatsapp/></a>
                    </li>
                </ul>
                <p className={styles.rightsFooter}>© 2024 Leandro Massola. All rights reserved.</p>
            </div>
        </footer>
    )
}