//UI

const bg = document.querySelector('.bg');
// console.log(bg);

const loadtext = document.querySelector('.loading-text');
// console.log(loadtext);


let load = 0;

let int = setInterval(blur,30);

function blur(){
    load++;

    if(load > 99){
        clearInterval(int);
    }

    // console.log(load);

    loadtext.innerHTML = `${load}%`;
    loadtext.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,70,0)}px)`;

}

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num - inmin) * (outmax-outmin) / (inmax - inmin) + outmin;
}

// console.log(scale(100,0,100,1,0));

