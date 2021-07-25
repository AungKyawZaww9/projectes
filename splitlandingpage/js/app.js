const container = document.querySelector('.container');
// console.log(container);

const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter',()=>{
    // console.log('hello');
   container.classList.add('hover-left');
  
});

left.addEventListener('mouseleave',()=>{
    // console.log('hello');
   container.classList.remove('hover-left');
  
});

right.addEventListener('mouseenter',()=>container.classList.add('hover-right'));
right.addEventListener('mouseleave',()=>container.classList.remove('hover-right'));