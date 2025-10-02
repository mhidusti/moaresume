import React from "react";

const BlogItem = ({ image, category, date, comments, title }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog-item">
        <div className="blog-thumb">
          <a href="blog-details.html">
            <img src={image} alt={title} />
          </a>
          <a href="#" className="category">{category}</a>
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <ul className="ul-reset">
              <li><i className="fa-light fa-calendar-days"></i> {date}</li>
              <li><i className="fa-light fa-comments"></i> <a href="#">Comment ({comments})</a></li>
            </ul>
          </div>
          <h3 className="blog-title"><a href="blog-details.html">{title}</a></h3>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
