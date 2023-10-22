document.addEventListener('DOMContentLoaded', function() {
    const nums = document.querySelectorAll('.num');
    const input = document.getElementById('input')
    const fn = document.querySelectorAll('.fnbn');
    const result = document.getElementById('output');



    nums.forEach((ele) => {
        ele.addEventListener('click', () => {
            input.textContent += ele.textContent
        })
    })
    fn.forEach((ele) => {
        ele.addEventListener('click', () => {
            fnbn=ele.textContent
            inputvalue=input.textContent
            console.log(fnbn)
            // console.log(inputvalue)
            // console.log(typeof(inputvalue))
            if (inputvalue==='' && '/x+-'.includes(fnbn)) {
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

});


