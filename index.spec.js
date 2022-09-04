
const StringCalculator = require("./index");

const calcObject = new StringCalculator();

test("when input string is empty",()=>{
    expect(calcObject.add("")).toBe(0);
})

test("when input string is of length 1 and digit is between 0 to 9",()=>{
    expect(calcObject.add("1")).toBe(1);
})