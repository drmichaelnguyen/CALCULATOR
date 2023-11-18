document.addEventListener('DOMContentLoaded', function() {
    const nums = document.querySelectorAll('.num');
    const input = document.getElementById('input')
    const fn = document.querySelectorAll('.fnbn');
    const result = document.getElementById('output');
    const del=document.getElementById('del');
    const clear=document.getElementById('C');
    const bracket=document.getElementById('brackets')
    const numbers='1234567890';
    const notbegin='/+-x%'
    const beforebracket='/+-x(';


    // loop through numbers and show on the input box, if the first number is 0 then no other 0
    nums.forEach((ele) => {
        ele.addEventListener('click', () => {
            if (input.textContent==='0' && '0'===ele.textContent) {
                input.textContent = '0'
            } else {
                input.textContent += ele.textContent
            }
            
        })
    })
    // loop through function buttons and shows on the input box
    fn.forEach((ele) => {
        ele.addEventListener('click', () => {
            let fnbn=ele.textContent
            let inputvalue=input.textContent
            // console.log(inputvalue)
            // console.log(typeof(inputvalue))
            if ((inputvalue==='' && notbegin.includes(fnbn)) || (input.textContent.slice(-1)==='(' &&notbegin.includes(fnbn))) {
                result.textContent='Please type a number first';
                // input.textContent=''
            } else if ('/x-+'.includes(inputvalue.slice(-1))) {
                // if already has function button then replace the current function
                input.textContent =input.textContent.slice(0,-1)+ ele.textContent;
                result.textContent='Press = for result';

            } else {
                // add the button funtion
                input.textContent += ele.textContent
                result.textContent='Press = for result';

            };

        })
    })
    // fn for delete button
    del.addEventListener('click',() => {
        input.textContent=input.textContent.slice(0,-1)
    })
    // fn for clear (C) button
    clear.addEventListener('click',() => {
        input.textContent='';
    })
    // Algorithm for brackets button 
    bracket.addEventListener('click',() => { 
        if (beforebracket.includes(input.textContent.slice(-1))) {
            input.textContent += '('
            
        } else if (input.textContent.split('(').length<=input.textContent.split(')').length) {
            input.textContent+='x(';
        } else {
            input.textContent+=')'
        }
    })
});


