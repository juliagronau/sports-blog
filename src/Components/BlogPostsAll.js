import React from "react";
import BlogPostTeaser from "./BlogPostTeaser";

const BlogPostsAll = ({ posts }) => {
  return (
    <>
      {posts ? (
        posts.map(post => <BlogPostTeaser key={posts.post_id} post={post} />)
      ) : (
        <h2>Loading ...</h2>
      )}
    </>
  );
};

export default BlogPostsAll;
