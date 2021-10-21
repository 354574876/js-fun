enum ROMAN_MAP {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000,
  a = 4,
  b = 9,
  c = 40,
  d = 90,
  e = 400,
  f = 900,
}
declare type ROMAN_MAP_TYPE = keyof typeof ROMAN_MAP
function romanToInt(s: string): number {
  s = s
    .replace(/IV/g, 'a')
    .replace(/IX/g, 'b')
    .replace(/XL/g, 'c')
    .replace(/XC/g, 'd')
    .replace(/CD/g, 'e')
    .replace(/CM/g, 'f')
  const str: string[] = s.split('')
  let result: number = 0
  for (let i: number = 0; i < str.length; i++) {
    result += ROMAN_MAP[str[i] as ROMAN_MAP_TYPE]
  }
  return result
}
