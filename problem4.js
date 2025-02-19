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

const giveBiodata = validProposal(bioData1, bioData2)
console.log(giveBiodata);



// ---------------done----------------