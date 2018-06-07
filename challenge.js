const counter = document.getElementById('counter');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const heart = document.getElementById('<3');
const submit = document.getElementById('submit');
const pause = document.getElementById('pause');
const commentSection = document.getElementById('list');
const commentForm = document.getElementById('comment-form');
const inputBar = document.getElementById('input-bar');
const likes = {}
const likesList = document.getElementsByClassName('likes');

let timer = parseInt(counter.innerText);
function myTimer() {counter.innerText = ++timer};

var timerFunction = setInterval(myTimer, 1000);

const pauseHandler = function () {
  if (pause.innerText === 'pause') {
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    pause.innerText = "resume";
    clearInterval(timerFunction);
  } else {
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    pause.innerText = "pause";
    timerFunction = setInterval(myTimer, 1000);
  }
}

heart.addEventListener('click', function() {if (likes[timer]) {
  likes[timer] += 1
  document.getElementById(`likes-id-${timer}`).innerText = `${timer} has been liked ${likes[timer]} time(s)`
} else {
  likes[timer] = 1
  const elseLike = document.createElement("li")
  elseLike.id = `likes-id-${timer}`
  elseLike.innerText = `${timer} has been liked ${likes[timer]} time(s)`
  likesList[0].appendChild(elseLike)
}
});
plus.addEventListener('click', function(){counter.innerText = ++timer});
minus.addEventListener('click',function(){counter.innerText = --timer});
pause.addEventListener('click', pauseHandler);
commentForm.addEventListener('click', function(event) {
    event.preventDefault()
    const comment = document.createElement("div")
    comment.innerText = inputBar.value
    commentSection.appendChild(comment)
    inputBar.value = ''
});
