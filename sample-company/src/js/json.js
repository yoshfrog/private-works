const output = document.querySelector(".card__output");
const page = location.href.split("/").pop();

async function dataJson() {
  const data = await fetch("./assets/js/data.json");
  const json = await data.json();

  for (let i in json) {
    const wrap = document.createElement("div");
    wrap.className = "card__wrap";

    if (page === "" || page.match(/^#/)) {      //トップページ 3つ掲載
      for (let j in json[i].content) {
        if (j < 3) {
          const card = document.createElement("div");
          card.className = "card__item slide__item";

          const h3 = document.createElement("h3");
          h3.className = "card__title";
          h3.textContent = `${json[i].content[j].card}`;

          const img = document.createElement("img");
          img.className = "card__image";
          img.src = `${json[i].content[j].img}`;
          img.alt = `${json[i].content[j].alt}`;

          const p = document.createElement("p");
          p.className = "card__text";
          p.textContent = `${json[i].content[j].text}`;

          wrap.appendChild(card);
          card.appendChild(h3);
          card.appendChild(p);
          card.appendChild(img);
        }
      }

      output.appendChild(wrap);

    } else {         //下層ページ 全掲載

      for (let j in json[i].content) {
        const card = document.createElement("div");
        card.className = "card__item slide__item";

        const h2 = document.createElement("h2");
        h2.className = "card__title";
        h2.textContent = `${json[i].content[j].card}`;

        const img = document.createElement("img");
        img.className = "card__image";
        img.src = `${json[i].content[j].img}`;
        img.alt = `${json[i].content[j].alt}`;

        const p = document.createElement("p");
        p.className = "card__text";
        p.textContent = `${json[i].content[j].text}`;

        wrap.appendChild(card);
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(img);
      }

      output.appendChild(wrap);
    }

  }
}

// scroll animation
function slideUp() {
const windowHeight = window.innerHeight;
const cards = document.querySelectorAll(".slide__item");
  window.addEventListener("scroll", function () {
    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i]);
      if ( windowHeight > cards[i].getBoundingClientRect().top + windowHeight / 5 ) {
        cards[i].classList.add("is-slideUp");
      }
    }
  });
}

//JSON非同期処理が終わってからslideUP関数実行
dataJson().then(() => {
  slideUp();
});