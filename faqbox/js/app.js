const gettoggle = document.querySelectorAll('.faq-toggle');
// console.log(gettoggle);

gettoggle.forEach((gettoggle)=>{
    // console.log(gettoggle);

    gettoggle.addEventListener('click',()=>{
        gettoggle.parentNode.classList.toggle('active');

    });

});