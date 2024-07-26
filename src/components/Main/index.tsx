import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import styles from "./index.module.css"

export const Main = () => {
    return(
        <div className={styles.main}>
            <div className={styles.main_text}>
                <p>List of Users</p>
            </div>
            <div className={styles.users_cont}>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Get Users
                </Button>
                <input type='text' placeholder="Find..." className={styles.input}></input>
            </div>
        </div>
    )
}