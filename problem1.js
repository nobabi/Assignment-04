
function calculateMoney(ticketSale){
    if(ticketSale<0 || typeof(ticketSale) !==Number)
    {
        return 'Invalid Number';
    }
    let remaingAmount = ticketSale*120-(500+8*50)
    return remaingAmount;
}

function calculateTax(income,expense)
{
    if(typeof income !=="number" || typeof expense !=="number" ||  income <=0 || expense <=0)
    {
        return "Invalid Input";
    }
    let saving =(income-expense)*(.20);
    return saving;
}

console.log(calculateTax(6000, -1500))