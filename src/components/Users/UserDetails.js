import {useLocation, Link, Outlet} from "react-router-dom";

import css from './User.module.css'

const UserDetails = () => {
    const {state: user} = useLocation()
    return (
        <div className={css.child}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
            <p>{user.phone}</p>
            <button><Link to={`/users/${user.id}/posts`} state={{...user}}>Posts of Users</Link></button>
            <Outlet/>
        </div>
    );
};

export default UserDetails;