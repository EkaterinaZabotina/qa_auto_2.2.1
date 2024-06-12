function increaseBalance(x, y) {
x = x + y;
return x;
}

function decreaseBalance(x, y) {
x = x - y;
return x;
}

function divideBalanceByAccounts(balance, accNumber) {
let average = balance / accNumber;
return average;
}

function getRestAfterDivision(x, y) {
x = x % y;
return x;
}

function getIncrementPost(x) {
    return x++;
}

function getIncrementPre(x) {
    return ++x;
}

function getIncrementPost(x) {
    return x++;
}

function getIncrementPre(x) {
    return ++x;
}

function getDecrementPost(x) {
    return x--;
}

function getDecrementPre(x) {
    return --x;
}
console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
console.log(getIncrementPost(3));
console.log(getIncrementPre(3));
console.log(getDecrementPost(3));
console.log(getDecrementPre(3));


let x = 3;
const y = x++;
console.log(x,y)