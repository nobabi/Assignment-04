//Problem 01

function calculateMoney(ticketSale){
    if(ticketSale<0 || typeof(ticketSale) !==Number)
    {
        return 'Invalid Number';
    }
    let remaingAmount = ticketSale*120-(500+8*50)
    return remaingAmount;
}
//Test Problem 1
// console.log(calculateMoney('-1055'));

//problem 02
function checkName (name)
{
    if(typeof(name)!=='string')
    {
        return 'Only String Char'
    }
    let lastLetter=name.slice(-1).toLowerCase();
    let result =false;
    let checkArray= ['a','y','i','e','o','u','w'];
    for(let char of checkArray)
    {
        if(char===lastLetter)
        {
            result=true;
        }
    }
    return result?'Good Name':'Bad Name'
   
}

// console.log(checkName('Salamn'));
// console.log(checkName(5555));

function deleteInvalids(array){
    if( !Array.isArray(array))
    {
    return 'Invalid'
    }
    let numberArray =[];
    for(let element of array)
        {
            
            if(typeof element ==='number' && isNaN(element)===false)
            {
           numberArray.push(element);
            }

        }
        return numberArray;
    
}

//test problem 3
// let arr =[1,null,undefined,18,-19,NaN]
let arr ='addd';
// console.log(deleteInvalids(arr))  ;

function password(obj)
{
    if(obj.name===undefined || obj.birthYear===undefined || obj.siteName===undefined || obj.birthYear.toString().length !==4)
    {
        return 'Invalid'
    }
    let capitalSiteName=obj.siteName[0].toUpperCase()+obj.siteName.slice(1);
let passwordString=capitalSiteName+'#' + obj.name+'@'+obj.birthYear;

return passwordString;
}
obj ={name:'kolimuddin',birthYear:1999,siteName:"google"}
// console.log(password(obj));
obj ={name:'kolimuddin',birthYear:199,siteName:"google"}
// console.log(password(obj));
obj ={name:'kolimuddin',birthYear:1999}
// console.log(password(obj));


// let arr2 =[34,500,5000,2000,4500]
// leavingCost =1000;
function monthlySaving(arr2,leavingCost)
{
    if(!Array.isArray(arr2) || typeof leavingCost !=='number'){

        return 'Invalid Input';
    }
    let totalIncome=0;
    for(let payment of arr2)
    {
        if(payment>=3000)
        {
           
            let tax = payment*0.2;
            totalIncome +=payment-tax;
        }
        else
        {
            totalIncome+=payment;
        }
       
      
    }
    let savings= totalIncome-leavingCost;
    if(savings>=0){
        return savings;
    }
    else
    {
    return 'earn More'
    }
    

}

let arr2 =[1000,2000,3000]
let leavingCost =5400;
console.log(monthlySaving(arr2,leavingCost));