const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
function updateButton()
{
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}
function skipping()
{
  video.currentTime += parseFloat(this.dataset.skip);
}
function rangeChange()
{
  video[this.name] = this.value;
}
function handleProgress()
{
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`
}
function scrub(e)
{
  console.log(e);
  //const percentage = e.offsetX / progscreenY;
  console.log(e.offsetX);
  console.log(progress.clientWidth);
  const percentage = (e.offsetX/progress.clientWidth) * video.duration;
  video.currentTime = percentage;
}
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(skip => skip.addEventListener("click", skipping));

let mouseDown = false;
ranges.forEach(range => range.addEventListener("change", rangeChange));
ranges.forEach(range => range.addEventListener("mousemove", rangeChange));
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => mouseDown = false)



