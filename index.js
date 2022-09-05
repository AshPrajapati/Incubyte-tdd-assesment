class StringCalculator {
  constructor() {}

  /*
        access modifier: public
        method:add
        parameter: string 
    */
  add(numbers) {
    //when the string is empty
    if (numbers == "") return 0;

    let regexpression = /[\n,]+/;

    //Conditions for delimiter
    if (
      numbers.length >= 4 &&
      numbers.substr(0, 2) == "//" &&
      numbers[3] == "\n"
    ) {
      let parameter = "[\\n" + numbers[2] + "]+";
      regexpression = new RegExp(parameter);
      numbers = numbers.substr(4);
    }

    //list of numbers split by regex
    const list_of_numbers = numbers.split(regexpression);
    let sum = 0;
    let negative_elements = [];

    //iterating on each element in the list_of_numbers
    list_of_numbers.forEach((element) => {
      //handling lower case alphabet
      if (element.length == 1 && element >= "a" && element <= "z")
        sum += element.charCodeAt(0) - 97 + 1;
      //handling the case when number is greater than 1000 and non empty string
      else if (element != "" && +element <= 1000 && +element >= 0)
        sum += +element;
      //handling case for negative elements
      else if (+element < 0) {
        negative_elements.push(+element);
      }
    });

    if (negative_elements.length>=1) {
      //throw error with message
      throw new TypeError(
        "Negatives not allowed. Negative elements are: " + negative_elements
      );
    }
    return sum;
  }
}

module.exports = StringCalculator;
