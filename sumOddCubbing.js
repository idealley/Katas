const cubeOdd = array => {
    return array.every(a => !isNaN(a)) ? array
      .filter(a => a % 2 !== 0)
      .reduce((a, b) => a + Math.pow(b, 3), 0) 
      : undefined
}

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3,-2,2,3]), 0);
console.log(cubeOdd(["a",12,9,"z",42]), undefined);