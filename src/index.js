module.exports = function toReadable(number) {
    const dict = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (number in dict) {
        return dict[number];
    }

    if (number < 100) {
        const dozen = number - (number % 10);
        return dict[dozen] + " " + dict[number - dozen];
    }

    if (number < 1000) {
        const hundreds = (number / 100) | 0;
        const rest = number % 100;
        return (
            dict[hundreds] +
            " hundred " +
            (rest === 0 ? "" : toReadable(rest))
        ).trim();
    }
};
