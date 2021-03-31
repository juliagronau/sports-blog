import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogpost = ({
  post: {
    post_id,
    authorname,
    datepublished,
    postimage,
    posttitle,
    postteaser,
  },
}) => {
  const [blogID, setBlogID] = useState();

  useEffect(() => {
    setBlogID(post_id);
  }, []);

  return (
    <div className="col-md-4 mt-2 mb-4">
      <div className="card">
        <img src={postimage} className="card-img-top" alt="article header" />
        <div className="card-body">
          <h5 className="card-title">{posttitle}</h5>
          <h6 className="blockquote-footer">Published on: {datepublished}</h6>
          <h6 className="blockquote-footer">Author: {authorname}</h6>
          <p className="card-text">{postteaser}</p>
          <div className="text-center linkToBlogPost">
            <Link to={`/${post_id}`} className="btn-blogTeaser">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
