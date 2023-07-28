const time = document.querySelector(".time");

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  const nowTime = `${hours}:${minutes}`;
  time.innerText = nowTime;
}

getCurrentTime();
