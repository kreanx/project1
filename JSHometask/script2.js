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
// let money = 0; 
// function salaryCount () {
//     for (let i = 0; i < 6; i++) {
//         money = money + (+prompt ('Введите ваш доход за ' + (i+1) + ' месяц'));
//         if (i == 5) {
//             console.log(money +  'р - это сумма вашей ЗП за 6 месяцев');
//             return(money);
//         }
//     }
// }





    function salaryCount () {
        let money = 0,
            input = prompt('Введите вашу зарплату за ближайшие 6 месяцев через проблел', ''),
            cash = input.split(' ');
        for (let i = 0; i < 6; i++) {
             money = money + parseInt(cash[i]);
        };
        return(money)
}

console.log(salaryCount())