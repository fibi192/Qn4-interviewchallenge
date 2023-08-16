// Sample array of strings
let arr = [ "abc", "car", "ada", "racecar", "cool" ];

// Get the length of the array
let N = arr.length;

// Function to check if a string is a palindrome
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Function to find palindromic strings in an array
function PalindromicStrings(words, length) {
    let result = [];

// Iterate through each word in the array and Check if the current word is a palindrome and add it to the result array and return result
    for (let word of words) {
        if (isPalindrome(word)) {
            result.push(word);
        }
    }
    return result;
}

// Print required answer
let s = PalindromicStrings(arr, N);

// Check if any palindromic strings were found
if (s.length == 0) {
    document.write("-1"); // No palindromic strings found
} else {
    for (let st of s) {
        document.write(st, " ");
    }
}
