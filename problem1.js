function calculateVAT(price) {
    if (typeof price !=="number" || price < 0) {
        return "Invalid";
    }
    let vat = price * 0.075;
    return vat;
}
const result = calculateVAT (1500);
console.log(result)





// ---------------done----------------