'use strickt';


// Подсчёт суммы ЗП за 6 месяцев
let money = 0;
function salaryCount () {
    for (let i = 0; i < 6; i++) {
        money = money + (+prompt ('Введите ваш доход за месяц'));
        if (i == 5) {
            console.log(money, ' - это сумма вашей ЗП за 6 месяцев');
            return(money);
        }
    }
};
salaryCount();

// Ввод пользователем данных, связанных со временем
let time = +prompt ("Введите ваш рабочий стаж в формате X месяцев", ''),
    stationar = prompt ("Введите, нужен ли вам стационар?", ''),
    numDays = +prompt ("Введите, сколько дней вы хотите больничный?", ''),

    yearS = +prompt ("Введите год начала больниченого: YYYY"),
    monS = +prompt ("Введите месяц начала больниченого: MM"),
    dayS = +prompt ("Введите день начала больниченого: DD"),
    dayMonCount = 0;

// Расчёт количества дней в месяце
function daysInMonth() {
    switch (monS) {
        case monS = 1: dayMonCount = 31;
            break;
        case monS = 2: dayMonCount = 28;
            break;
        case monS = 3: dayMonCount = 31;
            break;
        case monS = 4: dayMonCount = 30;
            break;
        case monS = 5: dayMonCount = 31;
            break;
        case monS = 6: dayMonCount = 30;
            break;
        case monS = 7: dayMonCount = 31;
            break;
        case monS = 8: dayMonCount = 31;
            break;
        case monS = 9: dayMonCount = 30;
            break;
        case monS = 10: dayMonCount = 31;
            break;
        case monS = 11: dayMonCount = 30;
            break;
        case monS = 12: dayMonCount = 31;
            break;
        default: console.log('ErroR month');
            break;
    };
};
daysInMonth();

let appData = {
    budget: money,
    timeData: time,
    statData: stationar,
};

// Подсчёт коэффициента ЗП, в зависимости от срока работы
appData.budget = appData.budget / 6;
function workTimeCount () {
    if (appData.timeData < 12) {
        appData.budget = appData.budget*0.7;
        console.log('Маловато отработал, дружок');
    } else if ((appData.timeData >= 12) && (appData.timeData <= 36)) {
        appData.budget = appData.budget*0.85;
        console.log('Приемлело поработал');
    } else if (appData.timeData > 36) {
        console.log('Отлично отработал');
    };
};
workTimeCount();
console.log(Math.round(appData.budget), ' - накопления с вычетом процента');


let daysCount = numDays,
    hollidays = 0,
    statMonBu = appData.budget,
    finalBudget = (appData.budget / dayMonCount) * numDays;

// Подсчёт выходных при отсутсвии стационара
function hollidaysCount () {
    if ((numDays > 5) && (stationar = 'нет')) {
        daysCount = daysCount - 7;
        hollidays = hollidays + 2;
    };
}
hollidays();

// Подсчёт больничных в зависимости от наличия стационара
function calcWithStat () {
    if (stationar = 'нет') {
        numDays = numDays - hollidays;
        statMonBu = ((statMonBu / dayMonCount) * (numDays -  hollidays));
        console.log(Math.round(statMonBu));
        console.log("Это бюджет без стационара");
    } else {
        console.log(Math.round(finalBudget))
        console.log("Это бюджет со стационаром");
    };
};
calcWithStat();





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
//                 };
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
// };

// for (let i = 0; i < 2; i++) {
//         let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt ("Во сколько обойдётся?", '');

//             if ((typeof(a)) === 'string' && (typeof(b))!= null
//             && a != '' && b !='' && a.length < 50){
//                 console.log("done");

//             appData.expenses[a] = b;
//         }
// };

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
// };
