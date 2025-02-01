let btn= document.querySelector("button");
let bdy= document.querySelector("body");
let mode= "light";

btn.addEventListener("click", () =>{
    if (mode == "light")
    {
        mode = "dark";
        btn.innerText = "Light";
        btn.style.color = "black";
        btn.style.backgroundColor = "white";
        bdy.classList.add("dark");
        bdy.classList.remove("light");
        
    }
    else
    {
        mode = "light";
        btn.innerText = "Dark";
        btn.style.color = "white";
        btn.style.backgroundColor = "black";
        bdy.classList.add("light");
        bdy.classList.remove("dark");
    }
});

function generateCaptcha(){
    var cap= new Array('A',1,'a', 2,'B',3, 'b',4,'C',5,'c',6, 'D',7,'d',8, 'E',9,'e', 'F','f', 'G','g', 'H','h', 'I','i', 'J','j', 'K','k', 'L','l','m', 'M','n', 'N','o', 'O','p', 'P','q', 'Q', 'r', 'R','s', 'S','t', 'T','u', 'U','v', 'V','w', 'W','x', 'X', 'Y','y','z', 'Z');
    var i;
    for (i = 0; i <6; i++)
    {
        var a=cap[Math.floor(Math.random()*cap.length)];
        var b=cap[Math.floor(Math.random()*cap.length)];
        var c=cap[Math.floor(Math.random()*cap.length)];
        var d=cap[Math.floor(Math.random()*cap.length)];
        // var e=cap[Math.floor(Math.random()*cap.length)];
        // var f=cap[Math.floor(Math.random()*cap.length)];
    }
    var code= a+b+c+d;
    document.getElementById("mainCaptcha").value=code;
}
function checkValidCaptcha (){
    var string1=removeSpaces(document.getElementById("mainCaptcha").value);
    var string2=removeSpaces(document.getElementById("txtInput").value);
    if (string1==string2)
    {
        // document.getElementById("success").innerHTML="Form is Validated successfully";
        alert("successfully Validated");
        window.location.reload();// To reload the page automatically
        return true;
    }
    else
    {
        document.getElementById("error").innerHTML="Please enter a valid Captcha";
        return false;
    }
}
function removeSpaces(string){
    return string.split(" ").join(" ");
}






/*
btn.addEventListener("click", () => {
    if (mode==="light")
    {
        mode= "dark";
        document.querySelector("body").style.backgroundColor= "rgb(16, 13, 13)";
    }
    else
    {
        mode= "light";
        document.querySelector("body").style.backgroundColor= "rgb(233, 227, 227)";
    }
    console.log(mode);
});
*/

/*
btn.addEventListener("click", () => {
    if (mode==="light")
    {
        mode= "dark";
        document.querySelector("body").style.backgroundColor= "rgb(16, 13, 13)";
    }
    else
    {
        mode= "light";
        document.querySelector("body").style.backgroundColor= "rgb(233, 227, 227)";
    }
    console.log(mode);
});
*/ 