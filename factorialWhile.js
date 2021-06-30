
function fact(){
    var i = 1;
    var factorial = 1;
    while(i <= 5){
        factorial = factorial*i;
        i++;
    }
    return factorial;
}
var result = fact(5);
console.log(result);