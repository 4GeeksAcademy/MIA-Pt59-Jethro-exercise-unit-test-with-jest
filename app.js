// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // Find the value of 1 dollar in Yen
    let OneDollarInYen = 156.5 / 1.07;

    // Convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * OneDollarInYen;

    // return the dollar value
    return valueInYen;
}

// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // Find the value of 1 Yen in GBP
    let OneYenInGBP = 0.87 / 156.5;

    // Convert the given valueInYen to GBP
    let valueInGBP = valueInYen * OneYenInGBP;

    // return the dollar value
    return valueInGBP;
}


// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound  }