import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogPostFull = () => {
  let { blogID } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://blog-project-api-jms.herokuapp.com/posts/${blogID}`)
      .then(response => {
        console.log(response.data);
        setArticle(response.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [blogID]);

  if (loading) {
    return <h2>Loading ... </h2>;
  }

  return article ? (
    <>
      <div className="container-blogImg mt-3">
        <img
          src={article.postimage}
          className="img-article"
          alt="article header image"
        />
        <h2 className="mt-5 overlay">{article.posttitle}</h2>
      </div>
      <h6 className="blockquote-footer">
        Published on: {article.datepublished}
      </h6>
      <h6 className="blockquote-footer">Author: {article.authorname}</h6>
      <p className="p-article">{article.postcontent_par1}</p>
      <p className="p-article">{article.postcontent_par2}</p>
      <p className="p-article">{article.postcontent_par3}</p>
      <p className="p-article">{article.postcontent_par4}</p>
      <div className="text-center linkToBlogPost">
        <Link to={"/"} className="btn-blogTeaser">
          Back to Homepage
        </Link>
      </div>
    </>
  ) : (
    <div>Missing content</div>
  );
};

export default BlogPostFull;
