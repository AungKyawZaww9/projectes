// ui\


const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach((panel)=>{
    // console.log(panel);

    panel.addEventListener('click',()=>{
        // console.log("hello");
        preveiwactive();
        panel.classList.add('active');
    });
});


function preveiwactive(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}