// Больничные - 4 лаба

// Министерство труда одной страны предлагает вам написать приложение, считающее больничные сотрудника.

// Учитывается зарплата сотрудника за последние 6 месяцев и стаж его работы в организации в месяцах. 
// Берется средняя зарплата за последние 6 месяцев. В случае, если сотрудник работал менее года, то средняя зарплата умножается на 0.7, 
// если от года до трех лет, то на 0.85, более трех лет на 1. Выясняется, нужен ли человеку стационар, 
// а затем вводится срок больничных - дата начала и дата конца. В случае, если стационар не требуется, 
// то оплата производится только за рабочие дни (пн-пт, без учета праздников). Если стационар требуется, оплата производится за все дни в периоде. 
// Способ начисления больничных следующий - средняя зарплата с коэффициентом делится на число дней в месяце начала больничного, 
// затем за каждый день начисляется одинаковая сумма денег.


'use strict';


// Подсчёт суммы ЗП за 6 месяцев
let money = 0; 
function salaryCount () {
    for (let i = 0; i < 6; i++) {
        money = money + (+prompt ('Введите ваш доход за ' + (i+1) + ' месяц'));
        if (i == 5) {
            console.log(money +  'р - это сумма вашей ЗП за 6 месяцев');
            return(money);
        }
    }
}
salaryCount();

//Ввод пользователем данных, связанных со временем
let time = +prompt ("Введите ваш рабочий стаж в формате X месяцев", ''),
    stationar = prompt ("Нужен ли вам стационар? Введите 'да', либо 'нет'", ''),
    dayMonCount = 0,
    newDate = new Date(prompt('Введите дату начала больничного в формате YYYY-MM-DD', ''));
    lastDate = new Date(prompt('Введите конца начала больничного в формате YYYY-MM-DD', ''));
    diffDate = (lastDate - newDate) / (1000*60*60*24);  //Срок больничного в днях

// Расчёт количества дней в месяце
function daysInMonth() {
    t = newDate.getMonth();
    switch (t) {
        case 0: dayMonCount = 31;
            break;
        case 1: dayMonCount = 28;
            break;
        case 2: dayMonCount = 31;
            break;
        case 3: dayMonCount = 30;
            break;
        case 4: dayMonCount = 31;
            break;
        case 5: dayMonCount = 30;
            break;
        case 6: dayMonCount = 31;
            break;
        case 7: dayMonCount = 31;
            break;
        case 8: dayMonCount = 30;
            break;
        case 9: dayMonCount = 31;
            break;
        case 10: dayMonCount = 30;
            break;
        case 11: dayMonCount = 31;
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
        console.log('Маловато отработал, коэффициент - 0.7');
    } else if ((appData.timeData >= 12) && (appData.timeData <= 36)) {
        appData.budget = appData.budget*0.85;
        console.log('Приемлело отработал, коэффициент - 0.85');
    } else if (appData.timeData > 36) {
        console.log('Отлично отработал, коэффициент - 1');
    }
}
workTimeCount();
console.log(Math.round(appData.budget) + 'р - накопления с вычетом процента');

let daysCount = diffDate,
    statMonBu = appData.budget,
    finalBudget = (appData.budget / dayMonCount) * diffDate;

// Подсчёт рабочих дней в диапазоне, заданным пользователем
function dateDifference(start, end) {
    let _firstDate = new Date(start),
        _lastDate = new Date(end),
        addOneMoreDay = 0;

    if( _firstDate.getDay() == 0 || _firstDate.getDay() == 6 ) {
        addOneMoreDay = 1;
    }

    let totalDays = Math.round((_lastDate - _firstDate) / 8.64e7),
        wholeWeeks = totalDays / 7 | 0,
        days = wholeWeeks * 5; //дни без учёта выходных

    if (totalDays % 7) {
      _firstDate.setDate(_firstDate.getDate() + wholeWeeks * 7);
      while (_firstDate < _lastDate) {
        _firstDate.setDate(_firstDate.getDate() + 1);
        if (_firstDate.getDay() != 0 && _firstDate.getDay() != 6) {
          ++days;
        }
        // _firstDate.setDate(_firstDate.getDate() + 1); //пятница - понедельник 2 рабочих дня
      }
    }
    let weekEndDays = totalDays - days + addOneMoreDay;
    return weekEndDays;
  }
let hollidays = dateDifference(newDate, lastDate);

// Подсчёт больничных в зависимости от наличия стационара
function calcWithStat () {
    if (stationar == 'нет') {
        statMonBu = ((statMonBu / dayMonCount) * (diffDate - hollidays));
        console.log(Math.round(statMonBu) + 'р - это ваши больничные без стационара');
    } else {
        console.log(Math.round(finalBudget) + 'р - это ваши больничные, учитывая стационар')
    }
}
calcWithStat();