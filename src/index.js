module.exports = function toReadable(number) {
    var stringNumber = number.toString();
    var readableNumber;
    switch (stringNumber.length) {
        case 1:
            switch (number) {
                case 0:
                    return "zero";
                case 1:
                    return "one";
                case 2:
                    return "two";
                case 3:
                    return "three";
                case 4:
                    return "four";
                case 5:
                    return "five";
                case 6:
                    return "six";
                case 7:
                    return "seven";
                case 8:
                    return "eight";
                case 9:
                    return "nine";
            }
        case 2: {
            var numberSplit = stringNumber.split("");
            switch (number) {
                case 10:
                    return "ten";
                case 11:
                    return "eleven";
                case 12:
                    return "twelve";
                case 13:
                    return "thirteen";
                case 14:
                    return "fourteen";
                case 15:
                    return "fifteen";
                case 16:
                    return "sixteen";
                case 17:
                    return "seventeen";
                case 18:
                    return "eighteen";
                case 19:
                    return "nineteen";
            }
            switch (true) {
                case number <= 29:
                    readableNumber = "twenty";
                    break;
                case number <= 39:
                    readableNumber = "thirty";
                    break;
                case number <= 49:
                    readableNumber = "forty";
                    break;
                case number <= 59:
                    readableNumber = "fifty";
                    break;
                case number <= 69:
                    readableNumber = "sixty";
                    break;
                case number <= 79:
                    readableNumber = "seventy";
                    break;
                case number <= 89:
                    readableNumber = "eighty";
                    break;
                case number <= 99:
                    readableNumber = "ninety";
                    break;
            }
            if (numberSplit[1] !== "0") {
                readableNumber =
                    readableNumber + " " + toReadable(parseInt(numberSplit[1]));
            }
            return readableNumber;
        }
        case 3: {
            var numberSplit = stringNumber.split("");
            readableNumber =
                toReadable(parseInt(numberSplit[0])) + " " + "hundred";
            if (parseInt(numberSplit[1] + numberSplit[2]) != 0)
                readableNumber +=
                    " " + toReadable(parseInt(numberSplit[1] + numberSplit[2]));
            return readableNumber;
        }
    }
};
