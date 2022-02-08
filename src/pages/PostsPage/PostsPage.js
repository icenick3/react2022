import React from 'react';
import Posts from "../../components/Posts/Posts";
import {Outlet} from 'react-router-dom'
import css from "./PostsPage.module.css"

const PostsPage = () => {
    return (
        <div className={css.main}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;