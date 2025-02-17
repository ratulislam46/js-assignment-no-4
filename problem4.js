function validProposal(person1, person2){
    
    if ( !typeof person1 =="object" || !typeof person2 =="object" ) {
        return "Invalid"
    }

    for ( const firstPerson of person1 ) {
        // console.log(firstPerson)
        for ( const secondPerson of person2 ) {
            // console.log(secondPerson)
            if ( firstPerson.gender !==secondPerson.gender && (Math.abs(firstPerson.age - secondPerson.age) <= 7)) {
                // console.log('true')
                return true;
            }
            else{
                // console.log('false')
                return false;
            }
        }
    }
}

const bioData1 = [
    { name:"Rahul",
    gender:"male",
    age:28}
]
const bioData2 = [
    { name:"Joya",
    gender: "female",
    age: 21}
]
// const bioData1 =[
//     {name: "shuvo",
//     gender: "male",
//     age: 20}
// ]
// const bioData2 = [
//     {name: "joy", gender:"male", age:25 }
// ]

const giveBiodata = validProposal(bioData1, bioData2)
console.log(giveBiodata);