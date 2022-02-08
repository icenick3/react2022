const Comment = ({comment}) => {
    return (
        <div>
            <p>{comment.id} - {comment.name}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;