// const obj = {
//   first_name: 'Tomonobu',
//   last_name: 'Nakamura',
//   printFullName: function(){
//     console.log(this);

//     window.setTimeout(function() {
//       console.log(this);
//     }.bind(this));
//   }
// }

// obj.printFullName();
const h1 = document.querySelector('h1');
const red = () =>  h1.style.color = "red";
document.addEventListener('DOMContentLoaded', red);
const btn = document.querySelector('button');
const blue = function() {
  h1.classList.toggle("blue");
};
btn.addEventListener('click',blue);


str = "animation"
arryString = str.split("")

function tag(accu, curr) {
  return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultvalue) {
  let accu = defaultvalue;
  for(i = 0; i < arry.length; i++) {
    let curr = arry[i];
    accu = callback(accu, curr);
  }
  return accu;
}

const result = reduce([1,2,3,4,5],tag, "");
console.log(result);

const example = arryString.reduce(tag,"")
console.log(example);
