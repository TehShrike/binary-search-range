const binarySearch = require('binary-search')

module.exports = function binarySearchRange(haystack, needle, comparator, low = 0, high = haystack.length - 1) {
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
	const matches = index => comparator(haystack[index], needle) === 0
	const inRange = index => index >= low && index <= high

	let current = index
	const results = []

	while (inRange(current) && matches(current)) {
		if (direction < 0) {
			results.unshift(current)
			current--
		} else {
			results.push(current)
			current++
		}
	}

	return results
}
