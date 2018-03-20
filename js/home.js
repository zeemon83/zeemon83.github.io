
const contain3 = document.querySelector('.container3');
const cards = document.querySelector('.cards');
const overlay = document.querySelector('.overlay');
const cardo = document.getElementById('cardo');
const cardio = document.getElementById('cardio');

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

// cardo.addEventListener('mouseover', () => {
//     cardio.className += ' myframes';
//     cardio.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,';
//
// });
//
// cardo.addEventListener('mouseout', () => {
//
//     cardio.innerHTML = '';
//     cardio.className -= ' myframes';
//     cardio.className += ' overlay';
//
// });

// cards.addEventListener('mouseover', () => {
//
//     overlay.style.display = 'block';
//
// });
//
// cards.addEventListener('mouseout', () => {
//
//     overlay.style.display = 'none';
//
// });
