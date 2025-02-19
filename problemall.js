
function calculateVAT(price) {
    if (typeof price !=="number" || price < 0) {
        return "Invalid";
    }
    let vat = price * 0.075;
    return vat;
}



function validContact(contact) {
    if (typeof contact !=="string") {
    return "Invalid"
}
    let diclare = true;
    if (contact.length !== 11 || contact.includes(' ') || !contact.startsWith("01")) {
        diclare = false;
        return diclare;
    }
    else {
        diclare = true;
        return diclare;
    }
}



function willSuccess(marks) {
    if(!typeof Array.isArray(marks)) {
        return "Invalid"
    }
    let passCount = 0;
    let failCount = 0;
    for(const mark of marks) {
        if (mark >= 50){
             passCount ++;
        }
        else {
            failCount++;                
        }
    }
    if(passCount > failCount){
        return true;
    }
    else{
        return false;
    }
}



function validProposal(person1, person2){
    
    if ( !typeof person1 =="object" || !typeof person2 =="object" ) {
        return "Invalid";
    }
    for ( const firstPerson of person1 ) {
        for ( const secondPerson of person2 ) {
            if ( firstPerson.gender !==secondPerson.gender && (Math.abs(firstPerson.age - secondPerson.age) <= 7)) {
                return true;
            }
            else{
                return false;
            }
        }
    }
}



function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    let sum = 0;
    for(let i = 0 ; i < times.length ; i++ ){
        sum = sum + times[i];
    }
    const hoursFraction = sum / 3600;
    const hourResizing = parseInt (hoursFraction);
    const minutes = sum % 60;
    const seconds = minutes % 60;
    const secondsResizing = parseInt (seconds);
    const output = 'hours:' + hourResizing + ', ' + 'minutes: ' + minutes + ', ' + 
    'seconds:' + seconds;
    return output;
}