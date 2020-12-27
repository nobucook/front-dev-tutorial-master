document.addEventListener('DOMContentLoaded', function(){
  const ta = new TweenTextAnimation('.tween-animate-title');
  ta.animate();
});


// onclick="document.querySelector('.animate-title').classList.toggle('inview');"

class TextAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");//trim()で文字列の前後の空白を削除する。
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((accu,curr) => {
      curr = curr.replace(' ', '&nbsp;');
      return `${accu}<span class="char">${curr}</span>`;   
    },"");
  }
  animate() {
      this.DOM.el.classList.toggle('inview');
  }
};

class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);//superでもとのclassのconstructorを継承する。
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    console.log(this.DOM.chars);
  }
  animate() {//元のanimate()を上書きすることもできる。（オーバーライド）
    this.DOM.el.classList.add("inview");
    this.DOM.chars.forEach((c, i) => {
      TweenMax.to(c, .6, {
        ease: Back.easeOut,
        delay: i * .05,
        startAt: { y: '-50%', opacity: 0},
        y: '0%',
        opacity: 1
      });
    });
  }
}








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
