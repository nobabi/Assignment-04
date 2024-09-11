
function calculateTax(income,expense)
{
    if(typeof income !=="number" || typeof expense !=="number" ||  income <=0 || expense <=0)
    {
        return "Invalid Input";
    }
    let saving =(income-expense)*(.20);
    return saving;
}

function sendNotification(email)
{

    let check ='@';
    if(email.includes(check)!==true)
    {
        return "Invalid Email";
    }
let userName =email.split('@');

let firstPart =userName[0];
let secondPart=userName[1]
return str =firstPart +' you send an email from '+ secondPart;


return str;
}


function  checkDigitsInName(name)
{


 if(typeof name !== "string" || name.trim() === "")
   {
        return "Invalid Input";
   }

for (let i =0; i<name.length; i++)
{
    if(!isNaN(name[i]) && name[i] !==' ')
    {
        return true;
    }
}
   


return false;


}


function  calculateFinalScore(obj)
{
    if(typeof obj !=='object' || typeof obj===null)
    {
        return ("Invalid Input");
    }

    if(obj.testScore>50 || obj.schoolGrade>30)
    {
        return ("Invalid Input")
    }


    let total_score= obj.testScore+obj.schoolGrade;

    if(obj.isFFamily)
    {
        total_score =total_score+20;
    }

    return total_score>=80;
}




function  waitingTime(interviewrArr, serialNumber) {
    
    if (!(interviewrArr instanceof Array) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    if (serialNumber <= interviewrArr.length) {
       return "Invalid Input";
    }

    let sum = 0;
    for (let i = 0; i < interviewrArr.length; i++) {
        sum += interviewrArr[i];
    }
    const avgeTime = Math.round(sum / interviewrArr.length);


    const peopleRest = serialNumber - interviewrArr.length - 1;


    const waitingTime = avgeTime * peopleRest;

    return waitingTime;
}
