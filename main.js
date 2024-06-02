function ArraySum(arr) {
    let ArrayOrder = arr.sort((a,b) => {
        return a-b;
    });

    let largest = ArrayOrder.pop()

    let number = 0;
    ArrayOrder.forEach(item => (number += item));

    return largest === number;
} 

console.log(ArraySum([1,6,4,2,13]));
// return true 1+2+3+4+6=13

console.log(ArraySum([1,2,4,34,22]));
//return false 1+2+4+22=29 29!=34