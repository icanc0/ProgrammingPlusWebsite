const COUNTER = document.getElementById('counter');
const MSG = document.getElementById('message');
let sec = 60;

const TICKING = setInterval(() => {
  sec--;
  COUNTER.innerHTML = 'Estimated Time Left: ' + sec;

  if (sec == 0) {
    clearInterval(TICKING);
    message.innerHTML = 'Files Retrieved'
  }
}, 1000);

let size = 0;
const updateBar = setInterval(() => {
  const bar = document.getElementById('loadingBar');
  size += 0.25;
  bar.style.width = size + '%';

  if (size == 98) {
    clearInterval(updateBar);
  }
}, 153.0612245);
