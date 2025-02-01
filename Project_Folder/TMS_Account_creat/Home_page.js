document.getElementById("form-login-btn").addEventListener("submit", ()=>{
  
    let password=document.getElementById("username").Value;
    let Password=document.getElementById("password").Value;
    if(password==Password)
    {
        alert("password is correct");
    }
    else{
        alert("password is incorrect");
    }
    document.write(password);
});


////////////////////////////////////////////////

function generateCaptcha() {
    // var captchaArray = ['A', 1, 'a', 2, 'B', 3, 'b', 4, 'C', 5, 'c', 6, 'D', 7, 'd', 8, 'E', 9, 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'Y', 'y', 'z', 'Z'];
    var captchaArray =`A10zB2yC3xD4wE5vF6uG7tH8sI9rJqKpLoMnNmOlPkQjRiShTgUfVeWdXcYbZa`;
    var captcha = '';
    for (var i = 0; i < 6; i++) {
        captcha += captchaArray[Math.floor(Math.random() * captchaArray.length)];
    }
    document.getElementById("Captcha").value = captcha;
}

function checkValidCaptcha() {
    let captchaGenerated = removeSpace(document.getElementById("Captcha").value);
    let captchaInput = removeSpace(document.getElementById("captcha-check").value);
    if (captchaGenerated === captchaInput) {
        // alert("Captcha verified successfully!");
        swal("Captcha verified successfully!");
        return true;
    } else {
        document.getElementById("error3").innerHTML = "Invalid captcha";
        swal("Invalid captcha");
        return false;
    }
}

function removeSpace(string) {
    return string.replace(/\s+/g, '');
}

document.getElementById("form-login-btn").addEventListener("click", function() {
    if (checkValidCaptcha()) {
        // window.location.href = "Tic_index.html";
        // window.location.reload();
    }
});


