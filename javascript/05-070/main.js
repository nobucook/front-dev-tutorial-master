document.addEventListener('DOMContentLoaded', function(){
  const hero = new HeroSlider('.swiper-container');
  hero.start({delay:100});//autplayがスタートする。


  setTimeout(() => {
    hero.stop();
  },5000);
});



