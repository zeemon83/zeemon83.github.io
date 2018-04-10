const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

imgs.forEach(img =>
  img.addEventListener('click', imgClick));

function imgClick(e) {
  imgs.forEach(img => (img.style.opacity = 1));
  current.src = e.target.src;

  //  add fadein class
  // current.classList.add('fade-in');
// remove fadein
  // setTimeout(() => current.classList.remove('fade-in'), 500);
  // chznge the opacity
  e.target.style.opacity = opacity;
}
