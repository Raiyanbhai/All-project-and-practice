
/*****************Heading section javascript*****************/
let heading=document.querySelector("h2");
console.dir(heading);
console.log(heading);
console.log(heading.innerText);
heading.innerText="This is heading two";


/****************div section javascript**********************/
// let dev=document.querySelector(".box");
let dev=document.querySelectorAll(".box");
console.log(dev);
dev[0].innerText="Box one";
dev[1].innerText="Box two";
dev[2].innerText="Box three";
dev[3].innerText="Box four";

let ind=0;
for(devs of dev)
{
    // console.dir(devs+[ind]);
    // console.log(dev.innerText);
    // console.log(devs.innerText);
    // console.log(devs.innerHTML);
    devs.innerText=`New boxes ${ind}`;
    console.log(devs.innerText);
    ind++;
}

/****************ul section javascript**********************/
let Ulist=document.querySelectorAll('li');
// console.log(Ulist);
let index=0;
for(Lvalue of Ulist)
{
    Lvalue.innerText=`IAM A LIST ${index}`;
    index++;
}
Ulist[1].innerText="Iam a list (ii)";
Ulist[2].innerText="Iam a list (iii)";