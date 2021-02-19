'use strict';

let money = +prompt ("Введите ваш бюджет за месяц?", ''),
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt ("Во сколько обойдётся?", '');

            if ((typeof(a)) === 'string' && (typeof(b))!= null
            && a != '' && b !='' && a.length < 50){
                console.log("done");

            appData.expenses[a] = b;
        }
};

appData.moneyPerDay = appData.budget /30;


alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимлаьный уровень достатка");
}
    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний урвоень достатка");
    }
    else if (appData.moneyPerDay > 2000){
        console.log("Высокий урвоень достатка");
    }
    else {
        console.log("Fatal error");
    }

