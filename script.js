const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.3 });

items.forEach(i => observer.observe(i));

const card = document.querySelector('.card');
let opened = false;

card.addEventListener('click', () => {
  if(!opened){
    card.classList.add('open');
    opened = true;
  }
}) 