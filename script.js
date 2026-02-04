const bunny = document.getElementById("bunny");
const gift = document.getElementById("gift");

let pos = -150;
let direction = 1;

const run = setInterval(() => {
  pos += 6 * direction;
  bunny.style.left = pos + "px";

  // jump motion
  bunny.style.bottom = 18 + Math.sin(pos / 35) * 4 + "%";

  // screen bounce
  if (pos > window.innerWidth - 150) direction = -1;
  if (pos < -150) direction = 1;
}, 30);

// stop bunny and show gift
setTimeout(() => {
  clearInterval(run);
  bunny.style.left = "50%";
  bunny.style.transform = "translateX(-50%)";

  setTimeout(() => {
    gift.style.transform = "translate(-50%, -50%) scale(1)";
  }, 900);
}, 7000);
