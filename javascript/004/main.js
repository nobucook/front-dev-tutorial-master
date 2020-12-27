const child = document.querySelector('.child');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
      //observer.unobserve(entry.target);//監視を止める。entry.targetにはchildのDOMが参照される。
    } else {
      entry.target.classList.remove('inview');
      // console.log('out view');
    }
  });
}
//IntersectionObserverのオプション
const option = {
  root: null,//デフォルトでは現在の表示画面との交差を監視する。親要素や、先祖要素との交差の監視の場合、rootで要素（DOM）設定する。※あまり使わない。
  rootMargin: "-100px 0px",//pxか%をつける。0の場合でも。マイナスで設定すると画面の内側。
  threshold: 1//要素の導入部分が0,要素の終了部分が1で交差するポイントを設定する。配列で渡すことも可能[0, 0.5, 1]要素が大きい時に使う。
};

const io = new IntersectionObserver(cb, option);
io.observe(child);
