import React from 'react';

const Blogpost = ({ post }) => {
    const paragraphe = [];
    
    const { authorReference, datePublished, postContent, postImage, postTitle } = post.fields;
    const a = postContent.content.map((index) => { index.content.map((innerIndex) => paragraphe.push(`${innerIndex.value}`)) })
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "antiquewhite", margin: "2em" }}>

            <img style={{ margin: "1em", width: "50%" }} src={`https:${postImage.fields.file.url}`} alt="article" />

            <h1>{postTitle}</h1>

            <div style={{ width: "50%", color: "gray", display: "flex", justifyContent: "space-between" }}>
                <h6>Publisehed on: {datePublished.substr(0, 10)}</h6>
                <h6>{authorReference.fields.authorName}</h6>
            </div>
        </div>



        // <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "antiquewhite", margin: "2em" }}>

        //     <img style={{ margin: "1em", width: "50%" }} src={`https:${postImage.fields.file.url}`} alt="article" />

        //     <h1>{postTitle}</h1>

        //     <div style={{ width: "50%", color: "gray", display: "flex", justifyContent: "space-between" }}>
        //         <h6>Publisehed on: {datePublished.substr(0, 10)}</h6>
        //         <h6>{authorReference.fields.authorName}</h6>
        //     </div>

            
            // {paragraphe.map((paragraph) => <p>{paragraph}</p>)} 
            // {/* {console.log("etwas" + etwas)} */}


        // </div>
    )
}
// Blogpost.propTypes = {
// It is created by shortcut. Ask to Jorge => For what it is used?
// import Proptypes id also created when I used shortcut=^
// }

export default Blogpost