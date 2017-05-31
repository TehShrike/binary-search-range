const tape = require('tape')
const find = require('./')

const integerComparator = (a, b) => a - b
const test = (description, fn) => tape(description, t => (fn(t), t.end()))

test(`Find one`, t => {
	const actual = find([ 1, 3, 5, 7, 8, 10 ], 7, integerComparator)
	t.deepEqual(actual, [ 3 ])
})

test(`Find some`, t => {
	const actual = find([ 1, 3, 5, 7, 8, 8, 8, 8, 10 ], 8, integerComparator)
	t.deepEqual(actual, [ 4, 5, 6, 7 ])
})

test(`Find none`, t => {
	const actual = find([ 1, 3, 5, 7, 8, 10 ], 6, integerComparator)
	t.deepEqual(actual, [])
})

test(`Low/high are respected`, t => {
	const haystack = [ 1, 7, 7, 7, 8, 10 ]
	const lastCouple = find(haystack, 7, integerComparator, 2, haystack.length - 1)
	t.deepEqual(lastCouple, [ 2, 3 ])

	const firstCouple = find(haystack, 7, integerComparator, 0, 2)
	t.deepEqual(firstCouple, [ 1, 2 ])
})
