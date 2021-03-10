import React from 'react';
import PostPreview from './PostPreview';
import BlogPost from './BlogPost';
import Row from 'react-bootstrap/Row';
import {useParams} from 'react-router-dom';

const BlogPosts2 = ({ posts }) => {
    const { id } = useParams();
    return (
        <Row>
            {posts ? posts.map((post) =>{
            if(id == post.sys.id){
            <BlogPost key={post.sys.id} post={post}/>
        }else {
        <h2>404 Not Found</h2>}
    }
            ) : <h2>Loading</h2>}
        </Row>
    )
}

export default BlogPosts2
