import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

const BlogPostFull = () => {
  let { blogID } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(null);
  const [body, setBody] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://blog-project-api-jms.herokuapp.com/posts/${blogID}`)
      .then(response => {
        setArticle(response.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [blogID]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://blog-project-api-jms.herokuapp.com/posts/${blogID}/comments`)
      .then(res => {
        setComments([...comments, res.data]);
        setLoading(false);
      })
      .catch(err => console.log(err));
      console.log(comments)
  }, [blogID]);

  const onSubmit = (e) => {
    e.preventDefault();
    // const postData
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    setBody({
      name: e.target[0].value,
      title: e.target[1].value,
      text: e.target[2].value
    });
    alert('Thank you for your comment. Please refresh the page to see it.')
  };

  const onChange = (e) => {
    console.log(e.target.value);
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
      <h5 className="mt-3">Latest Comments</h5>
      {comments && comments.map(comment => {
        return (
        <div className="container comment">
          <div className="row">
            <div className="commentTitle">{comment.title}</div>
          </div>
          <div className="row">
            <div className="commentName blockquote-footer">{comment.name}</div>
          </div>
          <div className="row">
            <div>{comment.comment}</div>
          </div>
        </div>
        )}
      )}
      <form className="container comment mt-3" onSubmit={onSubmit}>
        <div className="row mb-3">
          <h5>Tell us what you think</h5>
          <input type="text" value={body.commentTitle} onChange={onChange} className="form-control form-control-sm mb-1" id="commentTitle" placeholder="Title of your comment" />
          <input type="text" value={body.commentName} onChange={onChange} className="form-control form-control-sm mb-1" id="commentName" placeholder="Type in your alias" />
          <textarea type="text" value={body.commentText} onChange={onChange} className="form-control form-control-sm mb-1" rows="3" id="commentText" placeholder="What do you want to say?"></textarea>
          <button type="submit" className="btn btn-outline-light btn-sm">Submit</button>
        </div>
      </form>
    </>
  ) : (
    <Spinner />
  );
};

export default BlogPostFull;
