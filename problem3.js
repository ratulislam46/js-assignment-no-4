function willSuccess(marks){
    if (!typeof Array.isArray(marks)) {
        console.log("Invalid")
    }
    let box1 = 0;
    let box2 = 0;
    for(const mark of marks){
        if (mark > 50){
             console.log("pass")
            // return "pass"
            // box1.push(mark)
        }
        else {
            console.log("fail")
            // return "fail"
            // box2.push(mark)                   /* box 1, box2 er vitor push hoitese na */
        }
    }
}
const giveResult = [60, 70, 80, 40, 30];
const result = willSuccess(giveResult)
console.log(result)
