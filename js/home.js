const cancelled = document.getElementsByClassName('cancelled');
const white = document.getElementsByClassName('white-bk');
const itemPad = document.getElementById('tour');
const contain3 = document.querySelector('.container3');
const itemDiv = document.querySelector('.item-pad');

contain3.addEventListener('mouseover', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.style.textDecoration = 'line-through';
    event.target.style.textDecorationColor = 'red';
  }

});

contain3.addEventListener('mouseover', (event) => {
  if (event.target.tagName == 'SPAN') {
    event.target.innerHTML = ' - cancelled';
    event.target.style.textDecoration = 'line-through';
    event.target.style.textDecorationColor = 'red';

    event.target.style.textTransform = 'uppercase';
  }

});








// function noShow() {
//   for (var i = 0; i < white.length; i++) {
//     white[i].style.textDecoration = 'line-through';
//     white[i].style.textDecorationColor = 'red';
//   }
//
//   for (var i = 0; i < cancelled.length; i++) {
//     cancelled[i].innerHTML = 'cancelled';
//     cancelled[i].style.textTransform = 'uppercase';
//   }
//
// }
//
// itemPad.addEventListener('mouseover', noShow);
