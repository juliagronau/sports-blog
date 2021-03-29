import React, { useState, useEffect } from "react";
import BlogPostTeaser from "./BlogPostTeaser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import Spinner from "./Spinner";

const Search = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [displayCards, setDisplayCards] = useState("");

  console.log("Posts", posts);

  useEffect(() => {
    setSearchResult(posts);
    getFilteredResults();
  }, [searchTerm]);

  const onClick = () => {
    console.log("onclick works", document.querySelector(".searchbar").value);
    let term = document.querySelector(".searchbar").value;
    setSearchTerm(term);

    console.log("Kaan", searchTerm);
  };

  const getFilteredResults = () => {
    console.log("function invoked");
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

  useEffect(() => {
    // slice() Methode returns part of Arr
    const newArr = searchResult
      .slice(pagesVisited, pagesVisited + cardsPerPage)
      .map((post) => <BlogPostTeaser key={posts.post_id} post={post} />);
    setDisplayCards(() => newArr);
  }, [searchResult]);
  // Math.ceil() gives next higher integer that is equal or greater than the given num
  const pageCount = Math.ceil(posts.length / cardsPerPage);
  // ReactPaginate provides argument that I can destructure to {selected}
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return searchResult && posts ? (
    <>
      <form className="d-flex ml-auto">
        <input
          className="form-control searchbar"
          type="search"
          placeholder="Search your topic"
          aria-label="Search"
          onKeyUp={onClick}
        />
        <span className="input-group-text search-icon-container">
          <FontAwesomeIcon
            icon={["fa", "search"]}
            type="submit"
            keyup={onClick}
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
    </>
  ) : (
    <Spinner />
  );
};

export default Search;
