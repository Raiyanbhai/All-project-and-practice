// const addressDataTr=[
//     {codeId:'temporary-state', codeError:'temporary-state-error'},
//     {codeId:'temporary-district', codeError:'temporary-district-error'},
//     {codeId:'temporary-municipality', codeError:'temporary-municipality-error'},
//     {codeId:'temporary-wardno', codeError:'temporary-wardno-error'},
//     {codeId:'temporary-street', codeError:'temporary-street-error'},
//     {codeId:'temporary-street', codeError:'temporary-street-error'},
// ];
const address=[];
let dives=document.querySelectorAll(".countId");
let i=1;
dives.forEach(div =>{
    div.addEventListener("click", () =>{
        div.style.backgroundColor="blue";
        let dataValue=div.getAttribute("dataValue");
        console.log("div",dataValue);
        check(dataValue,div);
        if(!address.includes(dataValue))
        {
            address.push(dataValue);
        }
    });
});
function check(dataValue, div){
    address.forEach(add =>{
        if(add==1)
        {
            let elements=document.getElementById(`ides${add}`);
            elements.style.backgroundColor="red";
        }
        else if(add==2)
        {
            let elements=document.getElementById(`ides${add}`);
            elements.style.backgroundColor="red";
        }
        else if(add==3)
        {
            let elements=document.getElementById(`ides${add}`);
            elements.style.backgroundColor="red";
        }
        else if(add==4)
        {
            let elements=document.getElementById(`ides${add}`);
            elements.style.backgroundColor="red";
        }
        else if(add==5)
        {
            let elements=document.getElementById(`ides${add}`);
            elements.style.backgroundColor="red";
        }
        else if(add==6)
        {
            let elements=document.getElementById(`ides${add}`);
            elements.style.backgroundColor="green";
        }
        else{
            div.style.backgroundColor="blue";
        }
    });
}
let body=document.querySelector("#btnClick");
body.onclick =function(){
    address.forEach(add =>{
        console.log("value is ",add);
    });
};



/**
else if(add==2)
{
    
    let steps=document.querySelector(`.step${add}`);
    steps.style.backgroundColor="red";
    steps.style.color="white";
    let nameText=document.querySelector(`.step-name${add}`);
    nameText.style.color="red";
    if(add<=5)
    {
        let svgLine=document.querySelector(`.svgLine${add}`);
        svgLine.style.stroke="red";
    }
}
else if(add==3)
{
    
    let steps=document.querySelector(`.step${add}`);
    steps.style.backgroundColor="red";
    steps.style.color="white";
    let nameText=document.querySelector(`.step-name${add}`);
    nameText.style.color="red";
    if(add<=5)
    {
        let svgLine=document.querySelector(`.svgLine${add}`);
        svgLine.style.stroke="red";
    }
}
else if(add==4)
{
    
    let steps=document.querySelector(`.step${add}`);
    steps.style.backgroundColor="red";
    steps.style.color="white";
    let nameText=document.querySelector(`.step-name${add}`);
    nameText.style.color="red";
    if(add<=5)
    {
        let svgLine=document.querySelector(`.svgLine${add}`);
        svgLine.style.stroke="red";
    }
}
else if(add==5)
{
    
    let steps=document.querySelector(`.step${add}`);
    steps.style.backgroundColor="red";
    steps.style.color="white";
    let nameText=document.querySelector(`.step-name${add}`);
    nameText.style.color="red";
    if(add<=5)
    {
        let svgLine=document.querySelector(`.svgLine${add}`);
        svgLine.style.stroke="red";
    }
}
else if(add==6)
{
    
    let steps=document.querySelector(`.step${add}`);
    steps.style.backgroundColor="green";
    steps.style.color="white";
    let nameText=document.querySelector(`.step-name${add}`);
    nameText.style.color="green";
    if(add<=5)
    {
        let svgLine=document.querySelector(`.svgLine${add}`);
        svgLine.style.stroke="green";
    }
}
 */