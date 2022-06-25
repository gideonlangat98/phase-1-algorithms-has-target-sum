function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i = 0; i < array.length; i ++ ) {

    //loop through the rest of the array
    const num1 = target - array[i];

    //Checking total if it matches
    for(let l = i + 1; l < array.length; l ++ ) {

      //Checking the total if it matches
      if(array[l] === num1) {
        return true;
      }
    }
  }
  return false;
}

console.log (hasTargetSum([3, 8, 12, 4, 11, 7], 10));
console.log (hasTargetSum([22, 19, 4, 6, 30], 25));
console.log (hasTargetSum([-7, 10, 4, 8], 3));

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
