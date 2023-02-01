const isPalindrome = (input: number): boolean => {
    const string = input.toString();
    for (let i = 0, j = string.length - 1; i < j; ++i, --j) {
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
};


// Usage example:

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12.21)); // true
console.log(isPalindrome(454));   // true
console.log(isPalindrome(123));   // false
console.log(isPalindrome(3.14));  // false