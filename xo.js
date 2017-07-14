function XO(s){
  return (s.match(/x/ig)||[]).length === (s.match(/o/ig)||[]).length
}


console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);