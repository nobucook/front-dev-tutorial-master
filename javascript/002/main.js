document.addEventListener('DOMContentLoaded', function(){
  const ta = new TextAnimation('.animate-title');
  const ta2 = new TextAnimation('.animate-title-2');
  ta.animate();
  console.log(ta);
  console.log(btn);
  ta2.animate();
  btn.addEventListener('click', ta.animate.bind(ta));//コールバック関数としてメソッドを渡す場合は、参照するオブジェクトは元のオブジェクト（この場合はbtn）
  btn.addEventListener('click', function(){//function()の中で使えばbindを使わなくてOK
    ta2.animate();
  });
});



// onclick="document.querySelector('.animate-title').classList.toggle('inview');"

class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((accu,curr) => {
      curr = curr.replace(' ', '&nbsp;');
      return `${accu}<span class="char">${curr}</span>`;   
    },"");
  }
  animate() {
      this.el.classList.toggle('inview');
  }
};









// const split = function() {
//   const animationTitle = document.querySelector('.animate-title').innerText;
//   arry = animationTitle.split("");
//   let addChar = '';
//   array.forEach(v => {
//     addChar  = addChar  + `<span class="char">${v}</span>`
//   });
//     document.querySelector('.animate-title').innerHTML = addChar;
// };

// document.addEventListener('DOMContentLoaded',split());
