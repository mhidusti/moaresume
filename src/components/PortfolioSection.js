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
                <h2 className="section-title">My Recent Works</h2>
                <p>
                  We put your ideas and thus your wishes in the form of a unique
                  web project that inspires you and your customers.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-filter text-center">
                <div className="button-group filter-button-group">
                  <button data-filter="*" className="active">All</button>
                  <button data-filter=".uxui">UX/UI</button>
                  <button data-filter=".branding">Branding</button>
                  <button data-filter=".mobile-app">Apps</button>
                  <div className="active-bg"></div>
                </div>
              </div>

              <div className="portfolio-box">
                <div className="portfolio-sizer"></div>
                <div className="gutter-sizer"></div>

                {/* Portfolio Items */}
                <div className="portfolio-item branding">
                  <div className="image-box">
                    <img src="assets/img/portfolio/2.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">Deloitte</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup"></button>
                  </div>
                </div>

                <div className="portfolio-item uxui">
                  <div className="image-box">
                    <img src="assets/img/portfolio/1.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">New Age</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup"></button>
                  </div>
                </div>

                <div className="portfolio-item mobile-app">
                  <div className="image-box">
                    <img src="assets/img/portfolio/3.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">Sebastian</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup"></button>
                  </div>
                </div>

                <div className="portfolio-item branding">
                  <div className="image-box">
                    <img src="assets/img/portfolio/4.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">Mochnix</h3>
                    <p>Project was about precision and information.</p>
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
              <h2 className="title">DStudio</h2>
              <div className="desc">
                <p>
                  They are was greater open above shelter lets itself under appear sixth open gathering...
                </p>
              </div>
              <a href="#" className="btn tj-btn-primary">
                live preview <i className="fal fa-arrow-right"></i>
              </a>
            </div>
            <div className="portfolio_info_items">
              <div className="info_item">
                <div className="key">Category</div>
                <div className="value">Web Design</div>
              </div>
              <div className="info_item">
                <div className="key">Client</div>
                <div className="value">Artboard Studio</div>
              </div>
              <div className="info_item">
                <div className="key">Start Date</div>
                <div className="value">August 20, 2023</div>
              </div>
              <div className="info_item">
                <div className="key">Designer</div>
                <div className="value"><a href="#">ThemeJunction</a></div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
