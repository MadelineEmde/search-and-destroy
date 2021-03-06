"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  let midpointIndex = Math.floor(array.length / 2);
  let midpointVal = array[midpointIndex];
  if (target === midpointVal) {
    return true;
  } else if (target < midpointVal && array.length > 1) {
    return binarySearch(array.slice(0, midpointIndex), target);
  } else if (target > midpointVal && array.length > 1) {
    return binarySearch(array.slice(midpointIndex), target);
  } else {
    return false;
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
