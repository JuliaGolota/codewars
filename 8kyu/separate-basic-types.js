// 📌DESCRIPTIONS
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }


//  👩‍💻🧐TESTS
// assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
// assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});


// ✅SOLUTION
function separateTypes(input) {
    const result = {};  // Создаём пустой объект, в который будем собирать значения по типам
    for (let i = 0; i < input.length; i++) {
        const value = input[i];   // Берём текущий элемент
        const type = typeof value;   // Определяем его тип: 'string', 'number', 'boolean'

        if (!result[type]) {   // Если в объекте ещё нет массива для этого типа — создаём его
            result[type] = [];
        }
            result[type].push(value);  // Добавляем текущее значение в массив соответствующего типа         
    }
    return result;

}
console.log(separateTypes(['a', 1, 2, false, 'b']));
console.log(separateTypes(['a', 1, 2 ]));

