// Import the function sum from the app.js file
const { sum, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


// Dollar to Japan Yen

test("1 Dollar should be 146.26168224299065420560747663551 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const Yen = fromDollarToYen(3.5);

    // If One euro equals to 1.07 dollars and equals to 156.5 Yen, so 1.07 dollars should be 156.07 Yen
    //Find how much 1 dollar is in Yen (146.26 Yen)

    const expected1= 156.5/1.07;

    //Find how much 3.5 dollars is in Yen 
    const expected = 3.5 * expected1; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBeCloseTo(511.9158878504672897196261682243,5); 
     
})

// From Yen to Pound

test("1 GBP should be 179.8850 Yen", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const GBP = fromYenToPound(3.5);

    //Find how much Yen for 1 GBP (0.00555910)

    const expected1= 0.87/156.5;

    //Find how much 3.5 dollars is in Yen 
    const expected = 3.5 * expected1; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBeCloseTo(0.01945686900958466453674121405751,5); 
     
})
