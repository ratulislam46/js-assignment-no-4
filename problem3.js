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
const giveResult = [60, 70, 80, 40, 30];
// const giveResult = [48, 48, 50, 50, 100 ];
// const giveResult = [48, 48,92,100];
// const giveResult = [90];
// const giveResult = [90, 99, 87, 48, 34, 49 ];
// const giveResult = "100, 100";
// const giveResult =  90;
const result = willSuccess(giveResult);
console.log(result);



// ---------------done----------------