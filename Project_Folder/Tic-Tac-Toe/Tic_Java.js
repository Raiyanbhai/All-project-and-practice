
let boxes = document.querySelectorAll('#box');
let resetbtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let modeBtn=document.querySelector('#mode');
let body=document.querySelector("body");
let turn0 = true; //playerX playerY
let count = 0;
let mode=true;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
modeBtn.addEventListener('click',() => {
    if(mode==true)
        {
            modeBtn.innerText="Light";
            modeBtn.style.backgroundColor="white";
            modeBtn.style.color="black";
            body.style.backgroundColor="rgba(5, 3, 3, 0.9)"
            mode=false;
        }
        else
        {
            modeBtn.innerText="Dark";
            modeBtn.style.backgroundColor="rgba(5, 3, 3, 0.9)";
            modeBtn.style.color="white";
            body.style.backgroundColor="#fe1afe";
            mode=true;
        }
});
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {//player X
            box.innerText = "X";
            box.style.color = "black";
            turn0 = false;
        } else {//player Y
            box.innerText = "O";
            box.style.color = "green";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});


const showWinner = (winner) => {
    msg.innerText = `Congratulations! A Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    count = 0;
    disableFun();
};

const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    count = 0;
    disableFun();
    highlightDraw();
};

const resetGame = () => {
    turn0 = true;
    enableFun();
    msgContainer.classList.add("hide");
    count = 0;
};

const disableFun = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableFun = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "#e5add2";
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                highlightWinner(pattern);
                return;
            }
        }
    }
    if (count === 9) {
        showDraw();
    }
};

const highlightWinner = (pattern) => {
    for (let i = 0; i < 3; i++) {
        boxes[pattern[i]].style.backgroundColor = "rgba(75, 27, 185, 0.5)";
        boxes[pattern[i]].style.color = "white";
    }
};
const highlightDraw = () => {
    for (let i = 0; i < 9; i++) {
        boxes[i].style.backgroundColor = "red";
        boxes[i].style.color = "white";
    }
};

resetbtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);


/*** 
let boxes=document.querySelectorAll('#box');
let resetbtn=document.querySelector('#reset-btn');
let newGameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let turn0= true; //playerX playerY
var count=0;
let winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if (turn0)//player X
        {
            box.innerText="X";
            box.style.color="black";
            turn0=false;
        }
        else{//player Y
            box.innerText="O";
            box.style.color="green";
            turn0=true;
        }
        box.disabled=true;
        console.log(count+=1);
        checkWinner();
    });
});


const showWinner =(winner)=>{
    msg.innerText=`Congratulations! A Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    count=0;
    dissableFun();
};

const resetGame=()=>{
    turn0=true;
    enableFun();
    msgContainer.classList.add("hide");
    count=0;
};

const dissableFun=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
    
};

const enableFun =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="#e5add2";
    }
};


const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                // console.log(`winner id ${pos1Val}`);
                showWinner(pos1Val);
                boxes[pattern[0]].style.backgroundColor="rgba(75, 27, 185, 0.5)";
                boxes[pattern[1]].style.backgroundColor="rgba(75, 27, 185, 0.5)";
                boxes[pattern[2]].style.backgroundColor="rgba(75, 27, 185, 0.5)";
                boxes[pattern[0]].style.color="white";
                boxes[pattern[1]].style.color="white";
                boxes[pattern[2]].style.color="white";
            }
        }
    }
};
// console.log(draw);

resetbtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
**/