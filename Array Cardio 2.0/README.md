# Arrray Cardio - Sorting
Day 7 of the 30-Day Vanilla-JS Challenge!

## Important Functions Learned
### Array.prototype.some()
##### The some() method checks if *any* of the elements in an array pass a test (provided as a function).
```javascript
people.some( person => new Date().getFullYear() - person.year >= 19 );
```
### Array.prototype.every()
##### The every() method checks if *all* elements in an array pass a test (provided as a function).
```javascript
people.every(person => new Date().getFullYear() - person.year >= 19);
```
### Array.prototype.find()
##### The find() method returns the value of the *first* element in an array that pass a test (provided as a function).
```javascript
comments.find(comment => comment.id == 823423);
```
### Array.prototype.findIndex()
##### The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
```javascript
omments.findIndex(comment => comment.id == id);
```
### Array.prototype.splice()
##### The splice() method removes items from an array.
```javascript
comments.splice(findIndex(542328), 1);
```
