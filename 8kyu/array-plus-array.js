// 📌DESCRIPTIONS
// 'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


//  👩‍💻🧐TESTS
// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//     assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//     assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//     assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);


// ✅SOLUTION
function arrayPlusArray(arr1, arr2) {
  let sumArr1 = 0;
  let sumArr2 = 0;
  for (let i = 0; i < arr1.length; i++) { 
    sumArr1 += arr1[i];     
  }  
  for (let j = 0; j < arr2.length; j++) {
    sumArr2 += arr2[j]; 
  }
    return sumArr1 + sumArr2; //something went wrong
  }

  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
  console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
  console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
  console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
  
   