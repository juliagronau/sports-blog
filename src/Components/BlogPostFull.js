import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Spinner from "./Spinner";

const BlogPostFull = () => {
  let { blogID } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [formState, setFormState] = useState({
    name: '',
    title: '',
    comment: ''
  });
  const { name, comment, title } = formState;

  useEffect( async() => {
    try {
      const res = await axios.get(`https://blog-project-api-jms.herokuapp.com/posts/${blogID}`)
      setArticle(res.data);
    } catch(err) {
      console.log(err); 
    }
  }, [blogID]);

  useEffect( async() => {
    try {
      const res = await axios.get(`https://blog-project-api-jms.herokuapp.com/posts/${blogID}/comments`)
      setComments(res.data);
    } catch(err) {
      console.log(err);
    }
  }, [blogID, comments]);

  const onSubmit = async (e) => {
    e.preventDefault();
    // The for...in statement iterates over all enumerable properties of an object that are keyed by strings
    // A different property name (here commentName, commentTitle ...) is assigned to variable (here const field) on each iteration.
    for (const field in formState) {
      if(!formState[field]) return alert(`Please fill up the field: ${field}`)
    }
  
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // https://codesandbox.io/s/naughty-blackburn-sdlwi?file=/src/App.js
    try {
      const options ={
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const res = await fetch(`https://blog-project-api-jms.herokuapp.com/posts/${blogID}/comments`, options)
      console.log(res.json())
      const data = await res.json()
      setComments([...comments, data])
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    // e.target.name should have same name as in formState object
    setFormState( {...formState, [e.target.name]: e.target.value })  
  }

  return article ? (
    <>
      <div className="text-center linkToHome mt-3 mr-auto">
        <Link to={"/"} className="btn-blogTeaser">
          <FontAwesomeIcon className="mr-2" icon={["fa", "arrow-alt-circle-left"]}
                />
          Back to Homepage
        </Link>
      </div>
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
      <div className="container mt-3 comment">
        <h5>Latest Comments</h5>
        {comments && comments.map(({id, title, name, comment}) => {
          return (
          <div key={id} className="container">
            <div className="row">
              <div className="commentTitle">{title}</div>
            </div>
            <div className="row">
              <div className="commentName blockquote-footer">{name}</div>
            </div>
            <div className="row">
              <div className="commentText">{comment}</div>
            </div>
          </div>
          )}
        )}
        <form className="container mt-3" onSubmit={onSubmit}>
          <div className="row mb-3">
            <h5>Tell us what you think</h5>
            <input type="text" name="title" value={title} onChange={onChange} className="form-control form-control-sm mb-1" placeholder="Title of your comment" />
            <input type="text" name="name" value={name} onChange={onChange} className="form-control form-control-sm mb-1" placeholder="Type in your alias" />
            <textarea type="text" name="comment" value={comment} onChange={onChange} className="form-control form-control-sm mb-1" rows="3" placeholder="What do you want to say?"></textarea>
            <button type="submit" className="btn btn-outline-light btn-sm">Submit</button>
          </div>
        </form>
      </div>
    </>
  ) : (
    <Spinner />
  );
};

export default BlogPostFull;
