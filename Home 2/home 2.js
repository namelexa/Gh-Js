function countWater(array) {
    const newArray = [...array];
    let maxVal = getMaxOfArray(array);
    let maxIndex = array.indexOf(maxVal);
    newArray.reduce((v, currentValue, index, arr) => {
        let previousValue = newArray[index - 1]
        if (maxIndex > index) {
            if (previousValue > currentValue) {
                newArray[index] = previousValue;
            }

        }
    });
    newArray.reduceRight((v, currentValue, index, arr) => {
        let previousValue = newArray[index + 1]
        if (maxIndex < index) {
            if (previousValue > currentValue) {
                newArray[index] = previousValue;
            }
        }
    });
    let newArrayCount = newArray.reduce((a, b) => a + b);
    let oldArrayCount = array.reduce((a, b) => a + b);

    let result = newArrayCount - oldArrayCount;
    console.log(result)
}
function getMaxOfArray(array) {
    return Math.max.apply(null, array);
}