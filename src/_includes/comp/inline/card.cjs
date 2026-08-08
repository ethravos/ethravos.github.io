const {html} = require('common-tags');

function Card({label, link, linkText, desc, img}) {
  return html`
  <div class="card-wrapper">
    <div class="card">
      <div class="card__image">
        <img src="${img}" alt="">
      </div>
      <div class="card__info">
        <div class="info__label">${label}</div>
        <div class="info__desc">${desc}</div>
        <div class="info__button">
          <button href="${link}">${linkText}</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

module.exports = Card;
