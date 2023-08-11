// Завдання
// Запросіть у користувача дані за допомогою prompt() і виве- діть результат за допомогою
// alert().

// 1. Запросіть у користувача число, зведіть це число в 2 ступінь та виведіть на екран.
// const numberPow = prompt('Введіть число для підняття в 2 степінь')
// alert(Math.pow(numberPow, 2))

// 2. Запросіть у користувача 2 числа та виведіть середнє арифме- тичне цих чисел.
// const numberFirst = Number(prompt('Введіть перше число для середнього арифметичне'))
// const numberSecond = Number(prompt('Введіть друге число для середнього арифметичне'))
// let sum = numberFirst + numberSecond
// alert(sum / 2)

// 3. Запросіть у користувача довжину сторони квадрата та виведіть ого площу.
// const numberSque = Number(prompt('Введіть довжину сторони квадрата'))
// alert(Math.pow(numberSque, 2))

// 4. Реалізуйте конвертор із кілометрів у милі (користувач вводить кілометри, програма
// виводить милі). 1 км = 0,621371 миль. Вкажіть це значення у коді як константу.
// const km = prompt('Введіть відстань')
// const mile = (km * 0.621371)
// alert(mile)

// 5. Реалізуйте калькулятор. Користувач вводить два числа, а програма виводить результати
// дій + – * / цих чисел.
// const numberFirst = Number(prompt('Введіть перше число'))
// const numberSecond = Number(prompt('Введіть друге число'))
// let sum = numberFirst + numberSecond
// let difference = numberFirst - numberSecond
// let product = numberFirst * numberSecond
// let fraction = numberFirst / numberSecond
// alert(`Сума: ${sum}, різниця: ${difference}, добуток: ${product}, частка: ${fraction}`)

// 6. Користувач вводить значення a і b для формули a * x + b = 0, а програма підраховує і
// виводить значення x.
// const a = Number(prompt('Введіть перше число'))
// const b = Number(prompt('Введіть друге число'))
// let x = -b / a
// alert(x)

// 7. Запросіть у користувача поточни час (години та хвилини) і виведіть, скільки годин та
// хвилин залишилося до наступного дня.
// const hour = Number(prompt('Введіть години'))
// const minute = Number(prompt('Введіть хвилини'))
// const minutesPerDay = 24 * 60
// const inputMinute = hour * 60 + minute
// const minutesLeft = minutesPerDay - inputMinute
// const hoursLeft = Math.floor(minutesLeft / 60)
// console.log(hoursLeft, minutesLeft - hoursLeft * 60)


// 8. Запросіть у користувача тризначне число та виведіть другу цифру цього числа. 
// Для вирішення завдання використовуйте оператор % (залишок від ділення).
// const num = Number(prompt('Введіть тризначне число'))
// let result = Math.floor((num % 100) / 10)
// alert(result)

// 9. Запросіть у користувача п’ятизначне число та перемістіть останню цифру на початок 
// (із числа 12345 має ви ти число 51234).
// const num = prompt('Введіть 5-не число')
// let arr = num.split('')
// let x = arr.pop()
// arr.unshift(x)
// alert(arr.join(''))
// alert(num.slice(-1) + num.slice(0, 4))
// alert(num.replace(/(.*)(\d)/, '$2$1'))

// 10. Зарплата працівника становить $250 + 10% від продажу. 
// Запросіть загальну суму продажу за місяць і підрахуйте зарплату.
const sale = prompt('Введіть загальну суму продажу за місяць')
alert(`$${sale * 0.1 + 250}`)


