// ===== LOGIN HANDLER WITH HEARTS =====
function checkLogin() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const error = document.getElementById('error-msg');

  if (user === 'BUBU' && pass === 'ILOVEPUDU') {
    // spawn a burst of hearts
    const total = 20;
    const delay = 100; // ms between each heart
    for (let i = 0; i < total; i++) {
      setTimeout(spawnHeart, i * delay);
    }
    // after hearts have flown, send to birthday page
    setTimeout(() => {
      window.location.href = 'birthday.html';
    }, total * delay + 500);
  } else {
    error.textContent = 'Oops! Wrong username or password 💔';
  }
}

// helper: create one heart at a random horizontal position
function spawnHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  // random size
  const size = Math.random() * 20 + 10; // 10–30px
  heart.style.fontSize = `${size}px`;
  // random horizontal start
  heart.style.left = `${Math.random() * 100}%`;
  // attach to the login page container
  document.body.appendChild(heart);
  // remove after animation
  heart.addEventListener('animationend', () => heart.remove());
}