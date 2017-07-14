filterLucky = x => {
  return x.filter(n => {
    if(((''+ n).match(/7/i)||[]).length > 0) return n
  })
}

console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]), [7,70,17])