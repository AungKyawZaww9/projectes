const body = document.body;
const slides = document.querySelectorAll('.slide');
// console.log(body);

const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');
// console.log(right);

let activeslide = 0;

//change background ph0to
function setbody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}

setbody();


//change in photo
function setactiveslide(){
    slides.forEach((slide)=>{
        // console.log(slide);
        slide.classList.remove('active');
    });

    slides[activeslide].classList.add('active');


}
// setactiveslide();

rightbtn.addEventListener('click',()=>{
    // console.log("hello");
    activeslide++;
    // console.log(activeslide);

    if(activeslide > slides.length - 1){
        activeslide = 0;
        
    }

    // console.log(activeslide);

    setbody(); // set background
    setactiveslide(); //set in photo

});


leftbtn.addEventListener('click',()=>{
    // console.log("he");
    activeslide--;
    // console.log(activeslide);

    if(activeslide < 0){
        activeslide = slides.length - 1;
    }

    // console.log(activeslide);

    setbody();
    setactiveslide();

});