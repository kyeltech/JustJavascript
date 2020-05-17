// example 1

// function greet(who) {
//     console.log('Hello' +  who)
// }
// greet(' harry');
// console.log('bye')
// a callback function work as if said above but mainly its helps in calling a declared function from the top or bottom as you 
// can see that the greet variable was call back to give it a value so it can work with the hello string text
// Example 2
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first")