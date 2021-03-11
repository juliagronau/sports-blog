import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';

const Blogpost = () => {
    
    const { id } = useParams();
    const [indiPost, setIndiPost] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    
    useEffect(() => {
      setLoading(true);
      client
        .getEntry(id)
        .then(res => {
          setIndiPost(res);
          setLoading(false);
        })
        .catch(err => setError(err));
    }, [id]);
    console.log(indiPost);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return indiPost ? (
        <>
        <h2 className="mt-5">{indiPost.fields.postTitle}</h2>
        <img src={indiPost.fields.postImage.fields.file.url} className="img-article" alt="article header image" />
        <h6 className="blockquote-footer">Published on: {indiPost.fields.datePublished.substr(0, 10)}</h6>
        <h6 className="blockquote-footer">Author: {indiPost.fields.authorReference.fields.authorName}</h6>
        {indiPost.fields.postContent.content.map(p => { 
            return <p className="p-article">{p.content[0].value}</p>
            }) 
        }
{/*ZURÜCK BUTTON AUF STARTSEITE EINFÜGEN         
        <button><a></a></button> */}
        </>
    ) : (
        <div>Missing content</div>
    );
      }

export default Blogpost