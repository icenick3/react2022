import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "./User";
import css from './User.module.css'


const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers().then(value => setUsers(value))
    }, [])
    return (
        <div className={css.main}>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
};

export default Users;