let array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
let oldArray = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

function countWater(array, oldArray) {
    let maxVal = getMaxOfArray(array);
    let maxIndex = array.indexOf(maxVal);
    let i = 0;
    array.reduce((v, currentValue, index, arr) => {
        let previousValue = array[index - 1]
        if (maxIndex > index) {
            if (previousValue > currentValue) {
                array[index] = previousValue;
            }

        }
    });
    array.reduceRight((v, currentValue, index, arr) => {
        let previousValue = array[index + 1]
        if (maxIndex < index) {
        	if (previousValue > currentValue) {
                array[index] = previousValue;
            }
        }
    });
    let newArrayCount = array.reduce((a, b) => a + b);
    let oldArrayCount = oldArray.reduce((a, b) => a + b);

    let result = newArrayCount - oldArrayCount;
    console.log(result)
}

function getMaxOfArray(array) {
    return Math.max.apply(null, array);
}
