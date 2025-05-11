// 📌DESCRIPTIONS
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.


//  👩‍💻🧐TESTS
assert.deepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 });
    assert.deepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 });

    assert.deepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 });
    assert.deepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 });

    assert.deepEqual(combine({}, {}, {}), {});
    assert.deepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 });


// ✅SOLUTION

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

function combine(...objects) {
    // Your code here
    const newObj = {};
    for(const obj of objects){
        for (const key in obj){
            if(newObj.hasOwnProperty(key)){
                newObj[key] += obj[key];
            }else{
                newObj[key] = obj[key];
            }        
        }
    } 
    return newObj   
}

console.log(combine(objA, objB));

