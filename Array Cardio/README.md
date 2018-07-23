# Arrray Cardio - Sorting
Day 3 of the 30-Day Vanilla-JS Challenge!

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
### Can utilize mutltiple sort functions at once
```javascript
const namesDE = names
                   .map(name => name.text)
                  .filter(streetname => streetname.includes('de'));
```
### Sum instnaces of array value
```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 
              'walk', 'car', 'van', 'car', 'truck', 'skateboard'];

const transportation = data.reduce((obj, item) =>
{
  if(!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {});
```
