const GetSum = (a, b) => {
  if (a === b) return a
  const [start, end] = [a, b].map(i => 
    [...[
      ...Array(Math.abs(i)).keys(), 
      Math.abs(i)
    ]].map(ii => Math.sign(i) === -1 ? -ii : ii))

  const sorted = [...start, ...end]
    .filter(( i, k, a ) => 
      a.indexOf(i) == k )
    .sort((a, b) => a - b)

  if(a < b) {
    return sorted
    .slice(sorted.indexOf(a), sorted.indexOf(b) + 1)
    .reduce((a, i) => a + i)
  }

  if(a > b) {
    return sorted
      .slice(sorted.indexOf(b), sorted.indexOf(a) + 1)
      .reduce((a, i) => a + i)
  }
} 

// function GetSum(a,b)
// {
//   return (Math.abs(a - b) + 1) * (a+b) / 2;
// }


console.log(GetSum(0,1),1)
console.log(GetSum(-5,-3),-12)
console.log(GetSum(-2,0),1)
console.log(GetSum(0,4),10)
console.log(GetSum(4,0),10)
console.log(GetSum(0,-1),-1)
console.log(GetSum(-160, -70), -10465)