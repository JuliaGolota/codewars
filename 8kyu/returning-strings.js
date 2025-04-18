// 📌DESCRIPTIONS
// Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

// 👩‍💻🧐TESTS
// assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
// assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");

// ✅SOLUTION
function greet(name){    
    // 1 variant
  // return "Hello, " + name + " how are you doing today?";

  // 2 variant
    return `Hello, ${name} how are you doing today?`;
  }
  console.log(greet("Shingles"));
  