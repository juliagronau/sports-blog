import React from 'react';
<<<<<<< HEAD
import BlogPost from './BlogPost';
=======
import PostPreview from './PostPreview';
import Row from 'react-bootstrap/Row';
>>>>>>> main

const BlogPosts = ({ posts }) => {

    return (
<<<<<<< HEAD
        <>
            {posts ? posts.map((post) => 
            <BlogPost key={post.sys.id} post={post}/>
            ) : <h2>Loading ...</h2>}
        </>
=======
        <Row>
            {posts ? posts.map((post) => 
            <PostPreview key={post.sys.id} post={post}/>
            ) : <h2>Loading</h2>}
        </Row>
>>>>>>> main
    )
}

export default BlogPosts;
