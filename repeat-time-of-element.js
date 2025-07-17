function checkItemRepeat(itemName, list) {
  var count = 0;

  for (var i = 0; i < list.length; i++) {
    if (list[i] === itemName) {
      count++;
    }
  }
  return count;
}

var x = checkItemRepeat("karma", [
  "karma",
  "karma",
  "salma",
  "eman",
  "nehal",
  "sewa",
]);
console.log(x);
