const button = document.getElementById('button');
const img = document.getElementById('img');
const address = document.getElementById('address');

button.addEventListener('click', () => {
  img.src = 'img/compute2.jpg';
  address.innerHTML = 'zeemon777@gmail.com';
  button.style.opacity = '0';
  button.style.marginTop = '0';
});
