isPrime = num => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
};

factorial = num => {
    if (num === 0) {
        return 1;
    }
    if (num < 0) {
        return undefined;
    }
    for (let i = num; --i;) {
        num *= i;
    }
};

fibonacci = num => {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

isSorted = array => {
    const limit = array.length - 1;
    for (let i = 0; i < limit; i++) {
        const current = array[i], next = array[i + 1];
        if (current > next) {
            return false;
        }
    }
    return true;
};

reverse = (string) => {
    let reversed = '';
    let stringArray = string.split('');
    let length = stringArray.length - 1;
    stringArray.forEach(() => {
        reversed += stringArray[length];
        length--;
    });
    return reversed;
};

indexOf = (array, element) => {
    let index = -1;
    array.forEach((e, i) => {
        if (e == element) {
            index = i;
        }
    });
    return index;
};

isPalindrome = (string) => {
    let formattedString = string.replace(/[^\w]/gi, "").toLowerCase();
    return formattedString == formattedString.split('').reverse().join('');
};

missing = (array) => {
    const sortedArray = array.sort((a, b) => {
        return a - b;
    });
    let i = 0;
    if (sortedArray[i] === 0) {
        sortedArray.shift();
    }
    for (i; i < sortedArray.length; i++) {

        if (i + 1 !== sortedArray[i]) {
            return sortedArray[i] - 1;
        }
    }
};

isBalanced = (string) => {
    let open = [];
    const openBrackets = new Set(['(', '[', '{']);
    const bracketCorrespondence = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let c of string) {
        if (openBrackets.has(c)) {
            open.push(c);
        } else if (bracketCorrespondence[c] && open.pop() !== bracketCorrespondence[c]) {
            return false;
        }
    }
    return !open.length;
};
