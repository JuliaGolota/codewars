// 📌DESCRIPTIONS
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


// 👩‍💻🧐TESTS
// assert.strictEqual(boolToWord(true), 'Yes')
// assert.strictEqual(boolToWord(false), 'No')


// ✅SOLUTION
// 1 variant
// function boolToWord(bool){
//     if(bool === true){
//         return "Yes";
//     }else{
//         return "No";
//     }
//   }

//   2 variant
// function boolToWord(bool){
//     return bool === true? "Yes" : "No";
//   }

//   3 variant
function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }

  console.log(boolToWord(true));
  console.log(boolToWord(false));

