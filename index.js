class StringCalculator{
    constructor(){}

    add(numbers)
    {
        if(numbers=="")return 0;
    
        if(numbers.length==1 && +numbers>=0 && +numbers<=9)return +numbers;
    
    }
};

module.exports=StringCalculator;
