// function name(fname, nama) {
//     let person = []
//     for(i = 0; arr.length < 2; i++) 
//     if(name < 2 && name === 2){
//         return true
//     } else {
//         return  false
//     }
// }
// console.log('zikel', 'sname')
const power = (base, exponent) => {
    let result = 1;
    for(let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power)