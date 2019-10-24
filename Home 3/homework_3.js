createMessage = (message) => {
    let messageArray = message.split('');
    let result = [];
    messageArray.forEach((messageItem, messageIndex) => {

        const buttonsAlphabet = [
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i'],
            ['j', 'k', 'l'],
            ['m', 'n', 'o'],
            ['p', 'q', 'r', 's'],
            ['t', 'u', 'v'],
            ['w', 'x', 'y', 'z'],
            [' ']
        ];

        buttonsAlphabet.forEach((buttonItem, buttonNumber) => {
            buttonNumber = buttonNumber + 1;
            buttonItem.forEach((letter, letterIndex) => {
                let countClicks = letterIndex + 1;
                if (messageItem === letter) {
                    result.push('button ' + buttonNumber + ' - tap ' + countClicks + ' times')
                }
            })
        });
    });

    return result.join("\n");
};