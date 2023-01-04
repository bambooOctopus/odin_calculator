let buttons = document.getElementById("buttons").childNodes;
let screen = document.getElementById("big-text");

//running total in small text
const storedTotal = [];
//operator that's been entered
const storedOperator = [];
//numbers being punched in before equals
const numArray = [];

buttons.forEach(button => button.addEventListener("click", logButton));

function logButton() {
    console.log(this.id);

    if (this.id[0] == "n") {
        let num = this.id[this.id.length - 1];        
        numArray.push(num);
        screen.textContent = numArray.join("");
        
    }
    else if (this.id == "clear") {
        let length = numArray.length;
        console.log(length);
        
        for (let i = 0; i < length; i ++) {
            numArray.pop();
            screen.textContent = numArray;
        }

        
    }
}