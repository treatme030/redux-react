import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchComments } from '../redux/index'

const Comments = ({fetchComments, loading, items}) => {
    
    useEffect(() => {
        fetchComments()
    },[])

    const commentsItems = loading ? 
    (<div>is loading...</div>) :
    (items.map(comment => (
        <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
        ))
    )
    return (
        <div className="comments">
            { commentsItems }
        </div>
    );
};

const mapStateToProps = ({comments}) => {
    return {
        items : comments.items
    }
}

const mapDispatchToProps = {
    fetchComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);