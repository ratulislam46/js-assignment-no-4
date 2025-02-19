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
const result = calculateSleepTime ([1000, 499, 519, 300]);
console.log(result)
