// ■ Завдання, в якому необхідно використати IF.
// 1. Запросіть у користувача число та визначіть чи воно додатне, від’ємне або нуль.
// const number = Number(prompt("Введіть число додатнє, або від'ємне, або 0"))
// alert(number > 0 ? "Ви ввели додатнє число" : number < 0 ? "Ви ввели від'ємне число" : "Ви ввели 0")

// 2. Запросіть у користувача ого вік та перевірте коректність введених даних (0–120 років).
// const age = Number(prompt("Введіть вік"))
// console.lo(age > 0 && age <= 120)

// 3. Запросіть у користувача час (години, хвилини, секунди) та перевірте коректність
// введених даних.
// const hour = Number(prompt("Введіть години"))
// const minute = Number(prompt("Введіть хвилини"))
// const second = Number(prompt("Введіть секунди"))
// console.log(hour >=0 && hour < 24 && minute >=0 && minute < 60 && second >=0 && second < 60)

// 4. Запросіть координати точки (x, y) та визначіть номер чверті, в яку потрапила ця точка.
// Необхідно врахувати випадки потрапляння точки на осі X або Y або на початок координат
// const x = Number(prompt("Введіть точку x"))
// const y = Number(prompt("Введіть точку y"))
// if(x > 0 && y > 0){
//     alert('I чверть')
// }
// if(x < 0 && y > 0){
//     alert('II чверть') 
// }
// if(x < 0 && y < 0){
//     alert('III чверть') 
// }
// if(x > 0 && y < 0){
//     alert('IV чверть')
// }

// ■ Завдання, в якому необхідно використати SWITCH.
// 1. Запросіть у користувача номер місяця та виведіть на екран ого назву.
// const mounth = prompt("Введіть номер місяця")
// switch (mounth) {
//     case '1':
//         alert('Січень')
//     break
//     case '2':
//         alert('Лютий')
//     break
//     case '3':
//         alert('Березень')
//     break
//     case '4':
//         alert('Квітень')
//     break
//     case '5':
//         alert('Травень')
//     break
//     case '6':
//         alert('Червень')
//     break
//     case '7':
//         alert('Липень')
//     break
//     case '8':
//         alert('Серпень')
//     break
//     case '9':
//         alert('Вересень')
//     break
//     case '10':
//         alert('Жовтень')
//     break
//     case '11':
//         alert('Листопад')
//     break
//     case '12':
//         alert('Грудень')
//     break
//     default:
//     alert('Введіть коректні дані')
// }

// 2. Реалізуйте калькулятор. Користувач вводить 2 числа та знак (+ - */). Залежно від
// введеного знака розв’яжіть приклад та виведіть результат.
// const firstNum = Number(prompt("Введіть перше число"))
// const secondNum = Number(prompt("Введіть друге число"))
// const sign = prompt("Введіть знак: + - */")
// if(sign === '+'){
//     let addition = firstNum + secondNum
//     alert(`${firstNum} + ${secondNum} = ${addition}`)
// }
// if(sign === '-'){
//     let subtraction = firstNum - secondNum
//     alert(`${firstNum} - ${secondNum} = ${subtraction}`)
// }
// if(sign === '*'){
//     let multiplication = firstNum * secondNum
//     alert(`${firstNum} * ${secondNum} = ${ multiplication}`)
// }
// if(sign === '/'){
//     let division = firstNum / secondNum
//     alert(`${firstNum} / ${secondNum} = ${division}`)
// }

// ■ Завдання, в якому необхідно використати тернарни оператор.
// 1. Запросіть 2 числа і виведіть більше з них.
// const firstNumber = Number(prompt("Введіть перше число"))
// const secondNum = Number(prompt("Введіть друге число"))
// alert(firstNumber > secondNum ? firstNumber : secondNum)

// 2. Запросіть 1 число та перевірте ого на кратність 5.
// const num = Number(prompt("Введіть число  для перевірки його на кратність 5"))
// alert(num % 5 ? "Некратне 5" : 'Кратне 5')

// 3. Запросіть у користувача назву планети. Якщо користувач ввів «Земля»
// або «земля», то виведіть «Привіт, землянине!». 
// В інших випадках виведіть «Привіт, інопланетянине!».
const planet = prompt("Введіть назву планети")
alert(planet === "Земля" || planet === "земля" ? "Привіт, землянине!" : "Привіт, інопланетянине!")