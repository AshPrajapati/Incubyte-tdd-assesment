class StringCalculator{
    constructor(){}

    add(numbers)
    {
        if(numbers=="")return 0;
    
        if(numbers.length==1 && +numbers>=0 && +numbers<=9)return +numbers;

        const list_of_numbers = numbers.split(",");
        let sum=0;

        list_of_numbers.forEach(element => {
            if(element!='')sum+=(+element);
        });
        return sum;
    }
};

module.exports=StringCalculator;
