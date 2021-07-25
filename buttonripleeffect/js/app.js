const buttons = document.querySelectorAll('.btnripple');
// console.log(buttons);

buttons.forEach((button)=>{
    // console.log(button);

    button.addEventListener('click',(e)=>{
        // console.log("hello");
        // console.log(e);

        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btntop,btnleft);

        const xinside = cx - btnleft; // get anywhere
        const yinside = cy - btntop;  // get anywhere
        // console.log(xinside,yinside);

        // Create circle
        const circle = document.createElement('span');
        // circle.className = "circle";
        circle.classList.add('circle');

        // console.log(circle);

        circle.style.top = yinside + 'px'; //ရလာတဲ့ top ကိုပြန်ထည့်
        circle.style.left = xinside + 'px'; //ရလာတဲ့ left ကိုပြန်ထည့်

        e.target.appendChild(circle);
        // this.appendChild(circle); //this can't do in arrow function

        setTimeout(()=>{
            circle.remove();
        },200)



    });



});