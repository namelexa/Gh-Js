/* myForEach */
let arr = [1, 2, 3];

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
};

arr.myForEach(function(item) {
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
Array.prototype.mySort = function (callback){
    for(let i =0;i<badSort.length;i++){
        for(let j= i+1;j<badSort.length;j++){
            if(badSort[i]>badSort[j]){
                let swap = badSort[i];
                badSort[i] = badSort[j];
                badSort[j] = swap;
            }
        }
    }
    return badSort;
};

console.log('goodSort', badSort.mySort());