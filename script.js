'use strict';

//JavaScript Task 1
const iconTapped = function (arrA, arrB, positionX, positionY) {
  const radiusLimit = 20;
  let tapRange = positionX + positionY;
  let iconRange;

  for (let i = 0; i < arrA.length; i++) {
    iconRange = arrA[i] + arrB[i];
    if (
      tapRange === iconRange ||
      (tapRange <= iconRange + radiusLimit &&
        tapRange >= iconRange - radiusLimit)
    ) {
      return i;
    }
  }

  return -1;
};

const arrA = [100, 200, 100];
const arrB = [50, 100, 100];

// testing for icon 0 success
console.log(iconTapped(arrA, arrB, 100, 50));
console.log(iconTapped(arrA, arrB, 80, 50));
console.log(iconTapped(arrA, arrB, 100, 70));

// testing for icon 1 success
console.log(iconTapped(arrA, arrB, 200, 100));
console.log(iconTapped(arrA, arrB, 180, 100));
console.log(iconTapped(arrA, arrB, 220, 100));

// testing for icon 2 success
console.log(iconTapped(arrA, arrB, 100, 100));
console.log(iconTapped(arrA, arrB, 90, 90));
console.log(iconTapped(arrA, arrB, 90, 100));

// testing for out of tapRange to return -1 in case of failing to tap on an icon

console.log(iconTapped(arrA, arrB, 220, 120));
console.log(iconTapped(arrA, arrB, 70, 50));

// JavaScript Task 2
const printAscii = function (N) {
  if (N <= 0 || N > 100) {
    console.log('Please Enter a number between 1 an 100');
    return;
  }
  let verticalL = '';
  let horizontalL = '';
  let finalResault = '';
  for (let i = 0; i < N - 1; i++) {
    verticalL += `L\n`;
  }
  for (let i = 0; i < N; i++) {
    horizontalL += `L`;
  }
  finalResault = `${verticalL}${horizontalL}`;
  console.log(finalResault);
};

//testing

// Parameter that is not in range

printAscii(0);
printAscii(101);

// Parameter that is in range
printAscii(4);
printAscii(10);
