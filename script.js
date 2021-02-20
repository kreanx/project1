'use strickt';

let money = 0;

for (let i = 0; i < 6; i++) {
    money = money + (+prompt ("Введите ваш доход за месяц", ''));
    console.log(money);
};

let time = +prompt ("Введите ваш рабочий стаж в формате X месяцев", ''),
    stationar = prompt ("Введите, нужен ли вам стационар?", ''),
    numDays = +prompt ("Введите, сколько дней вы хотите больничный?", ''),

    yearS = +prompt ("Введите год начала больниченого: YYYY"),
    monS = +prompt ("Введите месяц начала больниченого: MM"),
    dayS = +prompt ("Введите день начала больниченого: DD"),
    dayMonCount = 0;

    // yearE = +promt ("Введите год начала больниченого: YYYY"),
    // monE = +promt ("Введите месяц начала больниченого в формате: MM"),
    // dayE = +promt ("Введите день начала больниченого в формате: DD");

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

let appData = {
    budjet: money,
    timeData: time,
    statData: stationar,
};

if (appData.timeData < 12) {
    appData.budjet = appData.budjet*0.7;
    console.log('Маловато отработал, дружок');
} else if ((appData.timeData >= 12) && (appData.timeData <= 36)) {
    appData.budjet = appData.budjet*0.85;
    console.log('Приемлело поработал');
} else if (appData.timeData > 36) {
    console.log('Отлично отработал');
};

console.log(appData.budjet);

let count1 = numDays,
    hollidays = 0,
    statMonBu = appData.budjet;

appData.budjet = appData.budjet / dayMonCount * numDays;

if ((numDays > 5) && (stationar = 'нет')) {
    count1 = count1 - 7;
    hollidays = hollidays + 2;
};

if (stationar = 'нет') {
    numDays = numDays - hollidays;
    statMonBu = statMonBu / (dayMonCount - hollidays) * numDays;
    console.log(statMonBu);
    console.log("Это бюджет без стационара");
} else {
    console.log(appData.budjet)
    console.log("Это бюджет со стационаром");
};
















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
