let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msgContainer");

// prompt("Enter the name of player 1");
// prompt("Enter the name of player 2");

let turnO = true; //playerX , playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if (turnO){ //turn of player O
            box.innerText = "O";
            turnO = false;
        }else{ //turn of player X
            box.innerText = "X";
            turnO = true; 
        }; 
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true; 
    }
}
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false; 
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("WINNER!!!", pos1Val);

                showWinner(pos1Val); 
            }
        }
    }
};

const resetGame = () =>{
    turnO = true; 
    enableBoxes();
}

resetBtn.addEventListener("click", resetGame);