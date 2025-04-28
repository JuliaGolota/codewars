// 📌DESCRIPTIONS
// Given an array of integers your solution should find the smallest integer.


//  👩‍💻🧐TESTS
// assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
//     assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
//     assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);


// ✅SOLUTION
function findSmallestInt(arr) {
    let smallestInt = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < smallestInt){
            smallestInt = arr[i];
        }        
    }
    return smallestInt;
  }

  console.log(findSmallestInt([78,56,232,12,8]));
  console.log(findSmallestInt([78,56,232,12,18]));
  console.log(findSmallestInt([78,56,232,412,228]));
  console.log(findSmallestInt([78,56,232,12,0]));
  console.log(findSmallestInt([1,56,232,12,8]));
