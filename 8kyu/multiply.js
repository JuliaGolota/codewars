// 📌DESCRIPTIONS
// This code does not execute properly. Try to figure out why.


// 👩‍💻🧐TESTS
// assert.strictEqual(multiply(1,1), 1);
//     assert.strictEqual(multiply(2,1), 2);
//     assert.strictEqual(multiply(2,2), 4);
//     assert.strictEqual(multiply(3,5), 15); 
//     assert.strictEqual(multiply(5,0), 0);
//     assert.strictEqual(multiply(0,5), 0);
//     assert.strictEqual(multiply(0,0), 0); 

// ✅SOLUTION
function multiply(a, b){
    let result = a * b;
    return result;
}

console.log(multiply(2, 1));
console.log(multiply(2, 2));
console.log(multiply(3, 5));
console.log(multiply(5, 0));
console.log(multiply(0, 5));
console.log(multiply(0, 0));

