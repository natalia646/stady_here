function explorer(htmlElement) {
  console.log(htmlElement);
  const children = htmlElement.children;
  if (children.length !== 0) {
    for (const child of children) {
      explorer(child);
    }
  }
}
// explorer(document.body)

function changeWordsOrder(str) {
  return str
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .join(" ");
}
// console.log(changeWordsOrder("Hello World my dear friends"))

function oddEvenNumber(num) {
  let odd = 0;
  let even = 0;
  String(num)
    .split("")
    .map((v) => (Number(v) % 2 ? even++ : odd++));

  return { odd: odd, even: even };
}
// console.log(oddEvenNumber(749));

// function nearestSq(n) {
//   let num = n;
//   const int = Number.isInteger(Math.sqrt(n));
//   if (int) {
//     return n;
//   } else {
//     let minus;
//     let stepM = 0;
//     while (!int) {
//       minus = --n;
//       stepM++;
//     }

//     let plus;
//     let stepP = 0;
//     while (!Number.isInteger(Math.sqrt(num))) {
//       plus = ++num;
//       stepP++;
//     }
//     return stepP < stepM ? plus : minus;
//   }
// }




