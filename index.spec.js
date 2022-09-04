
const StringCalculator = require("./index");

const calcObject = new StringCalculator();


/*test  1*/
test("when input string is empty",()=>{
    expect(calcObject.add("")).toBe(0);
})

/*test  2*/
test("when input string is of length 1 and digit is between 0 to 9",()=>{
    expect(calcObject.add("1")).toBe(1);
})

/*test  3*/
test("when the two inputs are given",()=>{
    expect(calcObject.add("1,2")).toBe(3);
})

/*test  4*/
test("when the string ends with comma",()=>{
    expect(calcObject.add("1,3,")).toBe(4);
})

/*test  5*/
test("when the string contains two or more adjacent commas",()=>{
    expect(calcObject.add("1,,3")).toBe(4);
    expect(calcObject.add("1,,3,,,6,")).toBe(10);
})

/*test  6*/
test("Numbers bigger than 1000 should be ignored",()=>{
    expect(calcObject.add("2,1004")).toBe(2);
    expect(calcObject.add("10000,7500")).toBe(0);
    expect(calcObject.add("2,10,100,8,1050")).toBe(120);
    expect(calcObject.add("10001,,7,2,1,,10002,")).toBe(10);
})

/*test  7*/
test("handling an unknown amount of numbers",()=>{
    expect(calcObject.add("2,3")).toBe(5);
    expect(calcObject.add("1,1,1,1,1,1,1,1,1,1,10,10")).toBe(30);
    expect(calcObject.add("2,2,2,2,,,2")).toBe(10);
    expect(calcObject.add("1002,20,30,3000")).toBe(50);
    expect(calcObject.add("1004,1007,10067,8752")).toBe(0);
})

/*test  8*/
test("when string contains lower case alphabet",()=>{
    expect(calcObject.add("a,c")).toBe(4);
    expect(calcObject.add("1,3,a,d,10")).toBe(19);
    expect(calcObject.add("1,20,10067,e,j,o,t,y,,,")).toBe(96);
})

/*test  9*/
test("handle new lines between numbers",()=>{
    expect(calcObject.add("2\n5,5")).toBe(12);
    expect(calcObject.add("2\n2\n2\n\n,,")).toBe(6);
})

/*test  10*/
test("Negative elements are not allowed",()=>{

    //Test case 1: 
    let negative_elements = [];
    negative_elements.push(-5);
    try
    {
        calcObject.add("-5,2");
    }
    catch(error)
    {
        expect(error).toBeInstanceOf(TypeError);
        expect(error).toHaveProperty('message', "Negatives not allowed. Negative elements are: " + negative_elements);
    }

    //test case 2
    negative_elements=[];
    let to_pass = "-1,-2,-3,0,17,90";
    const list_of_numbers = to_pass.split(/[\n,]+/);
    list_of_numbers.forEach(element=>{
        if(+element<0)negative_elements.push(+element);
    })

    try{
        calcObject.add(to_pass);
    }
    catch(error)
    {
        expect(error).toBeInstanceOf(TypeError);
        expect(error).toHaveProperty('message', "Negatives not allowed. Negative elements are: " + negative_elements);
    }
})


/*test  11*/
test("support different delimiters",()=>{
    expect(calcObject.add("//;\n1;2")).toBe(3);
})

/*test  12*/
test("Negative elements with delimiter are not allowed",()=>{
    let to_pass = "//;\n-1;-2;-3;0;17;90";
    let regexpression=/[\n,]+/;
    if(to_pass.length>=4 && to_pass.substring(0,2)=="//" && to_pass[3]=="\n")
    {
        let parameter = "[\\n"+to_pass[2]+"]+"
        regexpression = new RegExp(parameter);
        to_pass = to_pass.substring(4);
    }
    
    const list_of_numbers = to_pass.split(regexpression);
    let negative_elements=[];

    list_of_numbers.forEach(element=>{
        if(+element<0)negative_elements.push(+element);
    })

    try{
        calcObject.add(to_pass);
    }
    catch(error)
    {
        expect(error).toBeInstanceOf(TypeError);
        expect(error).toHaveProperty('message', "Negatives not allowed. Negative elements are: " + negative_elements);
    }
})