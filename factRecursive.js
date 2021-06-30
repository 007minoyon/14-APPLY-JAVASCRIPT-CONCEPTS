
//example for factorial
// 5!=1*2*3*4*5
// 6!=(6-1)!*6
// 7!=(7-1)!*7
//n!=(n-1)*n
// n!=n*(n-1)



function factrecursive(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factrecursive(n-1);
    }
}
var result = factrecursive(5);
console.log(result);


