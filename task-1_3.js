
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
const number1 = Number(prompt("Введіть перше число"))
const number2 = Number(prompt("Введіть друге число"))

let i = 2
while (i < Math.min(number1, number2)) {
    if(number1 % i === 0 && number2 % i === 0){
        console.log(i)
    }
    i++
}

// Завдання
// Запросіть у користувача дані за допомогою prompt() і виведіть результат за допомогою
// alert().
// 1. Запросіть у користувача число, зведіть це число в 2 ступінь та виведіть на екран.
// 2. Запросіть у користувача 2 числа та виведіть середнє арифме- тичне цих чисел.
// 3. Запросіть у користувача довжину сторони квадрата та виведіть ого площу.
// 4. Реалізу те конвертор із кілометрів у милі (користувач вводить кілометри, програма
// виводить милі).
// 1 км = 0,621371 миль.
// Вкажіть це значення у коді як константу.
// 5. Реалізу те калькулятор. Користувач вводить два числа, а програма виводить результати
// ді + – * / цих чисел.
// 6. Користувач вводить значення a і b для формули a * x + b = 0, а програма підраховує і
// виводить значення x.
// 7. Запросіть у користувача поточни час (години та хвилини) і виведіть, скільки годин та
// хвилин залишилося до наступ- ного дня.
// 1
// Практичне завдання 1
// 8. Запросіть у користувача тризначне число та виведіть дру- гу цифру цього числа. Для
// вирішення завдання використо- ву те оператор % (залишок від ділення).
// 9. Запросіть у користувача п’ятизначне число та перемістіть останню цифру на початок (із
// числа 12345 має ви ти чис- ло 51234).
// 10. Зарплата працівника становить $250 + 10% від продажу. Запросіть загальну суму
// продажу за місяць і підраху те зарплату.5. Підраху те факторіал числа, введеного користувачем.
// ■ Завдання, у яких необхідно використати DO WHILE.
// 1. Запропону те користувачеві розв’язати приклад 2 + 2 * 2,
// доки він не надасть правильну відповідь.
// 2. Діліть число 1000 на 2, доки не отримаєте число менше, ніж 50. Виведіть отримане число
// і скільки зробили поділів.
// ■ Завдання, в яких потрібно використати FOR.
// 1. Виведіть усі числа від 1 до 100, які кратні числу зазначено-
// му користувачем.
// 1
// Практичне завдання 3
// 2. Виведіть кожен 4-и елемент із зазначеного користувачем діапазону. Користувач вказує
// мінімальне та максимальне значення діапазону.
// 3. Запросіть число і перевірте, чи просте воно. Просте число ділиться без залишку тільки
// на себе і на 1.
