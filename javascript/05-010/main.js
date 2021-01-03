const child = document.querySelector('.child');
const cb = function(entries, observer) {//entriesは監視対象を複数個
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("inview");
    } else {
      entry.target.classList.remove("inview");
    }
  }) 
}

const options = {
  root: null,
  rootMargin: "-200px 0px",
  threshold: 1

}
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child2);
// io.observe(child3);