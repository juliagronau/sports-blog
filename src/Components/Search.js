import React, { useState, useEffect } from "react";
import BlogPostTeaser from "./BlogPostTeaser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import Spinner from "./Spinner";

const Search = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchClick, setSearchClick] = useState(false);

  useEffect(() => {
    setSearchResult(posts);
  }, [searchTerm]);

  const onSubmit = (event) => {
    event.preventDefault();
    !searchTerm ? alert('Type in something') : getFilteredResults();
    setSearchClick(() => true);
  };
  
  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const getFilteredResults = () => {
    setSearchResult(
      posts.filter((post) =>
        post.posttitle.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  
  // Pagination
  const [pageNum, setPageNum] = useState(0);
  const cardsPerPage = 3;
  const pagesVisited = pageNum * cardsPerPage;
  // slice() Methode returns part of Arr
  const displayCards = searchResult
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((post) => <BlogPostTeaser key={posts.post_id} post={post} />);
  // Math.ceil() gives next higher integer that is equal or greater than the given num
  // Gives num of pages to flip through
  const pageCount = Math.ceil(searchResult.length / cardsPerPage);
  // ReactPaginate provides argument that I can destructure to {selected}
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return searchResult && posts ? (
  <>
  <h2 className="row mt-5">{!searchClick ? 'The latest articles' : 'Your search results'}</h2>
    <div className="row">
      <form className="input-group input-group-sm" onSubmit={onSubmit}>
        <input
          className="form-control searchbar"
          type="search"
          placeholder="Search your topic"
          aria-label="Search"
          onChange={onInputChange}
          value={searchTerm}
        />
        <span className="input-group-text search-icon-container">
          <FontAwesomeIcon
            icon={["fa", "search"]}
            type="submit"
            onClick={onSubmit}
          />
        </span>
      </form>
      <div className="row">
        {displayCards}
        {searchResult.length < 1 || (
          <ReactPaginate
            previousLabel={
              <FontAwesomeIcon
                className="previousBtn"
                icon={["fas", "angle-left"]}
              />
            }
            nextLabel={
              <FontAwesomeIcon
                className="nextBtn"
                icon={["fas", "angle-right"]}
              />
            }
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        )}
      </div>
    </div>
  </>
  ) : <Spinner />;
};

export default Search;
