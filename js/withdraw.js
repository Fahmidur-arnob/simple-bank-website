
document.getElementById('withdraw-btn').addEventListener('click', function(){
    

    const withdrawField = document.getElementById('withdraw-field');

    const withdrawFieldValueString = withdrawField.value;

    const newWithdrawAmount = parseFloat(withdrawFieldValueString);

    const withdrawTotalElement = document.getElementById('withdraw-amount-holder');

    const prevWithdrawTotalString = withdrawTotalElement.innerText;

    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);
    

    const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;


    const balanceTotalElement = document.getElementById('balance-amount-holder');

    const prevBalanceString = balanceTotalElement.innerText;

    const prevBalance = parseFloat(prevBalanceString);

    const newBalanceTotal = prevBalance - newWithdrawAmount;

    balanceTotalElement.innerText = newBalanceTotal;






    withdrawField.value = '';


});

