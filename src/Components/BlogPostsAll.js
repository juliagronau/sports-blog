import React, {useState} from "react";
import BlogPostTeaser from "./BlogPostTeaser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate from 'react-paginate';

const BlogPostsAll = ({ posts }) => {
  // Pagination
  const [pageNum, setPageNum] = useState(0);
  const cardsPerPage = 3;
  const pagesVisited = pageNum * cardsPerPage;
  // slice() Methode returns part of Arr
  const displayCards = posts
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map(post => <BlogPostTeaser key={posts.post_id} post={post} />);
    // Math.ceil() gives next higher integer that is equal or greater than the given num
    const pageCount = Math.ceil(posts.length / cardsPerPage);
    // ReactPaginate provides argument that I can destructure to {selected}
    const changePage = ( {selected} ) => {
        setPageNum(selected);
    };

  return posts ? (
    <>
      <div className="row">
        {displayCards}
        <ReactPaginate 
          previousLabel={(<FontAwesomeIcon className='previousBtn' icon={['fas', 'angle-left']}/>)}
          nextLabel={(<FontAwesomeIcon className='nextBtn' icon={['fas', 'angle-right']}/>)}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBtns'}
          previousLinkClassName={'previousBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>    
    </>
  ) : <h2>Loading ...</h2>;
};

export default BlogPostsAll;
