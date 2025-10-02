import React from "react";
import TestimonialItem from "./TestimonialItem";
import BlogItem from "./BlogItem";

// داده‌ها
const testimonialsData = [
  {
    logo: "assets/img/testimonials/logo/1.png",
    user: "assets/img/testimonials/user/1.jpg",
    quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
    name: "Brandon Fraser",
    designation: "Senior Software Dev, Cosmic Sport",
  },
  {
    logo: "assets/img/testimonials/logo/2.png",
    user: "assets/img/testimonials/user/2.jpg",
    quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
    name: "Tim Bailey",
    designation: "SEO Specialist, Theme Junction",
  },
  // میتونی بقیه موارد رو هم اضافه کنی
];

const blogData = [
  {
    image: "assets/img/blog/1.jpg",
    category: "Tutorial",
    date: "Oct 01, 2022",
    comments: 0,
    title: "top 10 ui ux designers",
  },
  {
    image: "assets/img/blog/2.jpg",
    category: "TIPS",
    date: "Nov 01, 2022",
    comments: 0,
    title: "App Development Guides",
  },
  {
    image: "assets/img/blog/3.jpg",
    category: "FREEBIES",
    date: "Dec 01, 2022",
    comments: 0,
    title: "learn graphic design free",
  },
];

const TestimonialBlogSection = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="testimonial-section" id="testimonials-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-header">
                <h2 className="section-title">My Client's Stories</h2>
                <p>Empowering people in new a digital journey with my super services</p>
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              <div className="testimonials-widget">
                <div className="owl-carousel testimonial-carousel">
                  {testimonialsData.map((item, index) => (
                    <TestimonialItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section" id="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title">Recent Blogs</h2>
                <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {blogData.map((blog, index) => (
              <BlogItem key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialBlogSection;
