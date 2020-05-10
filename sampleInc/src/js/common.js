//Loader
const loader = document.querySelector(".loader__wrap");
const loading = document.querySelector(".loading");

//loadが終わらなくてもDOM（HTMLソース）読み込んで5秒後に実行
document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("visit")) {
    loader.style.display = "none";
    loading.style.display = "none";
    return;
  } else {
    sessionStorage.setItem("visit", 0);
    setTimeout(() => {
      loading.classList.add("loading-anim");
      loader.classList.add("loader-anim");
      loading.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = "none";
      }, 1000);
    }, 2000);
  }
});

//トップに戻るボタン
const topBtn = document.querySelector(".footer__btn-top");
const start = 100; //ボタン表示開始するスクロール値
topBtn.style.display = "none";

window.addEventListener("scroll", () => {
  //スクロール量がstart超えたら
  if (window.pageYOffset > start) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

//Smooth Scroll
const anchors = document.querySelectorAll('a[href^="#"]');
const urlHash = location.hash; // URLのアンカー（#以降の部分）を取得

// 各 anchor にクリックイベント
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", (e) => {
    e.preventDefault(); //デフォルトのクリックイベント無効化

    // 各 anchor の href属性取得
    const href = anchors[i].getAttribute("href");

    // topに戻る以外のアンカー
    if (href !== "#top") {
      // スクロール先の要素を取得 （アンカーの リンク先 #.. の # を取り除いた名前と一致する id名の要素）
      const target = document.getElementById(href.replace("#", ""));

      // スクロール先の要素の位置を取得
      const position = window.pageYOffset + target.getBoundingClientRect().top;

      // スクロールアニメーション
      window.scroll({
        top: position, // スクロール先要素の左上までスクロール
        behavior: "smooth", // スクロールアニメーション
      });

      // topに戻る
    } else {
      // スクロールアニメーション
      window.scroll({
        top: 0, // スクロール先
        behavior: "smooth", // スクロールアニメーション
      });
    }
  });
}

//Smooth Scroll 別ページから遷移して来た場合
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0); // 初期状態ではページ上端を表示
  if (urlHash) {
    setTimeout(function () {
      // スクロール先の要素を取得 （アンカーの リンク先 #.. の # を取り除いた名前と一致する id名の要素）
      const urlTarget = document.getElementById(urlHash.replace("#", ""));

      // スクロール先の要素の位置を取得
      const urlPosition =
        window.pageYOffset + urlTarget.getBoundingClientRect().top;
      // スクロールアニメーション
      window.scroll({
        top: urlPosition, // スクロール先要素の左上までスクロール
        behavior: "smooth", // スクロールアニメーション
      });
    }, 300); //.3秒後に処理開始
  }
});

//hamburger
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
