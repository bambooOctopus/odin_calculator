let buttons = document.getElementById("buttons").childNodes;
let bigText = document.getElementById("big-text");
let smallText = document.getElementById("small-text");
let operand = document.getElementById("operand");

//running total in small text
const storedTotal = [];
//operator that's been entered
const storedOperator = null;
//big line numbers
const numArray = [];

buttons.forEach(button => button.addEventListener("click", logButton));
console.log(this.id);

function logButton() {
    id = this.id;    

    if (id[0] == "n") {
        let num = id[id.length - 1];        
        numArray.push(num);
        bigText.textContent = numArray.join("");        
    }
    else if (this.id == "clear") {
        let length = numArray.length;  
        console.log(this.classList[0]);

        if (storedTotal.length > 0 && numArray.length > 0) {
            for (let i = 0; i < length; i ++) {
                numArray.pop();
                bigText.textContent = numArray;
            }

        }
        else if (numArray.length > 0) {
            for (let i = 0; i < length; i ++) {
                numArray.pop();
                bigText.textContent = numArray;
            }

        }
        else if (storedTotal.length > 0 && operand.textContent != "") {
            //set storedOperator to null
            let storedOperator = null;            
            operand.textContent = ""; 
            

        }
        else if (storedTotal.length > 0 && operand.textContent == "") {
            let length = storedTotal.length;

            for (let i = 0; i < length; i++) {
                storedTotal.pop();
                smallText.textContent = "";
            }
           
            
        }
        
        

        
    }
    else if (this.classList[1] == "operator") {
        

        if (numArray.length == 0 && storedTotal.length > 0) {
            let operatorFunction = this.id;
            let storedOperator = operatorFunction;

            switch(storedOperator) {
                case 'division': 
                    operand.textContent = "/";
                    break
                case 'multiply': 
                    operand.textContent = "*";
                    break
                
                case 'minus': 
                    operand.textContent = "-";
                    break
                
                case 'plus': 
                    operand.textContent = "+";
                    break
                
                
            
            }


        }
        else {
            //so if theres something in numArray we want to 
            //1. save the operator id to storedOperator
            //2. move the number from the bigText to smallText
            //3. move operator to smallText
            //4. empty numArray

            let operatorFunction = this.id;
            let storedOperator = operatorFunction;

            let firstNumber = numArray.join("");
            storedTotal.push(firstNumber);

            let length = numArray.length;

            for (i = 0; i < length; i++) {
                numArray.pop();
            }

            smallText.textContent = storedTotal[0];
            bigText.textContent = "";

            switch(storedOperator) {
                case 'division': 
                    operand.textContent = "/";
                    break
                case 'multiply': 
                    operand.textContent = "*";
                    break
                
                case 'minus': 
                    operand.textContent = "-";
                    break
                
                case 'plus': 
                    operand.textContent = "+";
                    break
                
                
            
            }

            

        }
    }

    else if (this.classList[1] == "equals") {
        console.log("equals");

    }
    else if (this.classList[1] == "decimal") {
        console.log("decimal");
    }
    
}