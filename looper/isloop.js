"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let pointerOne = linkedlist.head;
  let pointerTwo = linkedlist.head.next;

  while (pointerTwo) {
    if (pointerOne === pointerTwo) {
      return true;
    }
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next.next;
  }
  return false;
  // let checkedList = [];
  // let current = linkedlist.head;
  // checkedList.push(current);
  // while (current.next) {
  //   if (!checkedList.includes(current.next)) {
  //     current = current.next;
  //     checkedList.push(current);
  //   } else {
  //     return true;
  //   }
  // }
  // return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
