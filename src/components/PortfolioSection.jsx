import React from "react";

const PortfolioSection = () => {
  return (
    <>
      {/* PORTFOLIO SECTION START */}
      <section className="portfolio-section" id="works-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  پروژه های اخیر
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  ما ایده های شما و در نتیجه خواسته های شما را در قالب یک پروژه وب منحصر به فرد قرار می دهیم که الهام بخش شما و مشتریان شما باشد.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-filter text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="button-group filter-button-group">
                  <button data-filter="*" className="active">همه</button>
                  <button data-filter=".uxui">UX/UI</button>
                  <button data-filter=".branding">برندینگ</button>
                  <button data-filter=".mobile-app">اپیکیشن</button>
                  <div className="active-bg"></div>
                </div>
              </div>

              <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
                <div className="portfolio-sizer"></div>
                <div className="gutter-sizer"></div>

                {/** Portfolio Items **/}
                <div className="portfolio-item branding">
                  <div className="image-box">
                    <img src="assets/img/portfolio/2.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">دیلویت</h3>
                    <p>پروژه ای در مورد دقت و اطلاعات بالا بود.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup"></button>
                  </div>
                </div>

                <div className="portfolio-item uxui">
                  <div className="image-box">
                    <img src="assets/img/portfolio/1.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">عصر جدید</h3>
                    <p>پروژه ای در مورد دقت و اطلاعات بالا بود.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup"></button>
                  </div>
                </div>

                <div className="portfolio-item mobile-app">
                  <div className="image-box">
                    <img src="assets/img/portfolio/3.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">سباستین</h3>
                    <p>پروژه ای در مورد دقت و اطلاعات بالا بود.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup"></button>
                  </div>
                </div>

                <div className="portfolio-item branding">
                  <div className="image-box">
                    <img src="assets/img/portfolio/4.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">موچینکس</h3>
                    <p>پروژه ای در مورد دقت و اطلاعات بالا بود.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup"></button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PORTFOLIO SECTION END */}

      {/* Portfolio Popup */}
      <div id="portfolio-wrapper" className="popup_content_area zoom-anim-dialog mfp-hide">
        <div className="popup_modal_img">
          <img src="assets/img/portfolio/modal-img.jpg" alt="" />
        </div>

        <div className="popup_modal_content">
          <div className="portfolio_info">
            <div className="portfolio_info_text">
              <h2 className="title">استدیو دی</h2>
              <div className="desc">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
              </div>
              <a href="#" className="btn tj-btn-primary">
                پیش نمایش زنده <i className="fal fa-arrow-right"></i>
              </a>
            </div>
            <div className="portfolio_info_items">
              <div className="info_item">
                <div className="key">دسته بندی</div>
                <div className="value">طراحی وبسایت</div>
              </div>
              <div className="info_item">
                <div className="key">مشتری</div>
                <div className="value">استودیو آرت بورد</div>
              </div>
              <div className="info_item">
                <div className="key">تاریخ شروع</div>
                <div className="value">اردیبهشت ماه ، سال 1403</div>
              </div>
              <div className="info_item">
                <div className="key">طراح</div>
                <div className="value"><a href="#">راوی جی وی</a></div>
              </div>
            </div>
          </div>

          <div className="portfolio_gallery owl-carousel">
            <div className="gallery_item">
              <img src="assets/img/portfolio-gallery/p-gallery-1.jpg" alt="" />
            </div>
            <div className="gallery_item">
              <img src="assets/img/portfolio-gallery/p-gallery-2.jpg" alt="" />
            </div>
            <div className="gallery_item">
              <img src="assets/img/portfolio-gallery/p-gallery-3.jpg" alt="" />
            </div>
            <div className="gallery_item">
              <img src="assets/img/portfolio-gallery/p-gallery-4.jpg" alt="" />
            </div>
          </div>

          <div className="portfolio_description">
            <h2 className="title">توضیحات پروژه</h2>
            <div className="desc">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
