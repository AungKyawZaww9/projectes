const textel = document.getElementById('text'); //input text 
const speeddel = document.getElementById('speed') //get value
// console.log(speeddel.value);

const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vel recusandae alias corporis obcaecati, officia totam repellat necessitatibus temporibus itaque quam in ipsam explicabo labore cumque molestias delectus cum? Repudiandae!";

let idx = 1; //စာတစ်လုံးစီပဲပေါစေချင်လို,
let speed = 30;
// console.log(speed);

function autotext(){
    // console.log("hello");
    textel.innerText = text.slice(0,idx);
    idx++;
    
    if(idx > text.length){
        idx = 1;

    }

    setTimeout(autotext,speed);
}

autotext();

speeddel.addEventListener('click',()=>{
    // console.log("hi");
    // console.log(speeddel.value);
    speed = 1000/speeddel.value;
    // console.error(speed);

});


