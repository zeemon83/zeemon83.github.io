const button = document.getElementById('button');
const img = document.getElementById('img');
const address = document.getElementById('address');

button.addEventListener('click', () => {
  if (address.innerHTML == '') {
    img.src = 'img/compute2.jpg';
    address.innerHTML = 'zeemon777@gmail.com';
    // button.style.marginTop = '0';

  } else {
    img.src = '';
    address.innerHTML = '';
    // button.style.marginTop = '494px';

  }

});


// img.src = 'img/compute2.jpg';
// address.innerHTML = 'zeemon777@gmail.com';
// button.style.opacity = '0';
// button.style.marginTop = '0';
