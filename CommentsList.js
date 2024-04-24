import React, { useState } from 'react';

const CommentsList = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const handleDeleteComment = (id) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
    };

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.text}</p>
                    <button onClick={() => handleDeleteComment(comment.id)}>Удалить</button>
                </div>
            ))}
        </div>
    );
};

export default CommentsList;