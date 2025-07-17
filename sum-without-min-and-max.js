//check if the array is empty or has a one value ---->>>return 0
//find the heighest number
//find the lowest number
//filter array -->to get the new arr without the heighest and the lowest
//sum all numbers of the new array

// function sumWithoutTheHieghestAndTheLowestNumber(array){

// if(array===null || array.length <= 1)
//     return 0;

// var maxNum=Math.max(...array);
// var minNum=Math.min(...array);

// var filterdArray=array.filter((num) => num !== maxNum &&  num !==minNum  );
// var newArray=filterdArray.reduce((acc ,current) => acc + current ,0);
// console.log(newArray);

// }

// sumWithoutTheHieghestAndTheLowestNumber([]); ---> return 0 because the array is Null

// sumWithoutTheHieghestAndTheLowestNumber([1, 2, 5, 8, 6, 3, 1, 8]); // 16 // عشان المن والماكس هيشيلو التكرارا

// عشان ال min وال max هيشيلو التكرار وانا مش عايز لو الرقم الكبير والصغير متكررين يتشالو عايز بس واحد اللي يتشال وبقيت التكرارات تتساب  ف هعمل حل تاني

function sumWithoutTheHieghestAndTheLowestNumber(array) {
  if (array === null || array.length <= 1) return 0;

  array.sort((a, b) => a - b);

  var newArray = array.slice(1, -1);

  var sum = newArray.reduce((acc, current) => acc + current, 0);

  console.log(sum);
}

sumWithoutTheHieghestAndTheLowestNumber([1, 2, 5, 8, 6, 3, 1, 8]); // 25 // عشان التكرار متحذفش

//Note  : معنى (a, b) => a - b

// (arrow function) بتاخد عنصرين من المصفوفة (a و b) وتقارنهم كالتالي:

// لو a - b < 0 ⇒ يعني إن a أصغر من b ⇒ يحط a قبل b

// لو a - b > 0 ⇒ يعني إن a أكبر من b ⇒ يحط b قبل a

// لو a - b === 0 ⇒ الاتنين متساويين ⇒ مفيش تغيير في الترتيب
