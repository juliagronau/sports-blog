import React from 'react';

const Blogger = ( {author} ) => {

    return (
        <div class="col-md-4">
                <div className="col mt-3 mb-3">
                    <img className="row img-fluid img-author mb-3" src={author.fields.authorImage.fields.file.url} alt={author.fields.authorImage.fields.file.fileName}/>
                    <div className="row">
                        <p>{author.fields.authorDescription}</p>
                        <footer className="blockquote-footer"><cite title="Source Title">{author.fields.authorName}</cite></footer>
                    </div>
                </div>
        </div>
    )
}

export default Blogger;
