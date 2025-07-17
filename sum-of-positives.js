/* function sumOfPositives(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

var x = sumOfPositives([1, 2, -2, -3, 5, 8, 9, 7]);
console.log(x);
 */


// another solution...>>>>>>>>

function sumOfPositives(arr) {
                                        //init value,  current value
                                      //        0      3
  return arr.filter((num) => num > 0).reduce((acc, current) => acc + current,0);
}

var y = sumOfPositives([3, -2, 5, 9]);
console.log(y);

