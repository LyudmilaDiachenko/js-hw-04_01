// Обʼєкти

// Створіть об’єкт, що описує прямокутник (зберігає координати ліво верхньо та право
// нижньо точок), і напишіть наступні функці для роботи з таким об’єктом
// 1. Функція приймає об’єкт-прямокутник і виводить інформацію про нього 
// (де яка точка розташована).
// 2. Функція приймає об’єкт-прямокутник і повертає ого ширину.
// 3. Функція приймає об’єкт-прямокутник і повертає ого висоту.
// 4. Функція приймає об’єкт-прямокутник і повертає ого площу.
// 5. Функція приймає об’єкт-прямокутник і повертає ого периметр.
// 6. Функція зміни ширини прямокутника. Вона приймає об’єкт-прямокутник і на скільки
// одиниць змінити ширину.
// 7. Функція зміни висоти прямокутника. Вона при має об’єкт-прямокутник і на скільки
// одиниць змінити висоту.
// 8. Функція зміни ширини та висоти прямокутника. Вона при має об’єкт-прямокутник та два
// значення для зміни ширини та висоти.
// 9. Функція зміщення прямокутника по осі X. Вона при має об’єкт-прямокутник і на скільки
// одиниць ого зрушити.
// 10. Функція зміщення прямокутника по осі Y. Вона при має об’єкт-прямокутник і на скільки
// одиниць ого зрушити.

let rectangle = {
    a: {
        x: 0,
        y: 0
    },
    b: {
        x: 2,
        y: 1
    }   
}
function draw({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}){
    console.log(`A: ${ax}, ${ay}`)
    console.log(`B: ${bx}, ${ay}`)
    console.log(`C: ${bx}, ${by}`)
    console.log(`D: ${ax}, ${by}`)
}
function width({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}){
    console.log(`width: ${bx-ax}`)
    return bx-ax
}
function height({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}){
    console.log(`height: ${by-ay}`)
    return by-ay
}
function square({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}){
    console.log(`square: ${(bx-ax) * (by-ay)}`)
    return (bx-ax) * (by-ay)
}
function perimetr({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}){
    console.log(`perimetr: ${2 * (bx-ax) + 2 * (by-ay)}`)
    return 2 * (bx-ax) + 2 * (by-ay)
}
function scaleX({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}, dx){
    return {
        a: {
            x: ax,
            y: ay
        },
        b: {
            x: bx + dx,
            y: by
        }   
    }
}
function scaleY({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}, dy){
    return {
        a: {
            x: ax,
            y: ay
        },
        b: {
            x: bx,
            y: by + dy
        }   
    }
}
function scale({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}, dx, dy){
    return {
        a: {
            x: ax,
            y: ay
        },
        b: {
            x: bx + dx,
            y: by + dy
        }   
    }
}
function translateX({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}, dx){
    return {
        a: {
            x: ax + dx,
            y: ay
        },
        b: {
            x: bx + dx,
            y: by
        }   
    }
}
function translateY({
    a: {
        x: ax,
        y: ay
    },
    b: {
        x: bx,
        y: by
    }   
}, dy){
    return {
        a: {
            x: ax,
            y: ay + dy
        },
        b: {
            x: bx,
            y: by + dy
        }   
    }
}
console.log(draw(rectangle))
console.log(width(rectangle))
console.log(height(rectangle))
console.log(square(rectangle))
console.log(perimetr(rectangle))
console.log(scaleX(rectangle, 1))
console.log(scaleY(rectangle, 2))
console.log(scale(rectangle, 3, 4))
console.log(translateX(rectangle, 1))
console.log(translateY(rectangle, 1))