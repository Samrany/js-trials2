"use strict";


// 1. printIndices
function printIndices(items) {
	for (const idx in items) {
		console.log(items[idx], idx)

	}
  // Replace this with your code
}


// 2. everyOtherItem
function everyOtherItem(items) {

  const result = [];

  for (const idx in items) {
  	if (idx % 2 === 0) {
  		result.push(items[idx])
  	}
  }
  return result;
}


// 3. smallestNItems
function smallestNItems(items, n) {
	const output = [];
	items.sort((a, b) => a - b);

	for (const idx in items) {
		if (idx < n) {
			output.push(items[idx])
		}
	}
	return output.reverse()
}
