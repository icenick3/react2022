import React from 'react';
import {Outlet} from 'react-router-dom'

import Users from "../../components/Users/Users";
import css from './UsersPage.module.css'


const UsersPage = () => {

    return (
        <div className={css.main}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;