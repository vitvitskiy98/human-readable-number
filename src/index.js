module.exports = function toReadable (number) {
    let predefinedCase = {
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
        90: "ninety"
    };
    let strNum = String(number);
    if(predefinedCase[number]) {
        return predefinedCase[number];
    } else if(strNum.length === 2) {
        return predefinedCase[+(strNum[0] + "0") ] + " " + predefinedCase[+strNum[1]];
    } else if(strNum.slice(1) === "00") {
        return predefinedCase[+strNum[0]] + " hundred";
    } else {
        return predefinedCase[+strNum[0]]+ " hundred " + toReadable(+strNum.slice(1));
    }
}
