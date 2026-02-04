const bunny = document.getElementById("bunny");
const gift = document.getElementById("gift");

let pos = -150;
let direction = 1;

const run = setInterval(() => {
  pos += 6 * direction;
  bunny.style.left = pos + "px";

  // jump motion
  bunny.style.bottom = 18 + Math.sin(pos / 35) * 4 + "%";

  if (pos > window.innerWidth - 150) direction = -1;
  if (pos < -150) direction = 1;
}, 30);

// stop bunny (but do NOT auto-open gift)
setTimeout(() => {
  clearInterval(run);
  bunny.style.left = "50%";
  bunny.style.transform = "translateX(-50%)";
}, 7000);

// ✅ CLICK TO OPEN LETTER
gift.addEventListener("click", () => {
  gift.classList.add("show");
});
