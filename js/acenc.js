const container = document.querySelector(".container");
fetch(`https://restcountries.com/v3.1/name/ukraine`)
    .then(response => response.json())
    .then(data => console.log(data[0]));



function getCountri(nameCountri) {
  fetch(`https://restcountries.com/v3.1/name/${nameCountri}`)
    .then((response) => response.json())
    .then((dataArr) => {
      const [data] = dataArr;

      const currenciName = Object.values(data.currencies)[0].name;
      const currenciSymbol = Object.values(data.currencies)[0].symbol;
      const language = Object.values(data.languages)[0];

      const article = `
<article>
    <img src="${data.flags.png}" alt="${data.flags.alt}" />
    <div>
      <h3>${nameCountri}</h3>
      <h4>${data.region}</h4>
      <p>${(data.population / 1000000).toFixed(1)} million</p>
      <p>${language}</p>
      <p>${currenciSymbol} ${currenciName}</p>
    </div>
</article>.`;

      container.insertAdjacentHTML("beforeend", article);

    });
}
getCountri("Ukraine");
getCountri("USA");
// getCountri("Italy");


// function job1(){
//   return new Promise(function(resolve, reject){
//     reject();
//   })
// }

// let promise = job1();

// console.log(promise)

// promise
// .then(function(){
//   console.log('S 1')
// })
// .then(function(){
//   console.log('S 2')
// })
// .then(function(){
//   console.log('S 3')
// })
// .catch(function(){
//   console.log('E 1')
// })
// .then(function(){
//   console.log('S 4')
// })

//****************************************************** */
// function job(state){
//   return new Promise(function(resolve, reject){
//     if(state){
//       resolve('success');
//     }else{
//       reject('error')
//     }
//   })
// }

// let promise = job(true);

// console.log(promise)

// promise
// .then(function(data){
//   console.log(data)
//   return job(false)
// })
// .catch(function(error){
//   console.log(error)
//   return 'Eror'
// })
// .then(function(data){
//   console.log(data)
//   return job(true)
// })
// .catch(function(error){
//   console.log(error)
// })

//******************************************** */

// const myPromise = () => Promise.resolve('I have');
// function first (){
//   myPromise().then(res => console.log(res));
//   console.log('second')
// }
// async function second(){
//  console.log(await myPromise());
//  console.log('second')
// }
// first()
// second()

//********************************* */
// async function* range(start, end){
//   for(let i = start; i <= end; i++){
//     yield Promise.resolve(i)
//   }
// }

// (async () => {
//   const gen = range(1, 3);
//   for await (const item of gen){
//     console.log(item)
//   }
// })();
