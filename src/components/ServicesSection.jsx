import React from "react";

const ServicesSection = () => {
  return (
    <>
      {/* SERVICES SECTION START */}
      <section className="services-section" id="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  خدمات با کیفیت من
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  ما ایده های شما و در نتیجه خواسته های شما را در قالب یک پروژه وب منحصر به فرد قرار می دهیم که الهام بخش شما و مشتریان باشد.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="services-widget position-relative">

                {/** Service Items **/}
                {[
                  { number: "01", title: "طراحی برندینگ", desc: "مشکلات پیچیده و تجربه کاربر را برای ایجاد راه حل های متمرکز بر یکپارچگی تجزیه می کنم و راه کارهای کلیدی ارائه میدهم", delay: ".5s" },
                  { number: "02", title: "طراحی سایت", desc: "مشکلات پیچیده و تجربه کاربر را برای ایجاد راه حل های متمرکز بر یکپارچگی تجزیه می کنم و راه کارهای کلیدی ارائه میدهم", delay: ".6s" },
                  { number: "03", title: "طراحی UI/UX", desc: "مشکلات پیچیده و تجربه کاربر را برای ایجاد راه حل های متمرکز بر یکپارچگی تجزیه می کنم و راه کارهای کلیدی ارائه میدهم", delay: ".7s" },
                  { number: "04", title: "طراح گرافیک", desc: "مشکلات پیچیده و تجربه کاربر را برای ایجاد راه حل های متمرکز بر یکپارچگی تجزیه می کنم و راه کارهای کلیدی ارائه میدهم", delay: ".8s" },
                ].map((item, idx) => (
                  <div key={idx} className={`service-item d-flex flex-wrap align-items-center wow fadeInUp ${idx === 0 ? 'current' : ''}`} data-wow-delay={item.delay}>
                    <div className="left-box d-flex flex-wrap align-items-center">
                      <span className="number">{item.number}</span>
                      <h3 className="service-title">{item.title}</h3>
                    </div>
                    <div className="right-box">
                      <p>{item.desc}</p>
                    </div>
                    <i className="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
                  </div>
                ))}

                <div className="active-bg wow fadeInUp" data-wow-delay=".5s"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION END */}

      {/* Service Popup */}
      <div id="service-wrapper" className="popup_content_area zoom-anim-dialog mfp-hide">
        <div className="popup_modal_img">
          <img src="assets/img/services/modal-img.jpg" alt="" />
        </div>

        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">خدمات</h6>
                    <h2 className="title">طراح UI/UX</h2>
                    <div className="desc">
                      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>

                    <h3 className="title">فرآیند خدمات</h3>
                    <div className="desc">
                      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>

                    <ul>
                      <li>کسب و کار خود را دوباره شروع و بهتر شوید</li>
                      <li>پیشگام در اینترنت</li>
                      <li>پیشگام در دنیای طراحی</li>
                      <li>پیشگام در دنیای طراحی</li>
                      <li>پیشگام در دنیای طراحی</li>
                      <li>پیشگام در دنیای طراحی</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">

                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">تمامی خدمات</h3>
                    </div>
                    <ul>
                      <li className="active"><button><i className="flaticon-design"></i> طراحی برندینگ</button></li>
                      <li><button><i className="flaticon-3d-movie"></i> انیمیشن سه بعدی</button></li>
                      <li><button><i className="flaticon-ux-design"></i> طراحی UI/UX</button></li>
                      <li><button><i className="flaticon-web-design"></i> طراحی وبسایت</button></li>
                      <li><button><i className="flaticon-ui-design"></i> طراحی اپکیشن</button></li>
                    </ul>
                  </div>

                  <div className="sidebar_widget contact_form">
                    <div className="widget_title">
                      <h3 className="title">در تماس باش</h3>
                    </div>

                    <form action="index.html">
                      <div className="form_group">
                        <input type="text" name="name" id="name" placeholder="نام" autoComplete="off" />
                      </div>
                      <div className="form_group">
                        <input type="email" name="semail" id="semail" placeholder="ایمیل" autoComplete="off" />
                      </div>
                      <div className="form_group">
                        <textarea name="smessage" id="smessage" placeholder="پیام شما" autoComplete="off"></textarea>
                      </div>
                      <div className="form_btn">
                        <button className="btn tj-btn-primary" type="submit">ارسال پیام</button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* end: Service Popup */}
    </>
  );
};

export default ServicesSection;
