/** product: calculate the product of an array of numbers. */

// function sum(arr){
//   //base case if the arr is empty
//   if(!arr.length) return 0;
//   //recursive case calling getting arr[0] + sum(rest of the arr)
//   return arr[0] + sum(arr.slice(1))
// }

function product(nums) {
  //base case is arr is empty
  if (!nums.length) return 1;
  //recursive case calling first val * product(rest of arr)
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestWord = '') {
  //base case when the arr is empty, return
  if (words.length === 0) return longestWord.length;
  //recursive case
  for (let word of words) {
    if (word.length > longestWord.length) {
      // count++;
      longestWord = word;
    }
    longest(words.slice(1), longestWord);
  }
  return longestWord.length;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

  //base case
  if (str === "") return "";

  //recursive case
  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {

  // base case
  if (arr.length === 0) return false;

  // recursive case
  if (arr[0] === val) {
    return true;
  } else {
    return find(arr.slice(1), val);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  console.log(str);

  // base case
  if (str.length < 2) return true;

  // recursive case
  if (str[0] === str[str.length-1]) {
    return isPalindrome(str.slice(1, -1))
  } else {
    return false
  }

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  console.log(str);

  // base case
  if (str.length === 0) return "";

  // recursive case
  console.log("***", str[0])
  return revString(str.slice(1)) + str[0]

  // grab reversed chars here below rec. call

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
