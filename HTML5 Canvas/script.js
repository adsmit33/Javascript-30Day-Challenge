const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let grow = true;

function draw(e) {
  if (!isDrawing) return;
  //reset the hue if above max
  if (hue >= 360) hue = 0;
  //Decrease line width once it hits 75, increase line width once it hits 1
  if (context.lineWidth >= 75 || context.lineWidth <= 1) grow = !grow;
  context.beginPath();
  //set the stroke style to the hue
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  //grow line or shrink line
  if (grow) context.lineWidth++;
  else context.lineWidth--;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
