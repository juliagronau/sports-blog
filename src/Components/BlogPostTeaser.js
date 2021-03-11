import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blogpost = ({ post }) => {
    const { authorReference, datePublished, postContent, postImage, postTitle, postTeaser } = post.fields;
    const [blogID, setBlogID] = useState('');
    const [paragraphe, setParagraphe] = useState([]);

    useEffect(() => {
        setBlogID(post.sys.id);
        console.log(blogID);
    }, []);
    
    return (
        <div className="col-md-4 mt-2 mb-4">
            <div className="card">
                <img src={postImage.fields.file.url} className="card-img-top" alt="article header" />
                <div className="card-body">
                    <h5 className="card-title">{postTitle}</h5>
                    <h6 className="blockquote-footer">Published on: {datePublished.substr(0, 10)}</h6>
                    <h6 className="blockquote-footer">Author: {authorReference.fields.authorName}</h6>
                    <p className="card-text">{postTeaser}</p>
                    <div className="text-center linkToBlogPost">
                        <Link to={`/${post.sys.id}`} className="btn-blogTeaser">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogpost;