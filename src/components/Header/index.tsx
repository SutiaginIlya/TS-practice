import logo from "../../logo.png"
import styles from "./index.module.css"

export const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.logo_cont}>
                <a href="">
                    <img src={logo} alt="logo" className={styles.logo}/>
                </a>
            </div>
            <span className={styles.text_cont}>Type Script</span>
        </div>
    )
}