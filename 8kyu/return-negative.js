// 📌DESCRIPTIONS
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// 👩‍💻🧐TESTS
// Test.assertEquals(makeNegative(42), -42)


// ✅SOLUTION
// 1 variant
// function makeNegative(num) {
//     if(num > 0){
//         return -num;
//     }else{
//         return num;
//     }    
//   }

//   2 variant
  function makeNegative(num) {
    return num > 0 ? -num : num;
  }
  
  console.log(makeNegative(42));
  console.log(makeNegative(-42));