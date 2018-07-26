# Flex Gallery
Day 5 of the 30-Day Vanilla-JS Challenge!

## Important takeaways
### classList.toggle() can be used to toggle a CSS class on or off
```javascript
this.classList.toggle("open-active");
```
### Transitionend event occurs when a CSS transition has completed. 
```javascript
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
```
### Determine which transition event completed, and perform an action
```javascript
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
```
### translateY() defines a 2D translation, moving the element along the Y-axis. 
```css
.panel > *:first-child { transform: translateY(-100%); }
.panel > *:last-child { transform: translateY(100%); }
```
