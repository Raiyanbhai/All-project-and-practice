(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchavalue = "";

    function generateCaptcha(){
        let value = (Math.random() * 1000000000).toString();
        value = value.substr(0, 5 + Math.random()* 1);
        captchavalue = value;
    }

    function setCaptcha(){
        const html = captchavalue.split("").map((char) => {
            const rotate = -20 + Math.trunc(Math.random() * 40); // Corrected range for rotation
            const fontIndex = Math.trunc(Math.random() * fonts.length); // Select random font
            return `<span style="transform: rotate(${rotate}deg); font-family: ${fonts[fontIndex]};">${char}</span>`;
        }).join(" ");
        document.querySelector(".login-form .Captcha .preview").innerHTML = html; // Update CAPTCHA preview
    }

    function initCaptcha(){
        document.querySelector(".login-form .Captcha .captcha-refresh").addEventListener("click", function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }

    initCaptcha();

    document.querySelector(".login-form #login-btn").addEventListener("click", function(){
        let inputCaptchaValue = document.querySelector(".login-form .captcha-input").value;
        if (inputCaptchaValue === captchavalue) {
            swal("", "Logging In!", "success");
        } else {
            swal("Invalid Captcha");
        }
    });
})();


/***********************General Captcha Generation*******************************/
// var n=1, captcha=[1,2,3,4], userinput, computernum, computernumindex;
// computernumindex=Math.floor(Math.random()*captcha.length);
// computernum=captcha[computernumindex];
// userinput=prompt("Enter a number: ",computernum);
// for(var i=1; i<=n; i++){
//     if(userinput==computernum){
//         document.write("Congratulations! You have successfully",computernum);
//     }
//     else{
//         computernumindex=Math.floor(Math.random()*captcha.length);
//         computernum=captcha[computernumindex];
//         userinput=prompt("Try again: ",computernum);
//         n++;
//     }
// }