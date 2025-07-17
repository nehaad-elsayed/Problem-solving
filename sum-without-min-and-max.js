//check if the array is empty or has a one value ---->>>return 0
//find the heighest number 
//find the lowest number 
//filter array -->to get the new arr without the heighest and the lowest
//sum all numbers of the new array




function sumWithoutTheHieghestAndTheLowestNumber(array){

if(array===null || array.length <= 1)
    return 0;

var maxNum=Math.max(...array);
var minNum=Math.min(...array);

var filterdArray=array.filter((num) => num !== maxNum &&  num !==minNum  );
var newArray=filterdArray.reduce((acc ,current) => acc + current ,0);
console.log(newArray);

}

// sumWithoutTheHieghestAndTheLowestNumber([]); ---> return 0 because the array is Null 

 sumWithoutTheHieghestAndTheLowestNumber([1,2,5,8,6,3]);


