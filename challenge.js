const counter = document.getElementById('counter');
const plus = document.getElementById('+')
const minus = document.getElementById('-')
let timer = parseInt(counter.innerText);

(function() {
  setInterval(function() {
    counter.innerText = ++timer;
  }
  , 1000);
})();

plus.addEventListener('click',function(){counter.innerText = ++timer})
minus.addEventListener('click',function(){counter.innerText = --timer})
