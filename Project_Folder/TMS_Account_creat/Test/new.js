// const stepValueContainer =[];
// const steps = document.querySelectorAll(".steps");
//     steps.forEach(step => {
//         step.addEventListener("click", function() {
//             let valu=step.getAttribute("stepvalue");
//             formDisplayed(valu);
//         });
//     });

//     const Nexts=document.querySelectorAll("#Nexts");
//     Nexts.forEach(nexts => {
//         nexts.addEventListener("click", () =>{
//             let changeData=nexts.getAttribute("nextData");
//             tempError(changeData);
//             formDisplayed(changeData);
//         });
//     });
//     const Backs=document.querySelectorAll("#Backs");
//     Backs.forEach(backs => {
//         backs.addEventListener("click", () =>{
//             let backData=backs.getAttribute("backData");
//             formDisplayed(backData);
//         });
//     });

//     function getValidationArray(validValue) {
//         switch(validValue)
//         {
//             case "1":
//                 return errorValidation1;
//             case "2":
//                 return errorValidation2;
//             case "3":
//                 return errorValidation3;
//             case "4":
//                 return errorValidation4;
//             case "5":
//                 return errorValidation5;
//             default:
//                 return [];
    
//         }
//     }

//     function stepValidation(){
//         stepValueContainer.forEach(add =>{
//             let validCheck=true;
//             let Validation = getValidationArray(add);
//             Validation.forEach(checks =>{
//                 let dataElement=document.getElementById(checks.codeId);
//                 let errorDataElement=document.getElementById(checks.codeError);
//                 if(dataElement.value==="" || dataElement.value==checks.codeId || !dataElement.value)
//                 {
//                     errorDataElement.style.display="block";
//                     validCheck=false;
//                 }
//                 else
//                 {
//                     errorDataElement.style.display="none";
//                 }
//             });
//             colors(validCheck, add);
//         });
//     }

//     function colors(color, callValue){
//         let steps = document.querySelector(`.step${callValue}`);
//         let nameText = document.querySelector(`.step-name${callValue}`);
//         let svgLine = callValue <= 5 ? document.querySelector(`.svgLine${callValue}`) : null;
//         if(color)
//         {
//             steps.style.backgroundColor="green";
//             steps.style.color="white";
//             nameText.style.color="green";
//             if(svgLine)
//             {
//                 svgLine.style.stroke="green";
//             }
//         }
//         else{
//             steps.style.backgroundColor="red";
//             steps.style.color="white";
//             nameText.style.color="red";
//             if(svgLine)
//             {
//                 svgLine.style.stroke="red";
//             }
//         }
//     }
    
//     function colors1(color){
//         stepValueContainer.forEach(add =>{
//             if(add!=color)
//             {
//                 let steps=document.querySelector(`.step${color}`);
//                 steps.style.backgroundColor="#0078d7";
//                 steps.style.color="white";
//                 let nameText=document.querySelector(`.step-name${color}`);
//                 nameText.style.color="#0078d7";
//                 if(color<=5)
//                 {
//                     let svgLine=document.querySelector(`.svgLine${color}`);
//                     svgLine.style.stroke="#0078d7";
//                 }
//             }
//         });
//     }

//     function formDisplayed(fData){
//         let forms=document.querySelectorAll(".forms");
//         forms.forEach(form => {
//             let formData=form.getAttribute("dataValue");
//             if(formData==fData){
//                 form.style.display="block";
//                 stepValueContainer.forEach(values =>{
//                     if(values==formData)
//                     {
//                         stepValidation();
//                     }
//                     else{
//                         colors1(formData);
//                         if(!stepValueContainer.includes(formData))
//                         {
//                             stepValueContainer.push(formData);
//                         }
//                     }
//                 });
//             }
//             else{
//                 form.style.display="none";
//             }
//         });
//     }
