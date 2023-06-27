"use strict"

// 1. Напишіть функцію, яка приймає рядок і виводить його в консоль затримкою у 2 секунди.
// function str(str){
//     console.log(str);
// }
// setTimeout(str, 2000, 'hello')

// 2. Створіть таймер, який відлічує час у зворотному напрямку від 10 до 0. Виведіть кожне число затримкою у 1 секунду.
// function time(){
//     let num = 10;
//     let intervalId = setInterval(()=> {
//         if(num < 1) clearInterval(intervalId)
//         console.log(num);
//         num--;
//     },1000)
    
// }
// time()
// 3. Створіть функцію, яка випадковим чином виводить одне з трьох повідомлень в консоль кожні 2 секунди.

// function randomMessage() {
//     const messages = ['Повідомлення 1', 'Повідомлення 2', 'Повідомлення 3'];
//     const randomIndex = Math.floor(Math.random() * messages.length);
//     const message = messages[randomIndex];
//     console.log(message);
//     setTimeout(randomMessage, 2000);
// }
// randomMessage();

// 4. Всі завдання зі статті: https://uk.javascript.info/settimeout-setinterval

//4.1 Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, починаючи від from і закінчуючи to.
// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(function() {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(1, 10);