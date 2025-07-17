// n => عدد مرات التكرار
// str => الاسترنج اللي هيتكرر

// function repeatString(n, str) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += str;
//   }
//   return result;
// }
// console.log(repeatString(3, " hello "));

// الحل ال advanced

function repeatString(n, str) {
  return str.repeat(n);
}
console.log(repeatString(3, " hello "));

//reapeat is built in function in javascript
