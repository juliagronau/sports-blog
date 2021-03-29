import BlogPostTeaser from "./BlogPostTeaser";

const SearchResults = ({ searchTerm, posts }) => {
  console.log(posts);
  console.log(searchTerm);

  return (
    <div className="row">
      {posts ? (
        posts
          .filter(post => post.posttitle.includes(searchTerm))
          .map(post => <BlogPostTeaser key={post.post_id} post={post} />)
      ) : (
        <h2>There are no articles matching your search query</h2>
      )}
    </div>
  );
};

export default SearchResults;
