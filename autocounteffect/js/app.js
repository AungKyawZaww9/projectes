const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach((counter)=>{
    // console.log(counter);
    counter.innerText = '0';

    // const updatecounter = function(){

    // }
    const updatecounter =()=>{
        // console.log('hey');
        // const target = Number(counter.getAttribute('data-target')); /*change number */
        const target = +counter.getAttribute('data-target'); /*change number */
        // console.log(target);
        // console.log(typeof target, target);

        const ctr = Number(counter.innerText);
        // console.log(typeof ctr);


        const increment = target / 100;
        // console.log(increment);

        if(ctr < target){
            counter.innerText = Math.ceil(ctr+increment); /*ဒသမကိန်း တွေဖြောက်ချင်လို့ Math use*/
            setTimeout(updatecounter,50); /* two parameter */
        }

    };
    updatecounter();

})