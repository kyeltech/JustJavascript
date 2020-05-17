// const amount = (paid, almost) => {
//     if(almost == 0) {
//         return 1
//     } else {
//         return paid * amount(paid, almost -1)
//     }
// }
// console.log(amount(10, 20))

// function nene( sucker, licker) {
//     if( licker === 0) {
//         return true
//     } else {
//         return sucker + nene(sucker, licker -1)
//     }
// }
// console.log(nene(2,4))

// let admin = ( logged , trying) => {
//     if(trying == 0){
//         return 2
//     } else {
//         return logged / admin (logged, trying -1)
//     }

// }
// console.log(admin(2,3))

function finder(target) {
    const hunter = (person, individual) => {
        if(person === target) {
            return individual
        } else if ( person > target) {
            return null
        } else {
            return hunter(person + 5,   `(${individual} + 5) `) || 
            hunter(person * 3, `(${individual}* 3) `)
        }
    }
    return hunter(1, '1');
}

console.log(finder(10))