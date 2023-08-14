
// Цикли

// Завдання
// Для виведення даних використовуйте alert() або document. write(). Для введення даних
// використовуйте prompt() та confirm().

// ■ Завдання, в яких необхідно використати WHILE.
// 1. Виведіть # стільки разів, скільки вказав користувач.
// const count = Number(prompt("Введіть число"))
// let i = 0
// while (i < count) {
//     i++
//     console.log("#")
// }

// 2. Користувач ввів число, а на екран було виведено всі числа: від введеного до 0.
// const inputNumber = Number(prompt("Введіть число"))
// let i = inputNumber
// while (i >= 0) {
//     console.log(i)
//     i--
// }

// 3. Запросіть число та ступінь. Зведіть число у вказани ступінь та виведіть результат.
// const number = Number(prompt("Введіть число"))
// const pow = Number(prompt("Введіть степінь"))
// let result = 1
// let i = 0
// while (i < pow){
//     i++
//     result *= number
// }
// console.log(result)

// 4. Запросіть 2 числа і знайдіть всі спільні дільники.
// const number1 = Number(prompt("Введіть перше число"))
// const number2 = Number(prompt("Введіть друге число"))

// let i = 2
// while (i < Math.min(number1, number2)) {
//     if(number1 % i === 0 && number2 % i === 0){
//         console.log(i)
//     }
//     i++
// }

// 5. Підрахуйте факторіал числа, введеного користувачем.
// const number = Number(prompt("Введіть число для факторіала"))
// let result = 1
// let i = 1
// while (i < number){
//     i++    
//    result *= (i)   
// }
// alert(result)

// ■ Завдання, у яких необхідно використати DO WHILE.
// 1. Запропонуйте користувачеві розв’язати приклад 2 + 2 * 2,
// доки він не надасть правильну відповідь.
// let asked
// let example = '6'
// do {
//     asked = prompt("Розв'яжіть приклад 2 + 2 * 2")
// } while(asked !== example)
    
// 2. Діліть число 1000 на 2, доки не отримаєте число менше, ніж 50. 
// Виведіть отримане число і скільки зробили поділів.
// let i = 1000
// let cnt = 0
// do {
//     i /= 2
//     cnt++
// } while (i > 50)
// console.log(`Отримане число: ${i}, зробили поділів - ${cnt}`)

// ■ Завдання, в яких потрібно використати FOR.
// 1. Виведіть усі числа від 1 до 100, які кратні числу зазначеному користувачем.
// const num = prompt("Введіть число")
// for(let i = 1; i <= 100; i++){
//     if(i % num === 0){        
//         console.log(i)
//     }
// }

// 2. Виведіть кожен 4-ий елемент із зазначеного користувачем діапазону. 
// Користувач вказує мінімальне та максимальне значення діапазону.
// const numMin = Number(prompt("Введіть min число"))
// const numMax = Number(prompt("Введіть max число"))
// for(let i = numMin + 3; i <= numMax; i+=4) {
//     console.log(i)
// }

// 3. Запросіть число і перевірте, чи просте воно. Просте число ділиться без залишку 
// тільки на себе і на 1.
const num = Number(prompt("Введіть число для перевірки чи просте воно"))
let isSimple = true
for(let i = 2; i < num; i++){
    if(num % i === 0){
        isSimple = false
        // console.log(i)
    }
}
console.log(isSimple?"Просте": "Непросте")