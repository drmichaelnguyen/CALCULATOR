document.addEventListener('DOMContentLoaded', function() {
    const nums = document.querySelectorAll('.num');
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const fn = document.querySelectorAll('.fnbn');
    const result = document.getElementById('output');
    const del=document.getElementById('del');
    const equal=document.getElementById('=');
    const dot=document.getElementById('.');
    const negative=document.getElementById('+/-');
    var memory='' //memory to calculate. Memory is different than input 
    // previous calculation 
    const previous_cal=document.getElementById('prev_cal');


    const beforedot_listener= document.querySelectorAll('.fnbn , beforedot')

    const clear=document.getElementById('C');
    const bracket=document.getElementById('brackets')
    const numbers='1234567890';
    const notbegin='/+-*%'
    const beforebracket='/+-*(';
    const beforedot='/*+-()'


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
        output.textContent='';
        dot_listener=1
    })
    // fn for brackets button 
    bracket.addEventListener('click',() => { 
        if (beforebracket.includes(input.textContent.slice(-1))) {
            input.textContent += '('
            
        } else if (input.textContent.split('(').length<=input.textContent.split(')').length) {
            input.textContent+='*(';
        } else {
            input.textContent+=')'
        }
    })
    // FN for '=' button using eval 
    equal.addEventListener('click',() => {
        output.textContent=eval(input.textContent);
        previous_cal.innerHTML+= "<div>" + input.textContent+'='+output.textContent + "</div>"
        input.textContent=''
    })
    // event for decimal (dot) button. The button is valid only once after the function with const beforedot. Assign dot_listener =1 at first
    // When a beforedot is pressed, dot_listener is multiplied with -1. When a dot is press, the value is -1. Dot is valid only when dot_listener===1
    var dot_listener=1;
    dot.addEventListener('click',() => {
        if (dot_listener===1) {
        input.textContent=input.textContent + '.';
        dot_listener=-1
        }
    })
    beforedot_listener.forEach((ele) =>{
        ele.addEventListener('click', () => {
        dot_listener=1
        })
    })
    // fn for +/- button: appear only once before the number, if it is after a function button then make an open bracket
    negative.addEventListener('click',() => {
        if (notbegin.includes(input.textContent.slice(-1))){
            input.textContent=input.textContent + '(-'

        }
    })
});


