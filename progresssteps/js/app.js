const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
// console.log(circles);

let currentactive = 1;

next.addEventListener('click',()=>{
    // console.log('hel');
    currentactive++;


    if(currentactive > circles.length){
        currentactive = circles.length;
    }
    update();
    // console.log(currentactive);
});

prev.addEventListener('click', ()=>{
    currentactive--;
    if(currentactive < 1){
        currentactive = 1;
    }
    update();

    // console.log(currentactive);
});

function update(){
    circles.forEach((circle,index)=>{
        // console.log(circle);
        if(index < currentactive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }


        if(currentactive === 1){
            prev.disabled = true;
        }else if(currentactive === circles.length){
            next.disabled = true;
        }else{
            prev.disabled = false;
            next.disabled = false;
        }

        const actives = document.querySelectorAll('.active');

        let act = actives.length -1;
        let cls = circles.length -1;
        console.log(act,cls);

        progress.style.width = (actives.length-1) / (circles.length-1) * 100 + "%";

    });
}

