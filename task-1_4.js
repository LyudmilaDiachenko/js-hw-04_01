// Функції
// 1. Напишіть функцію, яка приймає 2 числа та повертає менше з них.
// function create(x, y){
//     return Math.min(x, y);
// }
// console.log(create(10, -30))

// 2. Напишіть функцію, яка зводить передане число у вказани ступінь.
// function create(x, y){
//     return Math.pow(x, y);
// }
// console.log(create(2, 3))

// 3. Напишіть функцію, яка приймає 2 числа та знак (+ - * /), 
// підраховує приклад і повертає результат

// function create(x, y, comand){
//     switch(comand){
//         case '+': return x + y;
//         case '-': return x - y;
//         case '*': return x * y;
//         case '/': return x / y;
//     }
// }
// console.log(create(2, 3, '+'))
// console.log(create(2, 3, '-'))
// console.log(create(2, 3, '*'))
// console.log(create(2, 3, '/'))

// // 4. Напишіть функцію, яка перевіряє, чи є передане число простим.
// function isSimple(num){
//     for(let i = 2; i < num; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isSimple(7))
// console.log(isSimple(9))
// console.log(isSimple(11))
// console.log(isSimple(15))

// 5. Напишіть функцію, яка приймає число і виводить таблицю множення для цього числа.
// Викличте функцію для всіх чисел від 2 до 9.
// function create(num){
//     let result = {}
//     for(let i = 1; i <= 9; i++){
//         result[i] = num * i
//     }
//     return result    
// }
// for(let i = 2; i <= 9; i++){
//     console.table(create(i));
// }

// 6. Напишіть функцію, яка реалізує роботу оператора %. 
// Функція приймає 2 параметри та повертає залишок від ділення першого параметра на другий.
// У функції використовуйте тільки + - * /, а оператор % не використовувати.
// function ostacha(a, b){
//     let maxCrate = 0
//     for(i = b; i <= a; i+=b) {
//         maxCrate = i
//     }
//     return a - maxCrate
// }
// console.log(ostacha(15, 7)) //1
// console.log(ostacha(15, 5)) //0
// console.log(ostacha(15, 13)) //2
// console.log(ostacha(15, 16)) //15

// 7. Напишіть функцію, яка приймає від 1 до 5 чисел і повертає їх суму.
// function numMax(){
//     return [...arguments].reduce((a,b)=>a+b)
// }
// console.log(numMax(10, 20, 30, 40, 50))

// 8. Напишіть функцію, яка приймає від 1 до 5 чисел і повертає більше з них.
// function numMax(){
//     rezult = Math.max(...arguments)
//     return rezult
// }
// console.log(numMax(10, 20, 4, 5, 2))

// 9. Напишіть функцію, яка виводить усі парні або непарні числа у вказаному користувачем
// діапазоні. Які числа виводити, визначається третім параметром типу bool (true – парні,
// false – непарні).


// 10. Напишітьфункцію,якаприймає дату(день,місяць,рік)і повертає дату наступного дня у
// вигляді рядка «день.місяць. рік». Перевірку на високосний рік бажано написати окремою
// функцією.