//Loader & ページ遷移アニメーションÏ
const loaderWrap = document.querySelector(".loader__wrap");
const loaderLogo = document.querySelector(".loader__logo");
const page = location.href.split("/").pop();

document.addEventListener("DOMContentLoaded", function () {
  //ページ遷移 トランジション
  if (sessionStorage.getItem("visit")) {
    if (page === "" || page.match(/^#/)) {
      //トップページ
      loaderWrap.style.display = "none";
      loaderLogo.style.display = "none";
    }

    //page transition
    //アニメーション用要素追加
    const opening = document.createElement("div");
    opening.classList.add("is-opening");
    document.body.appendChild(opening);

    //アニメーション用要素削除
    setTimeout(() => {
      opening.remove();
    }, 2000);

    //ページ訪問時にloader表示
  } else {
    sessionStorage.setItem("visit", 0);

    setTimeout(() => {
      loaderWrap.classList.add("loader__wrap-anim");
      loaderLogo.classList.add("loader__logo-anim");
    }, 2000);
  }
});

//header shrink
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const startPosition = 0;

window.addEventListener("scroll", function () {
  const position = window.pageYOffset; //スクロール量
  if (position > startPosition && position > headerHeight) {
    //スクロール量が headerの高さを越えたら
    header.classList.add("is-fixed");
  } else {
    header.classList.remove("is-fixed");
  }
});

//hamburger menu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".global-nav__wrap");
const navOverlay = document.createElement("div");
navOverlay.className = "global-nav__overlay";

function hamMenu() {
  hamburger.addEventListener("click", function () {
    if (nav.classList.contains("is-shown")) {
      nav.classList.remove("is-shown");
      navOverlay.animate({ opacity: [1, 0] }, { duration: 500, fill: "both" });
      setTimeout(() => {
        navOverlay.remove();
      }, 500);
    } else {
      nav.classList.add("is-shown");
      nav.appendChild(navOverlay);
      navOverlay.animate({ opacity: [0, 1] }, { duration: 500, fill: "both" });
    }
  });
  navOverlay.addEventListener("click", function () {
    nav.classList.remove("is-shown");
    navOverlay.animate({ opacity: [1, 0] }, { duration: 500, fill: "both" });
    setTimeout(() => {
      navOverlay.remove();
    }, 500);
  });
}
hamMenu();

//NavLink クリック時
let navLink = document.querySelectorAll(".global-nav__link");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    nav.classList.remove("is-shown");
    navOverlay.animate({ opacity: [1, 0] }, { duration: 500, fill: "both" });
    setTimeout(() => {
      navOverlay.remove();
    }, 500);
  });
}

//トップに戻るボタン
const footer = document.querySelector("footer");
const topBtn = document.querySelector(".button__top");
const start = 100; //ボタン表示開始するスクロール値
topBtn.style.display = "none";

window.addEventListener("scroll", () => {
  //スクロール量がstart超えたらボタン表示
  if (window.pageYOffset > start) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  const scrollHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.innerHeight + window.pageYOffset;
  const footerHeight = footer.clientHeight;

  //ページ下端でボタンfooter上に位置調整
  if (scrollHeight - scrollPosition <= footerHeight) {
    topBtn.classList.add("is-bottom");
  } else {
    topBtn.classList.remove("is-bottom");
  }
});
//トップボタンクリックイベント
topBtn.addEventListener("click", (e) => {
  e.preventDefault(); //デフォルトのクリックイベント無効化
  window.scroll({
    top: 0, // スクロール先
    behavior: "smooth", // スクロールアニメーション
  });
});

//ページ内リンクスムーズスクロール
const anchors = document.querySelectorAll('a[href^="#"]');

// 各 anchor にクリックイベント
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", (e) => {
    e.preventDefault(); //デフォルトのクリックイベント無効化

    // 各 anchor の href属性取得
    const href = anchors[i].getAttribute("href");

    // スクロール先の要素を取得 （アンカーの リンク先 #.. の # を取り除いた名前と一致する id名の要素）
    const target = document.getElementById(href.replace("#", ""));

    // スクロール先の要素の位置を取得
    const position = window.pageYOffset + target.getBoundingClientRect().top;

    // スクロールアニメーション
    window.scroll({
      top: position, // スクロール先要素の左上までスクロール
      behavior: "smooth", // スクロールアニメーション
    });
  });
}
