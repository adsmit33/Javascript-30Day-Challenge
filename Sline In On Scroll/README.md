# Slide in images on scroll
Day 13 of the 30-Day Vanilla-JS Challenge!

## Important takeaways
### Obtain location of half way through an image
```javascript
const slideIn = (window.scrollY + window.innerHeight) - image.height / 2;
```
### Determine when the bottom of image is at the top of the screen
```javascript
const imageBottom = image.offsetTop + image.height;
```
### Dermine if an image is halfway visable on screen
```javascript
const isHalfShown = slideIn > image.offsetTop;
```
### Determine if an image is still on the screen
```javascript
const isNotScrolledPast = window.scrollY < imageBottom;
```

## Reusable Function
### Debounce function is essential to ensuring a given task doesn't fire so often that it bricks browser performance
```javascript
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```
