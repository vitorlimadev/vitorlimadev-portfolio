const scrollFadeItens = document.querySelectorAll('.fade-in');

const options = {};

const scrollObserver = new IntersectionObserver((entries, scrollObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.add('fade-in-appear');
  });
}, options);

scrollFadeItens.forEach(item => {
  scrollObserver.observe(item);
});

