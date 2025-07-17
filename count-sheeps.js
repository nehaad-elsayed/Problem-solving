



// first solution => map

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => {
        if (sheep === true) {
            return sheep;
        }
    }).length;
}

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));


// another solution => for loop

// function countSheeps(arrayOfSheep) {
//     let count = 0;
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] === true) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));




