const given = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]

const concat = a => b => [...a, ...b]
console.log(concat(['a'])(['b']))


const flattenAndSort = a => 
  a.reduce((a, b) => 
    concat(a)(b), [])
  .sort((a, b) => a - b)

  console.log(flattenAndSort(given))