const Personal = document.getElementById('Personal');
const Yourvideos = document.getElementById('Yourvideos');
const personal = document.getElementById('ones');
const myvideos = document.getElementById('twos');
const display2 = document.getElementById('three');
const display1 = document.getElementById('four');
Personal.addEventListener('click', () => {
  console.log('God is great');
  personal.classList.remove('hii');
  myvideos.classList.add('hii2');
});
Yourvideos.addEventListener('click', () => {
  console.log('God is great');
  personal.classList.add('hii');
  myvideos.classList.remove('hii2');
});

const Videos = document.getElementById('Videos');
const Addvideos = document.getElementById('Addvideos');
Videos.addEventListener('click', () => {
  console.log('God is just');
  Videos.style.background = 'transparent';
  display2.classList.add('three');
  display1.classList.remove('three');
});
Addvideos.addEventListener('click', () => {
  console.log('God is just');
  Addvideos.style.background = 'transparent';
  display2.classList.remove('three');
  display1.classList.add('three');
});
