# binary-search-range
[![NPM](https://nodei.co/npm/binary-search-range.png)](https://nodei.co/npm/binary-search-range/)

Built on [binary-search](https://github.com/darkskyapp/binary-search).  Returns all indexes of items that match the comparator.

<!--js
const binarySearchRange = require('./')
-->
```js
const haystack = [ 1, 3, 5, 6, 6, 6, 9, 11, 14 ]
const needle = 6
const comparator = (a, b) => a - b
binarySearchRange(haystack, needle, comparator) // => [ 3, 4, 5 ]
```

## `binarySearchRange(haystack, needle, comparator, lowIndex, highIndex)`

`comparator` should be a function that returns 0 for matches, just like your sort function.

# License

[WTFPL](http://wtfpl2.com)
