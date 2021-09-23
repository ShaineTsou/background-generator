const body = document.querySelector("#body");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const bgCodeContainer = document.querySelector("#bg-code-container");
const bgCode = document.querySelector("#bg-code");
const copied = document.querySelector("#copied");

// Set initial background
body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

const changeBackground = function () {
  // Display bgCodeContainer
  if (bgCodeContainer.style.display === "none") {
    x.style.display = "flex";
  }

  bgCodeContainer.style.display = "flex";
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  bgCode.textContent = `background: ${body.style.background};`;

  // Hide copied
  if (copied.style.display === "block") {
    copied.style.display = "none";
  }
};

async function clipboardCopy() {
  let text = bgCode.textContent;
  await navigator.clipboard.writeText(text);

  // Show copied
  copied.style.display = "block";
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
bgCode.addEventListener("click", clipboardCopy);
