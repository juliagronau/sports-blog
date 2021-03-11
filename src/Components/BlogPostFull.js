import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../client'
import { useParams } from 'react-router-dom';

const BlogPostFull = () => {
    let { blogID } = useParams();
    const [ article, setArticle ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    useEffect(() => {
        setLoading(true);
        client
          .getEntry(blogID)
          .then(res => {
              console.log(res);
              setArticle(res);
              setLoading(false);
              console.log(article.fields.postContent.content.map(p => p.content[0].value));
          })
          .catch(err => console.log(err));
      }, [blogID]);
 
    if(loading) {
        return <h2>Loading ... </h2>    
    }
        
    return article ? (
        <>
        <div className="container-blogImg">
            <img src={article.fields.postImage.fields.file.url} className="img-article" alt="article header image" />
            <h2 className="mt-5 overlay">{article.fields.postTitle}</h2>
		</div>
        <h6 className="blockquote-footer">Published on: {article.fields.datePublished.substr(0, 10)}</h6>
        <h6 className="blockquote-footer">Author: {article.fields.authorReference.fields.authorName}</h6>
        {article.fields.postContent.content.map(p => { 
            return <p className="p-article">{p.content[0].value}</p>
            })
        }
        <div className="text-center linkToBlogPost">
            <Link to={'/'} className="btn-blogTeaser">Back to Homepage</Link>
        </div>
        </>
    ) : (
        <div>Missing content</div>
    )
}

export default BlogPostFull;