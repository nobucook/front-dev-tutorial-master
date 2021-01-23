class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper =  this._initSwiper();
  }
   
  _initSwiper() {
    return new Swiper(this.el, {
      loop: true,
      grabCursor: true,//カーソルが手袋になる。
      effect: 'coverflow',
      centeredSlides: true,//スライドが中央揃えになる。
      slidesPerView: 1,//表示は一枚だけを明示的に記述する。
      speed: 1000,//slideからslideのdurationが1000
      breakpoints: {//画面サイズに合わせての変更
        1024: {
          slidesPerView: 2,//1024以上の時は、スライドが2枚分
        }
      },
      // autoplay: {//自動でスライドが切り替わる。
      //   delay: 4000,//4秒ごとに切り替わる。
      //   disableOnInteraction: false//マウスで操作してもスライドの自動切り替えが残る。デフォルトはマウスで操作すると自動切り替えは解除される。
      // }
    });
  }

  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false
    }, options);//=>デフォルトと引数で渡したoptionsをマージしてoptionsに代入する。
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();//swiperのメソッドのautplayプロパティのstart()メソッドを呼ぶ。
  }

  stop() {
    this.swiper.autoplay.stop();
  }

  }