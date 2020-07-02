let ratingBase = 560,
  bensReviews = 77789,
  bensWeek = 99,
  bensRating = 3.5,
  zaatarReviews = 11,
  zaatarWeek = 11,
  zaatarRating = 4.5,
  ratchetiviReviews = 66,
  ratchetiviWeek = 88,
  ratchetiviRatings = 4.5;
let arrayOrder = [1, 2, 3];

document.addEventListener("DOMContentLoaded", changeValues);

function changeValues() {
  // bens
  document.getElementById("bensReview").textContent = `${bensReviews} reviews`;
  document.getElementById(
    "bensWeek"
  ).textContent = `Opened ${bensWeek} Week Ago`;
  setImgPosition(document.getElementById("bensRating"), bensRating);

  // zaatars
  document.getElementById(
    "zaatarReview"
  ).textContent = `${zaatarReviews} reviews`;
  document.getElementById(
    "zaatarWeek"
  ).textContent = `Opened ${zaatarWeek} Week Ago`;
  setImgPosition(document.getElementById("zaatarRating"), zaatarRating);

  // ratchetivi
  document.getElementById(
    "ratchetiviReview"
  ).textContent = `${ratchetiviReviews} reviews`;
  document.getElementById(
    "ratchetiviWeek"
  ).textContent = `Opened ${ratchetiviWeek} Ago`;
  setImgPosition(
    document.getElementById("ratchetiviRating"),
    ratchetiviRatings
  );
  rotateItem();
}

function setImgPosition(elm, rating) {
  rating % 1 === 0
    ? (rating = Math.ceil(rating) * 2)
    : (rating = Math.ceil(rating) * 2 - 1);
  let imgPosition = ratingBase - (rating - 1) * 24;
  if (rating >= 1) {
    elm.style.backgroundPositionY = `${imgPosition}px`;
  }
}

document.querySelector("#bens-item").addEventListener("click", e => {
  rotateItem();
});

document.getElementById("zaatar-item").addEventListener("click", e => {
  rotateItem();
});

document.getElementById("ratchetivi-item").addEventListener("click", e => {
  rotateItem();
});

function rotateItem() {
  let elment = arrayOrder.pop();
  arrayOrder.unshift(elment);
  document.getElementById("bens-item").style.order = arrayOrder[0];
  document.getElementById("zaatar-item").style.order = arrayOrder[1];
  document.getElementById("ratchetivi-item").style.order = arrayOrder[2];
}
