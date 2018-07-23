# CSS Clock
Day 2 of the 30-Day Vanilla-JS Challenge!

## Important Functions Learned
### Array.prototype.filter()
##### The filter() method creates an array filled with all array elements that pass a test (provided as a function).
```javascript
var fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
```
### Array.prototype.map()
##### The map() method creates a new array with the results of calling a function for every array element.
```javascript
var inventorsName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```
### Array.prototype.sort()
##### The sort() method sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
```javascript
var sortedBirthday2 = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
```
### Array.prototype.reduce()
##### The reduce() method reduces the array to a single value.
```javascript
var totalyear = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
},0);
```
