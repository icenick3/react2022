import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useLocation} from "react-router-dom";
import PostOfUser from "./PostOfUser";


const PostsOfUser = () => {
    const {state:user} = useLocation()
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        postService.getPostById(user.id).then(value => setPosts(value))
    },[])

    return (
        <div>
            {posts.map(value => <PostOfUser key={value.id} post={value}/>)}
        </div>
    );
};

export default PostsOfUser;