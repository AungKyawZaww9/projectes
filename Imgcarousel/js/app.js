// UI

const imgcarousels = document.getElementById('imgcarousel');
// console.log(imgcarousels);

const imgs = document.querySelectorAll('#imgcarousel img');
// console.log(imgs);

const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

// console.log(leftbtn);
// console.log(rightbtn);

let idx = 0;

rightbtn.addEventListener('click',()=>{
    // console.log('hello');

    idx++; //right
    // idx--; //left
    // console.log(idx);

    changeimage();
    resetinterval();
});

leftbtn.addEventListener('click',()=>{
    idx--;
    // console.log(idx);

    changeimage();
    resetinterval();

});


function changeimage(){

    if(idx > imgs.length-1){
        idx = 0;
    }else if(idx < 0){
        idx = imgs.length-1;
    }

    // console.log(idx);
    imgcarousels.style.transform = `translate(${-idx * 500}px)`;
}

let interval = setInterval(imgrun, 2000);

function imgrun(){
    idx++;
    changeimage();
}

function resetinterval(){
    clearInterval(interval);
    interval = setInterval(imgrun,2000);
    // setInterval(imgrun,2000); //don't do it

}