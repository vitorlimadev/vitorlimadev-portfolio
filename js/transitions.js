const scrollFadeItens = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.1
};

const scrollObserver = new IntersectionObserver((entries, scrollObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target);
      entry.target.classList.add('appear');
    }

  });
}, options);

scrollFadeItens.forEach(item => {
  scrollObserver.observe(item);
});

