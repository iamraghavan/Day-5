let str = ["COCOC"];
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}