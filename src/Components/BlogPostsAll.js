import React from 'react';
import BlogPostTeaser from './BlogPostTeaser';

const BlogPostsAll = ( { posts } ) => {
    console.log(posts);

    return (
        <>
            {posts ? posts.map((post) => 
            <BlogPostTeaser key={post.sys.id} post={post}/>
            ) : <h2>Loading ...</h2>}
        </>
    )
}

export default BlogPostsAll;
