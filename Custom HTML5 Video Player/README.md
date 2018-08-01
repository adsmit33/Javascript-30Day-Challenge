# Custom HTML5 Video Player
Day 11 of the 30-Day Vanilla-JS Challenge!

## Important takeaways
### Toggle to play video 
```javascript
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
```
### Update play / pause button
```javascript
function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}
```
### Skip to differnt video time, using skip buttons
```javascript
function skipping(){
  video.currentTime += parseFloat(this.dataset.skip);
}
```
### Update video's progress bar
```javascript
function handleProgress(){
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`
}
```
### Change video's progress, by clicking / moving progress bar
```javascript
function scrub(e) {
  const percentage = (e.offsetX / progress.clientWidth) * video.duration;
  video.currentTime = percentage;
}
```
