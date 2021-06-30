// Program to check leap year
function checkLeapYear (year){
    if(( 0 == year % 4) && ( 0 != year % 100) || (0 == year%400)){
        console.log(year + 'is a leap year');
    }else{
        console.log(year + 'is not a leap year');
    }
}
let nowYear = checkLeapYear(2025);
console.log(nowYear);