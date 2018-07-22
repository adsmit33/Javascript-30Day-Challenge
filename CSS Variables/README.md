
# CSS Variables with Javascript
Day 3 of the 30-Day Vanilla-JS Challenge!

## Important takeaways
### CSS Variables (custom properties) can be declared globally with :root, and must begin with two dashes (--). Variables are case sensitive!
```css
:root
{
  --blur: 0px;
  --spacing: 10px;
  --color-pick: yellow;
}
```
### The var() function can be used to insert the value of a custom property.
```css
img
{
  padding: var(--spacing);
  background-color:var(--color-pick);
  filter:blur(var(--blur));
}
```
### Document element is used to udpate custom style properties
```javascript
document.documentElement.style.setProperty("--foo", blur.value+"px");
```
### Select all inputs within a div
```javascript
var inputs = document.querySelectorAll(".controls input");
 ```
 ### Add event listeners to all selected inputs, using forEach
 ```javascript
 inputs.forEach(input => input.addEventListener("change", changeVariable));
 ```
### Obtain a dataset value
```html
<input data-sizing="px">
```
```javascript
this.dataset.sizing//retruns px string
```
