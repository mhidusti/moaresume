// TestimonialSection.jsx
import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "آریا حسینی",
      role: "مدیر استودیو",
      img: "testimonial-1.jpg",
      comment: "لورم ایپسوم متن ساختگی برای نمونه نظر مشتری..."
    },
    {
      name: "مینا رستمی",
      role: "کارآفرین",
      img: "testimonial-2.jpg",
      comment: "لورم ایپسوم متن ساختگی برای نمونه نظر مشتری دوم..."
    },
    {
      name: "سامان فتاحی",
      role: "توسعه‌دهنده",
      img: "testimonial-3.jpg",
      comment: "لورم ایپسوم متن ساختگی برای نمونه نظر مشتری سوم..."
    }
  ];

  return (
    <section className="testimonial-section" id="testimonial-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">نظر مشتریان</h2>
          <p className="wow fadeInUp" data-wow-delay=".4s">
            مشتریان ما درباره خدمات ما چه می‌گویند.
          </p>
        </div>

        <div className="testimonial-carousel owl-carousel">
          {testimonials.map((item, i) => (
            <div key={i} className="testimonial-item wow fadeInUp" data-wow-delay={`.${3+i}s`}>
              <div className="testimonial-content">
                <p>{item.comment}</p>
                <div className="author">
                  <img src={`assets/img/testimonials/${item.img}`} alt={item.name} />
                  <div className="author-info">
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
