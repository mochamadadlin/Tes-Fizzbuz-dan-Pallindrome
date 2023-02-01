function ispolindrome(str){
    str =str.toLocaleLowerCase();
    return Array.from(str).toString() === Array.from(str).reverse().toString();
}
 
let tes=ispolindrome("katak")
let tes=ispolindrome("malam")
console.log(tes)