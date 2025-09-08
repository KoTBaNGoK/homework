// 1 задание
function sayHello(name) {
    return `Hello "${name}"`;
}
console.log(sayHello("Alice"))

// 2 задание
const numbers = [5, 12, 8, 15, 3, 20];
function printNumbersGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}
printNumbersGreaterThanTen(numbers);

// 3 задание
function calculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return 'Ошибка: деление на ноль';
            }
            return num1 / num2;
        default:
            return 'Неверный оператор';
    }
}
let resultPlus = calculator(2, 3, 'plus');
console.log('Сложение:', resultPlus);
let resultMinus = calculator(2, 3, 'minus');
console.log('Вычитание:', resultMinus);
let resultMultiply = calculator(2, 3, 'multiply');
console.log('Умножение:', resultMultiply);
let resultDivide = calculator(6, 3, 'divide');
console.log('Деление:', resultDivide);