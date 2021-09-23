const body = document.querySelector("#body");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const direction = document.querySelector("#direction");
const randomBtn = document.querySelector("#random-btn");
const bgCodeContainer = document.querySelector("#bg-code-container");
const bgCode = document.querySelector("#bg-code");
const copied = document.querySelector("#copied");

// Set initial background
body.style.background = `linear-gradient(to ${direction.value}, ${color1.value}, ${color2.value})`;

const changeBackground = function () {
  // Display bgCodeContainer
  if (bgCodeContainer.style.display === "none") {
    x.style.display = "flex";
  }

  bgCodeContainer.style.display = "flex";
  body.style.background = `linear-gradient(to ${direction.value}, ${color1.value}, ${color2.value})`;
  bgCode.textContent = `background: ${body.style.background};`;

  // Hide copied
  if (copied.style.display === "block") {
    copied.style.display = "none";
  }
};

// Pick random background
const getRandomBgDirection = function () {
  const directions = ["top", "right", "bottom", "left"];
  const randomIndex = Math.floor(Math.random() * 4);

  return directions[randomIndex];
};

const getRandomHexColor = function () {
  const hexColorArr = [];

  for (let i = 0; i < 3; i++) {
    const randomHex = Math.floor(Math.random() * 256).toString(16);
    const hexColor = randomHex.length === 1 ? `0${randomHex}` : randomHex;
    hexColorArr.push(hexColor);
  }

  return `#${hexColorArr.join("")}`;
};

const getRandomBackground = function () {
  color1.value = getRandomHexColor();
  color2.value = getRandomHexColor();
  direction.value = getRandomBgDirection();
  changeBackground();
};

async function clipboardCopy() {
  let text = bgCode.textContent;
  await navigator.clipboard.writeText(text);

  // Show copied
  copied.style.display = "block";
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
direction.addEventListener("input", changeBackground);
bgCode.addEventListener("click", clipboardCopy);
randomBtn.addEventListener("click", getRandomBackground);
