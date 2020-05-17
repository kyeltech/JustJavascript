// declaring an object with a value

// let paul={
//     surname: 'sheldock',
//     address:{city: 'Abuja'}
// }
// declaring another object with a value but calling the address from the previous object
// let maxwell = {
//     surname : 'Meyer',
//     address: paul.address
// }
// changing(mutating)the value of paul because paul and maxweel location because maxwell decides he wants a change of address wants to change his identity from the previous one
// wrong approach
// maxwell.surname = 'deruvel',
// maxwell.address.city = 'Merlin'
// best approach
// maxwell.surname = 'daruvel'
// maxwell.address = { city: 'Merlin'}
// another approach is reassigning maxwell properties
//  maxwell = {
//      surname: 'daruverl',
//      address : { city: 'Merlin'}
//  }
// console.log(maxwell)

//  const spreadsheet = { title : 'sales'};
//  const copy = spreadsheet;
// copy.title += '(copy)'

// console.log(spreadsheet.title)

// const music =  { 
//     name : 'jasmine',
//     taste = {type : 'rap'} 
// };
    
//     onion.taste.type = 'umani',

// console.log(music.taste)

// console.log(music.taste) 

let ilana = {
    address : { city : 'New York'}
};
let place = ilana.address
place = { city : 'Boulder'};
let addi = {
    address :place
};
console.log(addi.address.city)