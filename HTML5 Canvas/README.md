# HTML5 - Canvas Brush
Day 8 of the 30-Day Vanilla-JS Challenge!

## Important Functions Learned
### canvas.getContext()
##### The getContext() method returns an object that provides methods and properties for drawing on the canvas.
```javascript
canvas.getContext("2d");
```
### window.innerWidth() & window.outerWidth()
##### Obtain the width and height of your window.
```javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```
### strokeStyle()
##### Sets or returns the color, gradient, or pattern used for strokes.
```javascript
context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
```
### lineJoin()
##### Sets or returns the type of corner created, when two lines meet.
```javascript
context.lineJoin = "round";
```
### lineCap()
##### Sets or returns the style of the end caps for a line.
```javascript
context.lineCap = "round";
```
### lineWidth()
##### Sets or returns the current line width.
```javascript
context.lineWidth = 10;
```
### beginPath()
##### Begins a path, or resets the current path.
```javascript
context.beginPath();
```
### moveTo()
##### Moves the path to the specified point in the canvas, without creating a line.
```javascript
context.moveTo(lastX, lastY);
```
### lineTo()
##### Adds a new point and creates a line to that point from the last specified point in the canvas
```javascript
context.lineTo(e.offsetX, e.offsetY);
```
### stroke()
##### Actually draws the path you have defined
```javascript
context.stroke();
```
