class StringCalculator{
    constructor(){}

    add(numbers)
    {
        if(numbers=="")return 0;
    
        if(numbers.length==1 && +numbers>=0 && +numbers<=9)return +numbers;

        const list_of_numbers = numbers.split(/[\n,]+/);
        let sum=0;

        list_of_numbers.forEach(element => {
            if(element.length==1 && element>='a' && element<='z')sum+=(element.charCodeAt(0)-97+1);
            else if(element!='' && ((+element)<=1000) && ((+element)>=0))sum+=(+element);
        });
        return sum;
    }
};

module.exports=StringCalculator;
