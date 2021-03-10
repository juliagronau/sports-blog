import React from 'react'

const PostContent = ({ content }) => {
    const { authorReference, datePublished, postContent, postImage, postTitle } = content.fields;
    console.log(postContent);
    let paragraph = '';
    return (
        <div>
            <p>hello</p>
            {/*}
            {postContent.content.map((index) => { index.content.map((innerIndex) => paragraph=`${paragraph}${innerIndex.value}`) })}
            <p>{paragraph}</p>
    */}
        </div>
    )
}

export default PostContent
