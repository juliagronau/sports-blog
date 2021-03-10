import React from 'react';
import PostPreview from './PostPreview';
import BlogPost from './BlogPost';
import Row from 'react-bootstrap/Row';

const BlogPosts = ({ posts }) => {
    return (
        <Row>
            {posts ? posts.map((post) =>
            <PostPreview key={post.sys.id} post={post}/>
            ) : <h2>Loading</h2>}
        </Row>
    )
}

export default BlogPosts
