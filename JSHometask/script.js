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

function main() {

    // Подсчёт суммы ЗП за 6 месяцев
    function salaryCount_f () { 
        let money = 0,
            input = prompt('Введите вашу зарплату за ближайшие 6 месяцев через проблел', ''),
            cash = input.split(' ');
        for (let i = 0; i < 6; i++) { //reduce OK
                money = money + parseInt(cash[i]);
        };
        return(money)
    }
    let salaryCount = salaryCount_f();
    console.log(salaryCount)

    //Проверка на стационар
    function stationar () {
        return confirm('Нужен ли стационар?') //возможно OK
    }

    //Ввод пользователем данных, связанных со временем
    let time = +prompt ("Введите ваш рабочий стаж в формате X месяцев", ''),
        dayMonCount = 0,
        newDate = new Date(prompt('Введите дату начала больничного в формате YYYY-MM-DD', '')),
        lastDate = new Date(prompt('Введите конца начала больничного в формате YYYY-MM-DD', '')),
        diffDate = (lastDate - newDate) / (1000*60*60*24);  //Срок больничного в днях здесь? 

    // Расчёт количества дней в месяце
    function daysInMonth() {
        let t = newDate.getMonth();
        switch (t) {
            case 0: dayMonCount = 31;
                break;
            case 1: dayMonCount = 28;
                break;
            case 2: dayMonCount = 31;
                break;
            case 3: dayMonCount = 30;
                break;
            case 4: dayMonCount = 31; //date + num + group Ok
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

    let budget = salaryCount,
        timeData = time;

    // Подсчёт коэффициента ЗП, в зависимости от срока работы согласен
    budget = budget / 6;
    function workTimeCount () {
        
        if (timeData < 12) {
            budget = budget*0.7;
            console.log('Маловато отработал, коэффициент - 0.7');
        } else if ((timeData >= 12) && (timeData <= 36)) {
            budget = budget*0.85;
            console.log('Приемлело отработал, коэффициент - 0.85');
        } else if (timeData > 36) {
            console.log('Отлично отработал, коэффициент - 1');
        }
    }
    workTimeCount();
    console.log(Math.round(budget) + 'р - накопления с вычетом процента'); //исправлю tofixed

    let statMonBu = budget,
        finalBudget = (budget / dayMonCount) * diffDate;

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
    let hollidays = dateDifference(newDate, lastDate); //тут всё идеально ещё раз? да

    // Подсчёт больничных в зависимости от наличия стационара
    function calcWithStat () {
        if (stationar() == false) {
            statMonBu = ((statMonBu / dayMonCount) * (diffDate - hollidays));
            console.log(Math.round(statMonBu) + 'р - это ваши больничные без стационара');
        } else {
            console.log(Math.round(finalBudget) + 'р - это ваши больничные, учитывая стационар')
        }
    }
    calcWithStat();
};
main(); 
