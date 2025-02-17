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
const phoneNumber = validContact("01643110638");
console.log(phoneNumber)




// ---------------done----------------
