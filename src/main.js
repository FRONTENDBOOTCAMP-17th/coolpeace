// 1. 각 섹션 HTML을 문자열(raw)로 임포트 (Vite 전용?)
import navHTML from './nav/nav.html?raw';
// import bannerHTML from './Taxi-Banner/Taxi-Banner.html?raw';
import aboutHTML from './about/about.html?raw';
import downloadHTML from './download/download.html?raw';
import qnaHTML from './qna/qna.html?raw';
import applyHTML from './apply/apply.html?raw';
import footerHTML from './taxi-footer/taxi-footer.html?raw';

// 2. CSS 임포트
import './style.css';

// 3. 렌더링 함수 (중복 코드를 줄이기 위해)
const render = (selector, html) => {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = html;
  } else {
    console.warn(`${selector} 아이디를 가진 요소를 찾을 수 없습니다.`);
  }
};

// 4. 각 섹션에 주입
render('#nav', navHTML);
// render('#banner', bannerHTML);
render('#about', aboutHTML);
render('#download', downloadHTML);
render('#qna', qnaHTML);
render('#apply', applyHTML);
render('#footer', footerHTML);
