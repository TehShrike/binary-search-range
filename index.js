const binarySearch = require('binary-search')

module.exports = function binarySearchRange(haystack, needle, comparator, low, high) {
	const foundIndex = binarySearch(haystack, needle, comparator, low, high)

	if (foundIndex < 0) {
		return []
	}

	const findInDirection = direction => findMore({
		index: foundIndex + direction,
		direction,
		haystack,
		needle,
		comparator,
		low,
		high
	})

	return [
		...findInDirection(-1),
		foundIndex,
		...findInDirection(+1)
	]
}

function findMore({ index, direction, haystack, needle, comparator, low, high }) {
	const matches = () => comparator(needle, haystack[index]) === 0

	if (outOfRange({ index, haystack, low, high }) || !matches()) {
		return []
	}

	const otherIndexes = findMore({
		index: index + direction,
		direction,
		haystack,
		needle,
		comparator,
		low,
		high,
	})

	return direction < 0 ? [ ...otherIndexes, index ] : [ index, ...otherIndexes ]
}

function outOfRange({ index, haystack, low, high }) {
	return index < 0 || index < low || index > high || index >= haystack.length
}
