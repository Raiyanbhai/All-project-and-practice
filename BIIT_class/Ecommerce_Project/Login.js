function takvalue(){
    var name=document.getElementById("name").value;
    var mobile=document.getElementById("mobile").value;
    var password1=document.getElementById("password").value;
    var password2=document.getElementById("confirm").value;
    if(password1===password2)
    {
        alert("Submitted successfully");
        document.write("name="+name+"<br> mobile="+mobile+"<br> password="+password1);
    }
    else{
        confirm("Try again");
    }
}