const loveme= document.querySelector(".loveme");
const times = document.querySelector('#times');

let timesclicked = 0;


// Double click as dbclick

let clicktime = 0;

loveme.addEventListener('click',(e)=>{
    // console.log("Hey");

     if(clicktime == 0){
            clicktime = new Date().getTime();
        // console.log("hello"); //one click

    }else{
        if((new Date().getTime()-clicktime) < 1000){
            // console.log("I am two"); // two click


            createheart(e)
            clicktime = 0;

        }else{
            clicktime = new Date().getTime();
        }
    }
});


const createheart = (e)=>{
    const heart = document.createElement('i');
    // heart.className = "fas fa-heart";

    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const cx = e.clientX;
    const cy = e.clientY;

    const topoffset = e.target.offsetTop;
    const leftoffsete = e.target.offsetLeft;

    const xinside = cx - leftoffsete;
    const yinside = cy - topoffset;


    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    loveme.appendChild(heart);

    times.textContent= ++timesclicked;

    setTimeout(()=>heart.remove(),1000);
    
}