

function sendNotification(email)
{

    let check ='@';
    if(email.includes(check)!==true)
    {
        return "invalid Email";
    }
let userName =email.split('@');

let firstPart =userName[0];
let secondPart=userName[1]
return str =firstPart +' you send an email from '+ secondPart;


return str;
}

let email='fahim234.hotmail.com';


console.log(SendNotification(email));
