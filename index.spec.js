
const StringCalculator = require("./index");

const calcObject = new StringCalculator();

test("when input string is empty",()=>{
    expect(calcObject.add("")).toBe(0);
})

test("when input string is of length 1 and digit is between 0 to 9",()=>{
    expect(calcObject.add("1")).toBe(1);
})

test("when the two inputs are given",()=>{
    expect(calcObject.add("1,2")).toBe(3);
})

test("when the string ends with comma",()=>{
    expect(calcObject.add("1,3,")).toBe(4);
})

test("when the string contains two or more adjacent commas",()=>{
    expect(calcObject.add("1,,3")).toBe(4);
    expect(calcObject.add("1,,3,,,6,")).toBe(10);
})