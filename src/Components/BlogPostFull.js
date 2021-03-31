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
  const [formState, setFormState] = useState({
    commentName: '',
    commentTitle: '',
    commentText: ''
  });
  const { commentName, commentTitle, commentText } = formState;

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
    // The for...in statement iterates over all enumerable properties of an object that are keyed by strings
    // A different property name (here commentName, commentTitle ...) is assigned to variable (here const field) on each iteration.
    for (const field in formState) {
      if(!formState[field]) return alert(`Please fill up your ${field}`)
    }
  
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // https://codesandbox.io/s/naughty-blackburn-sdlwi?file=/src/App.js
    newComment = async(url, data) => {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
      });
      return res.json();
    }
    
    try {
      newComment(`https://blog-project-api-jms.herokuapp.com/posts/${blogID}/comments`, formState);
      alert('Thank you for your comment. Please refresh the page to see it.');
    } catch(err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    console.log(e.target.name);
    setFormState( {...formState, [e.target.name]: e.target.value })
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
          <input type="text" name="title" value={commentTitle} onChange={onChange} className="form-control form-control-sm mb-1"placeholder="Title of your comment" />
          <input type="text" name="email" value={commentName} onChange={onChange} className="form-control form-control-sm mb-1" placeholder="Type in your alias" />
          <textarea type="text" name="text" value={commentText} onChange={onChange} className="form-control form-control-sm mb-1" rows="3" placeholder="What do you want to say?"></textarea>
          <button type="submit" className="btn btn-outline-light btn-sm">Submit</button>
        </div>
      </form>
    </>
  ) : (
    <Spinner />
  );
};

export default BlogPostFull;
