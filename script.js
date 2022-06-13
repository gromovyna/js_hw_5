
do{
    operation = prompt("Виберіть математичну операцію (+ - / *)")
} while(operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*" );

do{
    countOfOperands = parseInt(prompt("Скільки чисел ви хочете використати?").replaceAll(" ", ""));
} while(countOfOperands >= 7 || countOfOperands <= 1 || isNaN(countOfOperands));


result = 0;
for(i = 1; i <= countOfOperands; i++){
    do {
        number = parseInt(prompt(`Введіть число ${i}`).replaceAll(" ", ""));
    } while(isNaN(number))
    
    if(operation === "+") {
        result += number;
    } else if(operation === "-") {
        if(i === 1) {
            result = number;
        } else {
            result -= number;
        }
    } else if(operation === "*") {
        if(i === 1) {
            result = 1;
        }
        result *= number;
    } else {
        if(i === 1) {
            result = number;
        } else {
            result /= number;
        }
    }
}
alert(result);