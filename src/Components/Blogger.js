import React from "react";

const Blogger = ({ blogger }) => {
  return (
    <div class="col-md-4">
      <div className="col mt-3 mb-3">
        <img
          className="row img-fluid img-author mb-3"
          src={blogger.authorimage}
          alt="image of blogger"
        />
        <div className="row">
          <p>{blogger.authordescription}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{blogger.authorname}</cite>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Blogger;
