// BlogSection.jsx
import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      title: "چگونه یک وبسایت حرفه‌ای بسازیم",
      img: "blog-1.jpg",
      date: "مهر 1403",
      link: "#"
    },
    {
      title: "بهترین ابزارهای طراحی UI/UX",
      img: "blog-2.jpg",
      date: "شهریور 1403",
      link: "#"
    },
    {
      title: "تکنیک‌های بازاریابی دیجیتال",
      img: "blog-3.jpg",
      date: "مرداد 1403",
      link: "#"
    }
  ];

  return (
    <section className="blog-section" id="blog-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">آخرین مقالات</h2>
          <p className="wow fadeInUp" data-wow-delay=".4s">
            تازه‌ترین مطالب و نکات ما در زمینه طراحی وب و دیجیتال مارکتینگ
          </p>
        </div>

        <div className="row">
          {blogs.map((blog, i) => (
            <div key={i} className="col-md-4 wow fadeInUp" data-wow-delay={`.${4+i}s`}>
              <div className="blog-item">
                <div className="blog-img">
                  <img src={`assets/img/blog/${blog.img}`} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-date">{blog.date}</div>
                  <h3 className="blog-title"><a href={blog.link}>{blog.title}</a></h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
