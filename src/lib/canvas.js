const pixelRatio = window.devicePixelRatio || 1;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

export const grid = {
  width: 100,
  height: 34,

  map: {
    width: 79,
    height: 29,
    x: 21,
    y: 3,
  },
};

const lineHeight = 1.2;

let calculatedFontSize = window.innerWidth / grid.width;
let cellWidth = calculatedFontSize * pixelRatio;
let cellHeight = calculatedFontSize * lineHeight * pixelRatio;
let fontSize = calculatedFontSize * pixelRatio;

canvas.style.cssText = `width: ${calculatedFontSize * grid.width}; height: ${
  calculatedFontSize * lineHeight * grid.height
}`;
canvas.width = cellWidth * grid.width;
canvas.height = cellHeight * grid.height;

ctx.font = `normal ${fontSize}px 'Fira Code'`;
ctx.textAlign = "center";
ctx.textBaseline = "middle";

const drawChar = ({ char, color, position }) => {
  ctx.fillStyle = color;
  ctx.fillText(
    char,
    position.x * cellWidth + cellWidth / 2,
    position.y * cellHeight + cellHeight / 2
  );
};

const drawBackground = ({ color, position }) => {
  if (color === "transparent") return;

  ctx.fillStyle = color;
  ctx.fillRect(
    position.x * cellWidth,
    position.y * cellHeight,
    cellWidth,
    cellHeight
  );
};

export const drawCell = (entity, options = {}) => {
  const char = options.char || entity.appearance.char;
  const background = options.background || entity.appearance.background;
  const color = options.color || entity.appearance.color;
  const position = entity.position;

  drawBackground({ color: background, position });
  drawChar({ char, color, position });
};

export const clearCanvas = () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height);

export const pxToCell = (ev) => {
  const bounds = canvas.getBoundingClientRect();
  const relativeX = ev.clientX - bounds.left;
  const relativeY = ev.clientY - bounds.top;
  const colPos = Math.trunc((relativeX / cellWidth) * pixelRatio);
  const rowPos = Math.trunc((relativeY / cellHeight) * pixelRatio);

  return [colPos, rowPos];
};
