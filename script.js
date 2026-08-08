const colorPicker1 = document.querySelector("#color-picker-1");
const colorPicker2 = document.querySelector("#color-picker-2");
const directionSelector = document.querySelector("#gradient-direction-menu");
const colorCodeBox = document.querySelector(".color-code-box");
const colorCode = document.querySelector("#color-code");
const ctaInfo = document.querySelector("#cta-info");
const randomPicker = document.querySelector("#random-picker");

const ctaCopyToClipboard = "Click to copy to your clipboard!";
const ctaCopied = "Copied!";
const directionList = ["top", "right", "bottom", "left"];

const setColorCode = (backgroundStyle) => {
    if (typeof backgroundStyle === 'string' && backgroundStyle.length > 0) {
        colorCode.textContent = `background-image: ${backgroundStyle}`;
    }
};

const setBackgroundImage = () => {
    if (typeof colorPicker1.value !== "string" ||
        typeof colorPicker2.value !== "string" ||
        typeof directionSelector.value !== "string"
    ) {
        return null;
    }

    const color1 = colorPicker1.value.toUpperCase() || "red";
    const color2 = colorPicker2.value.toUpperCase() || "yellow";
    const direction = directionSelector.value.toLowerCase() || "right";

    const backgroundStyle = `linear-gradient(to ${direction}, ${color1}, ${color2})`;
    document.body.style.backgroundImage = backgroundStyle;
    setColorCode(backgroundStyle);

    ctaInfo.textContent = ctaCopyToClipboard;
};

const convertNumToHex = (num) => {
    if (!num || typeof num !== "number") return null;

    let hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
};

const getRandomInt = (maxNum) => {
    if (!maxNum || typeof maxNum !== "number") return null;

    return Math.floor(Math.random() * maxNum);
};

const getRandomColorHex = () => {
    const rHex = convertNumToHex(getRandomInt(256));
    const gHex = convertNumToHex(getRandomInt(256));
    const bHex = convertNumToHex(getRandomInt(256));

    return `#${rHex}${gHex}${bHex}`;
};

const getRandomDirection = () => {
    const index = getRandomInt(4);
    return directionList[index];
};

const pickRandomBackgroundImage = () => {
    colorPicker1.value = getRandomColorHex();
    colorPicker2.value = getRandomColorHex();
    directionSelector.value = getRandomDirection();
    setBackgroundImage();
};

const copyToClipboard = () => {
    navigator.clipboard.writeText(colorCode.innerText);
    ctaInfo.textContent = ctaCopied;
};

colorPicker1.addEventListener("input", setBackgroundImage);
colorPicker2.addEventListener("input", setBackgroundImage);
directionSelector.addEventListener("input", setBackgroundImage);
colorCodeBox.addEventListener("click", copyToClipboard);
randomPicker.addEventListener("click", pickRandomBackgroundImage);