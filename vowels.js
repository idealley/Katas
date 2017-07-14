function getCount(s) {
  return [...s].reduce((a, v) => ['a', 'e', 'i', 'o', 'u'].indexOf(v) != -1 ? a + 1 : a, 0)
}

console.log(getCount('abrocadabra'), 5)