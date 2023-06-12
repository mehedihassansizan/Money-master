document.getElementById('cal-btn').addEventListener('click', function(){
    const totalIncome = document.getElementById('income-input');
    const incomeStringValue = totalIncome.value;
    const numberIncomeValue = parseInt(incomeStringValue);
    
    const foodStringValue = document.getElementById('food-input').value;
    const numberFoodValue = parseInt(foodStringValue);
    
    const rentStringValue = document.getElementById('rent-input').value;
    const numberRentValue = parseInt(rentStringValue);

    const colthesStringValue = document.getElementById('colthes-input').value;
    const numberColthesValue = parseInt(colthesStringValue);

    const totalExpenses = numberFoodValue + numberRentValue + numberColthesValue;
    const expensesElement = document.getElementById('total-expenses');
    expensesElement.innerText = totalExpenses;

    const balanceElement = document.getElementById('total-balance');
    const balance = numberIncomeValue - totalExpenses;
    balanceElement.innerText = balance;

});
document.getElementById('save-btn').addEventListener('click', function(){
    const saveStringPercentens = document.getElementById('save-input').value;
    const numberSavePersentens = parseInt(saveStringPercentens);
    
    const totalIncome2 = document.getElementById('income-input');
    const incomeStringValue2 = totalIncome2.value;
    const numberIncomeValue2 = parseInt(incomeStringValue2);

    
    const calculatePercentens = (numberIncomeValue2 / 100) * numberSavePersentens;
    // const percentens = calculatePercentens * numberSavePersentens;

    const saveAmmount = document.getElementById('save-ammount');
    saveAmmount.innerText = calculatePercentens;

    const balanceElement2 = document.getElementById('total-balance').innerText;
    const numberBalance = parseInt(balanceElement2);
    // const balance2 = numberIncomeValue2 - totalExpenses;

    const remainingBalance = document.getElementById('remaining-balance');
    const remain = numberBalance - calculatePercentens;
    remainingBalance.innerText = remain;
})