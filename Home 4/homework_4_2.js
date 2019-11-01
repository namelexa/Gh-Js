/* myForEach */
let arr = [1, 2, 3];

function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

myForEach(arr, function(item) {
    console.log('myForeach', item);
});

/* myMap */
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let index = 0; index < this.length; index++) {
        result.push(callback(this[index], index, this));
    }
    return result;
};
let newArray = arr.myMap(function (val, index, array) {
   return val+ index;
});
console.log('newArray', newArray);

/* mySort */

let badSort = [3, 8, 51, 5, 1, 4, 2];

console.log('badSortArray', badSort);
badSort.sort(function(x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log('goodSort', badSort);