import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';

const Blogpost = ({post, key}) => {
{/*
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
            <div className='container'>
              <h1>{indiPost.fields.title}</h1>
              <div>
                <div>
                  {
                    <img src={indiPost.fields.postImage.fields.file.url} alt={indiPost.fields.title} />
                 }
                </div>
                <div>
                    {<p>hello</p>}
                </div>
              </div>
            </div>
          ) : (
            <div>No content</div>
          );
          */}

    // console.log(posts);

    const paragraphe = [];
    
    const { authorReference, datePublished, postContent, postImage, postTitle } = post.fields;
    // const a = postContent.content.map((index) => { index.content.map((innerIndex) => paragraphe.push(`${innerIndex.value}`)) })
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "antiquewhite", margin: "2em" }}>

            <img style={{ margin: "1em", width: "50%" }} src={`https:${postImage.fields.file.url}`} alt="article" />

            <h1>{postTitle}</h1>

            <div style={{ width: "50%", color: "gray", display: "flex", justifyContent: "space-between" }}>
                <h6>Published on: {datePublished.substr(0, 10)}</h6>
                <h6>{authorReference.fields.authorName}</h6>
            </div>

            
            {paragraphe.map((paragraph) => <p>{paragraph}</p>)} 
    


        </div>
    )
    
}
// Blogpost.propTypes = {
// It is created by shortcut. Ask to Jorge => For what it is used?
// import Proptypes id also created when I used shortcut=^
// }

export default Blogpost