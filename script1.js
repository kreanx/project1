'use strickt';

let newDate = new Date(prompt('Введите дату начала больничного в формате YYYY-MM-DD', ''));

let lastDate = new Date(prompt('Введите конца начала больничного в формате YYYY-MM-DD', ''));

let n = lastDate - newDate,
    t = lastDate.getMonth();

console.log(t);

// window.addEventListener('DOMContentLoaded', function() {
 
//     'use strict';
       
//     // Задаём конечную дату (Дедлайн)
//         let deadline = prompt('Введите дату конца больничного в формате YYYY');
     
//         // Сколько осталось времени
//         function getTimeRemaining(endtime) {
//             // Получаем разницу. Переводим конечную дату в миллисекунды и отнимаем текущую дату
//             let t = Date.parse(endtime) - Date.pa(),
//             // Высчитываем секунды, минуты, часы и дни
//                 seconds = Math.floor((t/1000) % 60),
//                 minutes = Math.floor((t/1000/60) % 60),
//                 hours = Math.floor((t/1000/60/60) % 24),
//                 days = Math.floor((t/1000/60/60/24));
     
//                 return {
//                 'total': t,
//                 'seconds': seconds,
//                 'minutes': minutes,
//                 'hours': hours,
//                 'days': days
//                 }
//         }
     
//         // Форматируем и устанавливаем значения в разметку
//         function setClock(id, endtime) {
//             // Получаем блок таймера по его id
//             let timer = document.getElementById(id),
//             // И соотвественно, все элементы блока
//                 days = timer.querySelector('.days'),
//                 dayname = timer.querySelector('.dayname'),
//                 hours = timer.querySelector('.hours'),
//                 minutes = timer.querySelector('.minutes'),
//                 seconds = timer.querySelector('.seconds'),
//                 // Обновляем таймер каждую секунду
//                 timeInterval = setInterval(updateClock, 1000);
     
//                 // Функция для обновления таймера
//                 function updateClock() {
//                     // Помещаем в t результат функции getTimeRemaining (объект)
//                     let t = getTimeRemaining(endtime);
//                     // Если дней осталось 0 - не выводим
//                     if (t.days <= 0) {
//                         days.textContent = "";
//                         dayname.textContent = "";
//                     } else {
//                         days.textContent = t.days;
//                     // Вставляем слово "день" при этом форматируя (дней, дня)
//                         dayname.textContent = formatDays(t.days);                    
//                     }
//                     // Вставляем оставшееся время
//                     hours.textContent = formatTime(t.hours);
//                     minutes.textContent = formatTime(t.minutes);
//                     seconds.textContent = formatTime(t.seconds);
     
//                     // Если Дедлайн прошёл - вставляем в таймер 00:00:00,
//                     // и останавливаем отсчёт (clearInterval)
//                     if (t.total <= 0) {
//                         clearInterval(timeInterval);
//                         days.textContent = "";
//                         hours.textContent = '00';
//                         minutes.textContent = '00';
//                         seconds.textContent = '00';
//                     }
//                 }
     
//                 // Функция добавляет 0 к единцам, получаем
//                 // 03:04:05 вместо 3:4:5
//                 function formatTime(time){
//                     if ( time < 10) {
//                         time = '0' + time;
//                     }
//                     return time;
//                 }
     
//                 // Форматируем слово день в зависимости от числа
//                 // 1 день, 2 дня, 5 дней.
//                 function formatDays(day) {
//                     let sb = '',
//                         dayNew = day % 100,
//                         lastFigure = dayNew % 10;
//                     if (dayNew > 10 && dayNew < 20) {
//                       sb = 'ей';
//                     }
//                     else if (lastFigure == 1) {
//                       sb = "день";
//                     }
//                     else if (lastFigure > 1 && lastFigure < 5) {
//                       sb = 'дня';
//                     }
//                     else {
//                       sb = 'дней';
//                     }
//                     return sb;
//                 }
//         }
     
//     //Вызов таймера. Передаём id элемента и наш Дедлайн
//         setClock('timer', deadline);
//     });










// 'use strict';

// let money = +prompt ("Введите ваш бюджет за месяц?", ''),
//     time = prompt ("Введите дату в формате YYYY-MM-DD", '');

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false,
// }

// for (let i = 0; i < 2; i++) {
//         let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt ("Во сколько обойдётся?", '');

//             if ((typeof(a)) === 'string' && (typeof(b))!= null
//             && a != '' && b !='' && a.length < 50){
//                 console.log("done");

//             appData.expenses[a] = b;
//         }
// }

// appData.moneyPerDay = appData.budget /30;


// alert("Ежедневный бюджет:" + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log("Минимлаьный уровень достатка");
// }
//     else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("Средний урвоень достатка");
//     }
//     else if (appData.moneyPerDay > 2000){
//         console.log("Высокий урвоень достатка");
//     }
//     else {
//         console.log("Fatal error");
//  }









// function ShowCount(number){
//     alert(number+1);
// }

// ShowCount();





// switch (+appData.timeData) {
//     case appData.timeData < 12:
//         console.log('Маловато отработал, дружок');
//         break;
//     case ((appData.timeData >= 12) && (appData.timeData <= 36)):
//         console.log('Приемлело поработал')
//         break;
//     case appData.timeData > 36:
//         console.log('Отлично отработал')
//         break;
// }
// function hollidaysCount () {
//     if (stationar == 'нет'){
//         let wholeWeeks = diffDate / 7 | 0,
//             workingDays = wholeWeeks * 5;
//         if (diffDate % 7) {
//             newDate.setDate(newDate.getDate() + wholeWeeks * 7);
//             while (newDate < lastDate) {
//                 newDate.setDate(newDate.getDate() + 1);
//                 if (newDate.getDay() != 0 && newDate.getDay() != 6) {
//                   ++workingDays;}}}
//     }
// }