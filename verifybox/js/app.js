const codes = document.querySelectorAll('.code');


codes[0].focus(); // ထိတ်ဆုံးကကောင်ကို cursor ချချင်တာ


codes.forEach((code,index)=>{
    // console.log(code,index);

    code.addEventListener('keydown',(e)=>{
        // console.log(e.target);
        // console.log(e.target.value);

        if(e.key >= 0 && e.key <= 9){

            codes[index].value ='';
            // codes[index+1].focus();
            if(index !== 5){
                setTimeout(()=>codes[index+1].focus(),10);
            }
        }
        else if(e.key === "Backspace"){
            // codes[index-1].focus();
            codes[index].value ='';
            if(index !== 0){
                setTimeout(codes[index-1].focus(),10);
            }
        }

        
    });
});
