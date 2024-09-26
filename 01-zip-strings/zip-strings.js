function zipStrings(strA, strB) {
  let output = "";
  let minLength = Math.min(strA.length, strB.length);

  for (let i = 0; i < minLength; i++) {
    output += strA[i] + strB[i];
  }

  if (strA.length > strB.length) {
    output += strA.slice(minLength);
  }

  if (strB.length > strA.length) {
    output += strB.slice(minLength);
  }

  return output;
}

console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"

console.log (zipStrings("aubvcwxyz", "aubvcw")) // 'aubvcwwxyz'