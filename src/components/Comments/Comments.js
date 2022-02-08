import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {commentsService} from "../../services/comments.service";
import PostOfUser from "../Posts/PostOfUser";
import Comment from "./Comment";

const Comments = () => {
    const {state:post} = useLocation()
    const [comments, setComments] = useState([])
    console.log(comments)
    useEffect(()=>{
        commentsService.getCommentsById(post.id).then(value => setComments(value))
    },[])
    return (
        <div>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export default Comments;