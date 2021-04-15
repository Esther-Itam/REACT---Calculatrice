export const calc = (number1, number2, operator)=>{
    let calcResult = 0;
    switch(operator){
        case "+":
            return calcResult = parseFloat(number1) + parseFloat(number2)
        case "-":
            return calcResult = number1 - number2 
        case "*":
            return calcResult = number1 * number2
        case "/":
            return calcResult = number1 / number2
        default:
            return calcResult;                    
    }

}