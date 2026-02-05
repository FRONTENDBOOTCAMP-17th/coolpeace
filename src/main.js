import './style.css';

async function loadHTML(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.querySelector(id).innerHTML = html;
}

// loadHTML('#banner', '/src/banner/banner.html');
loadHTML('#about', '/src/about/about.html');
loadHTML('#download', '/src/download/download.html');
// loadHTML('#qna', '/src/qna/qna.html');
// loadHTML('#apply', '/src/apply/apply.html');
// loadHTML('#footer', '/src/footer/footer.html');
