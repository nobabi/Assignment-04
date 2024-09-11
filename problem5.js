
function waitingTime(interviewrArr, serialNumber) {
    
    if (!(interviewrArr instanceof Array) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    if (serialNumber <= interviewrArr.length) {
       return "Invalid Input: Serial number must be greater than the number of completed interviews";
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


console.log(waitingTime( "[6,2]", 9))