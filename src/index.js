import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css'; // اگه داری

const base = process.env.PUBLIC_URL || '';

function appendScript(src) {
  return new Promise((resolve, reject) => {
    // ابتدا یک HEAD request بزنیم تا مطمئن شیم فایل وجود داره و content-type js هست
    fetch(src, { method: 'HEAD' })
      .then(res => {
        if (!res.ok) throw new Error(`Not found: ${src}`);
        const ct = res.headers.get('content-type') || '';
        if (ct.includes('text/html')) throw new Error(`Returned HTML for: ${src}`);
        // حالا اسکریپت رو اضافه کن
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error('Load error: ' + src));
        document.head.appendChild(s);
      })
      .catch(err => reject(err));
  });
}

async function bootstrap() {
  try {
    // jQuery اولا
    await appendScript(base + '/assets/js/jquery.min.js');

    // پلاگین‌ها — فقط آن‌هایی که واقعاً داری
    const plugins = [
      '/assets/js/bootstrap.bundle.min.js',
      '/assets/js/nice-select.min.js',
      '/assets/js/backToTop.js',
      '/assets/js/smooth-scroll.js',
      '/assets/js/appear.min.js',
      '/assets/js/wow.min.js',
      '/assets/js/gsap.min.js',
      '/assets/js/one-page-nav.js',
      '/assets/js/lightcase.js',
      '/assets/js/owl.carousel.min.js',
      '/assets/js/swiper.min.js',
      '/assets/js/imagesloaded-pkgd.js',
      '/assets/js/isotope.pkgd.min.js',
      '/assets/js/odometer.min.js',
      '/assets/js/magnific-popup.js',
      '/assets/js/validate.min.js',
    ];

    for (const p of plugins) {
      try {
        await appendScript(base + p);
      } catch (e) {
        console.warn(e.message); // اگه یک پلاگین نیست، فقط لاگ کن و ادامه بده
      }
    }

    // فایل main.js همیشه آخر (یا در صورت نیاز)
    try {
      await appendScript(base + '/assets/js/main.js');
    } catch (e) {
      console.warn('main.js not loaded:', e.message);
    }

  } catch (err) {
    console.error('Script loading bootstrap failed:', err);
  } finally {
    // حالا React رو رندر کن
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

bootstrap();
