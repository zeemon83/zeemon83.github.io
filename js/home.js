const cancelled = document.getElementsByClassName('cancelled');
const white = document.getElementsByClassName('white-bk');
const itemPad = document.getElementById('tour');

function noShow() {
  for (var i = 0; i < white.length; i++) {
    white[i].style.textDecoration = 'line-through';
    white[i].style.textDecorationColor = 'red';
  }
  for (var i = 0; i < cancelled.length; i++) {
    cancelled[i].innerHTML = 'cancelled';
    cancelled[i].style.textTransform = 'uppercase';
  }

}

itemPad.addEventListener('mouseover', noShow);
