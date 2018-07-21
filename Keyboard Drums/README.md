# Keyboard Drums
Day 1 of the 30-day Vanilla-JS Challenge

## What I Learned
### The data-* attributes is used to store custom data private to the page or application.
```html
<div class="key" data-key="76">
```
### Data attributes can be selected through the use of a querySelector
```javascript
document.querySelector(`div[data-key="76"]`);
```
### Adding a class, or removing a class, is accomplished with classList
```javascript
key.classList.add("playing");//add class
```

```javascript
key.classList.remove("playing");//remove class
```
### Audio files can be started, stopped, or restarted.
```javascript
audio.play();//play audio
```

```javascript
audio.currentTime =0;//restart audio
```
