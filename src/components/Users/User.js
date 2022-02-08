import React from 'react';
import {Link} from "react-router-dom";

import css from "./User.module.css";


const User = ({item}) => {
    return (
        <div className={css.block}>
            <div>
                <Link to={`/users/${item.id}`} state={{...item}}>{item.id} {item.name}</Link>
            </div>

        </div>
    );
};

export default User;