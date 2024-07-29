import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import styles from "./index.module.css"

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
    };
};
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};


export const Main: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<User[]>([])

    const getUsers = async () => {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users: User[] = await response.json()
        setUsers(users)
        setLoading(false)
    }

    return(
        <div className={styles.main}>
            <div className={styles.main_text}>
                <p>List of Users</p>
            </div>
            <div className={styles.users_cont}>
                <Button onClick={getUsers} variant="contained" endIcon={<SendIcon />}>
                    Get Users
                </Button>
                <input type='text' placeholder="Find..." className={styles.input}></input>
            </div>
            {loading && <p>Loading...</p>}
            {!loading && (
                <ol>
                    {users.map(user => (<li key={user.id}>{user.name}</li>))}
                </ol>
            )}
        </div>
    )
}