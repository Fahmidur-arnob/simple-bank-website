

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depoField = document.getElementById('deposit-field');
    const newDepoAmount = depoField.value;//string
    const nDepoAmount = parseFloat(newDepoAmount);

    const depoPrevTotal = document.getElementById('depo-amount-holder');

    const prevDepoTotal = depoPrevTotal.innerText;
    const pDepoTotal = parseFloat(prevDepoTotal);
    
    const currentDepoTotal = pDepoTotal + nDepoAmount;

    depoPrevTotal.innerText = currentDepoTotal;

    const balanceTotal = document.getElementById('balance-amount-holder');
    const prevBalanceTotal = balanceTotal.innerText;
    const pBalanceTotal = parseFloat(prevBalanceTotal);


    const currentBalanceTotal = pBalanceTotal + nDepoAmount;

    balanceTotal.innerText = currentBalanceTotal;






    depoField.value = '';

});