let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msgContainer");
let newGame=document.querySelector("#newGame")
let turnX=true;
count=0;
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [3,4,5]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X"
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        count++;

        if (checkWinner()) {
            return
        }
        else if(count===9){
            gameDraw();
        }
    })
})

const gameDraw=()=>{
    msg.innerText="Game was a Draw";
    msgContainer.classList.remove("hide");
    disableBtn();
}

const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!==""&&pos2!==""&&pos3!==""){
            if(pos1===pos2&&pos2===pos3){
                showWinner(pos1);
                return true;

            }
        }
    }
    return false;
}
const showWinner=(winner)=>{
    msg.innerText=`Congrats,Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBtn();
}

const resetGame=()=>{
    enableBtn();
    turnX=true;
    msgContainer.classList.add("hide");
    count=0;

}
reset.addEventListener(("click"),resetGame);
newGame.addEventListener(("click"),resetGame);
