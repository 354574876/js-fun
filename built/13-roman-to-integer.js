var ROMAN_MAP;
(function (ROMAN_MAP) {
    ROMAN_MAP[ROMAN_MAP["I"] = 1] = "I";
    ROMAN_MAP[ROMAN_MAP["V"] = 5] = "V";
    ROMAN_MAP[ROMAN_MAP["X"] = 10] = "X";
    ROMAN_MAP[ROMAN_MAP["L"] = 50] = "L";
    ROMAN_MAP[ROMAN_MAP["C"] = 100] = "C";
    ROMAN_MAP[ROMAN_MAP["D"] = 500] = "D";
    ROMAN_MAP[ROMAN_MAP["M"] = 1000] = "M";
    ROMAN_MAP[ROMAN_MAP["a"] = 4] = "a";
    ROMAN_MAP[ROMAN_MAP["b"] = 9] = "b";
    ROMAN_MAP[ROMAN_MAP["c"] = 40] = "c";
    ROMAN_MAP[ROMAN_MAP["d"] = 90] = "d";
    ROMAN_MAP[ROMAN_MAP["e"] = 400] = "e";
    ROMAN_MAP[ROMAN_MAP["f"] = 900] = "f";
})(ROMAN_MAP || (ROMAN_MAP = {}));
function romanToInt(s) {
    s = s
        .replace(/IV/g, 'a')
        .replace(/IX/g, 'b')
        .replace(/XL/g, 'c')
        .replace(/XC/g, 'd')
        .replace(/CD/g, 'e')
        .replace(/CM/g, 'f');
    const str = s.split('');
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result += ROMAN_MAP[str[i]];
    }
    return result;
}
