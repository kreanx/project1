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
}
salaryCount();

//Ввод пользователем данных, связанных со временем
let time = +prompt ("Введите ваш рабочий стаж в формате X месяцев", ''),
    stationar = prompt ("Нужен ли вам стационар? Введите 'да', либо 'нет'", ''),
    dayMonCount = 0;



let newDate = new Date(prompt('Введите дату начала больничного в формате YYYY-MM-DD', ''));
    lastDate = new Date(prompt('Введите конца начала больничного в формате YYYY-MM-DD', ''));
    diffDate = (lastDate - newDate) / (1000*60*60*24);


// Расчёт количества дней в месяце
function daysInMonth() {
    t = newDate.getMonth();
    switch (t) {
        case t = 0: dayMonCount = 31;
            break;
        case t = 1: dayMonCount = 28;
            break;
        case t = 2: dayMonCount = 31;
            break;
        case t = 3: dayMonCount = 30;
            break;
        case t = 4: dayMonCount = 31;
            break;
        case t = 5: dayMonCount = 30;
            break;
        case t = 6: dayMonCount = 31;
            break;
        case t = 7: dayMonCount = 31;
            break;
        case t = 8: dayMonCount = 30;
            break;
        case t = 9: dayMonCount = 31;
            break;
        case t = 10: dayMonCount = 30;
            break;
        case t = 11: dayMonCount = 31;
            break;
        default: console.log('ErroR month');
            break;
    }
}
daysInMonth();

let appData = {
    budget: money,
    timeData: time,
    statData: stationar
}

// Подсчёт коэффициента ЗП, в зависимости от срока работы
appData.budget = appData.budget / 6;
function workTimeCount () {
    if (appData.timeData < 12) {
        appData.budget = appData.budget*0.7;
        console.log('Маловато отработал, дружок, коэффициент - 0.7');
    } else if ((appData.timeData >= 12) && (appData.timeData <= 36)) {
        appData.budget = appData.budget*0.85;
        console.log('Приемлело поработал, коэффициент - 0.85');
    } else if (appData.timeData > 36) {
        console.log('Отлично отработал, коэффициент - 1');
    }
}
workTimeCount();
console.log(Math.round(appData.budget), ' - накопления с вычетом процента');


let daysCount = diffDate,
    statMonBu = appData.budget,
    finalBudget = (appData.budget / dayMonCount) * diffDate;

// Подсчёт рабочих дней в диапазоне, заданным пользователем
function dateDifference(start, end) {
    let s = new Date(start),
        e = new Date(end),
        addOneMoreDay = 0;

    if( s.getDay() == 0 || s.getDay() == 6 ) {
        addOneMoreDay = 1;
    }

    let totalDays = Math.round((e - s) / 8.64e7),
        wholeWeeks = totalDays / 7 | 0,
        days = wholeWeeks * 5;

    if (totalDays % 7) {
      s.setDate(s.getDate() + wholeWeeks * 7);
  
      while (s < e) {
        s.setDate(s.getDate() + 1);
        if (s.getDay() != 0 && s.getDay() != 6) {
          ++days;
        }
        //s.setDate(s.getDate() + 1);
      }
    }
    let weekEndDays = totalDays - days + addOneMoreDay;
    return weekEndDays;
  }
let hollidays = dateDifference(newDate, lastDate);


// Подсчёт больничных в зависимости от наличия стационара
function calcWithStat () {
    if (stationar = 'нет') {
        statMonBu = ((statMonBu / dayMonCount) * (diffDate - hollidays));
        console.log(Math.round(statMonBu), " - это ваши больничные без стационара");
    } else {
        console.log(Math.round(finalBudget), " - это ваши больничные, учитывая стационар")
    }
}
calcWithStat();




