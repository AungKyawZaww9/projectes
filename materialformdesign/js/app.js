const lables = document.querySelectorAll('.form-control label');
// console.log(lables);

lables.forEach((lable)=>{
    // console.log(lable.textContent);
    // console.log(lable.textContent.split());
    // console.log(lable.textContent.split(""));

    // lable.innerHTML = "abc";
    lable.innerHTML = lable.innerText
    .split('')
    .map((letter,index)=>`<span style="transition-delay:${index*50}ms">${letter}</span>`).join('');
});
