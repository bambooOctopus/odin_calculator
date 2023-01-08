let buttons = document.getElementById("buttons").childNodes;
let bigText = document.getElementById("big-text");
let smallText = document.getElementById("small-text");
let operand = document.getElementById("operand");

function calcObj() {
    return {        
            storedNumber: "",
            storedOperator: "",
            activeNumber: "",
            
            compute: function() {
                
                switch (this.storedOperator) {
                    case "plus":
                        console.log("this is plus");
                        
                        let plusAnswer = this.plus();
                        this.storedNumber = plusAnswer.toString();
                        smallText.textContent = this.storedNumber;
                        this.activeNumber = "";
                        bigText.textContent = "";
                        

                    break;

                    case "minus":
                        console.log("this is minus");
                        
                        let minusAnswer = this.minus();                        
                        this.storedNumber = minusAnswer;
                        smallText.textContent = this.storedNumber;
                        this.activeNumber = "";
                        bigText.textContent = "";

                    break;

                    case "multiply":
                        console.log("this is multiply");
                        
                        let multiplyAnswer = this.multiply();
                        this.storedNumber = multiplyAnswer.toString();
                        smallText.textContent = this.storedNumber;
                        this.activeNumber = "";
                        bigText.textContent = "";

                    break;

                    case "divide":
                        console.log("this is divide");
                        
                        let divideAnswer = this.divide();
                        this.storedNumber = divideAnswer.toString();
                        smallText.textContent = this.storedNumber;
                        this.activeNumber = "";
                        bigText.textContent = "";


                    break;

                };

                
                
            },
            
            plus: function() {
                return (parseFloat(this.storedNumber) + parseFloat(this.activeNumber)).toString();
            },

            minus: function() {
                return (parseFloat(this.storedNumber) - parseFloat(this.activeNumber)).toString();
            },

            multiply: function() {
                return (parseFloat(this.storedNumber) * parseFloat(this.activeNumber)).toString();
            },

            divide: function() {
                return (parseFloat(this.storedNumber) / parseFloat(this.activeNumber)).toString();
            }


    };
};

let operatorHash = { 
    "multiply": "*",
    "divide": "/",
    "plus": "+",
    "minus": "-",

}

buttons.forEach(button => button.addEventListener("click", logButton));

calc = new calcObj;
console.log(calc);


function logButton() {

    smallText.textContent = calc.storedNumber;
    operand.textContent = operatorHash[calc.storedOperator];
    bigText.textContent = calc.activeNumber;

    console.log("I wish");
    id = this.id;
    console.log(id);    

    if (id[0] == "n") {
        console.log("number row");
        let numberId = id[id.length - 1]; 
        console.log(numberId); 
        calc.activeNumber = calc.activeNumber + numberId; 
        console.log(calc.activeNumber.toString()); 
        
        
        bigText.textContent = "";            
        bigText.textContent = calc.activeNumber.toString(); 
    }
    else if (this.id == "clear") { 
        
        if (calc.activeNumber.length > 0) {

            calc.activeNumber = "";            
            bigText.textContent = calc.activeNumber;
        }

        else if (calc.storedNumber.length > 0  && calc.storedOperator.length > 0 && calc.activeNumber.length == 0) {
            calc.storedOperator = "";
            operand.textContent = calc.storedOperator;
        }

         else if (calc.storedNumber.length > 0  && calc.storedOperator.length == 0 && calc.activeNumber.length == 0) {
            calc.storedNumber = "";
            smallText.textContent = calc.storedNumber
        }

    }

    else if (this.classList[1] == "operator" ) {
        if (calc.storedNumber.length > 0 && calc.storedOperator.length > 0 && calc.activeNumber.length > 0) {
            calc.compute();
            console.log("hello");
            calc.storedOperator = this.id;

            operand.textContent = operatorHash[this.id];
            smallText.textContent = calc.storedNumber;
            bigText.textContent = calc.activeNumber;
            
        }
        else if (calc.storedNumber.length == 0 && calc.storedOperator.length == 0 && calc.activeNumber.length > 0) {
            //move active number to smallText; storedOperator == this.id; bigText == ""; activeNumber = ""
            calc.storedNumber = calc.activeNumber;
            calc.activeNumber = "";
            calc.storedOperator = this.id;
            bigText.textContent = calc.activeNumber;
            smallText.textContent = calc.storedNumber;
            operand.textContent = operatorHash[calc.storedOperator];

            
            
        }
        else if (calc.storedNumber.length > 0 && calc.storedOperator.length == 0 && calc.activeNumber.length == 0) {
            calc.storedOperator = this.id;            
            operand.textContent = operatorHash[calc.storedOperator];

            bigText.textContent = calc.activeNumber;
            smallText.textContent = calc.storedNumber;
            operand.textContent = operatorHash[calc.storedOperator];

            
        }
        else if (calc.storedNumber.length > 0 && calc.storedOperator.length > 0 && calc.activeNumber.length == 0) {
            bigText.textContent = calc.activeNumber;
            smallText.textContent = calc.storedNumber;
            operand.textContent = operatorHash[calc.storedOperator];
            console.log("Wish you were here");
            return;
        }
        
        
        
    }

    else if (this.id == "equals") {
        calc.compute();
        calc.storedOperator = "";
        operand.textContent = "";

        calc.activeNumber = "";
        
        smallText.textContent = calc.storedNumber;
        bigText.textContent = "";
        

        
    }

    else if (this.id == "decimal") {
        splitArray = calc.activeNumber.split("");        
        console.log(splitArray);

        if (splitArray.includes(".")) {
            console.log("next"); 
        }
        else {
            console.log("else");
            calc.activeNumber = calc.activeNumber + ".";
            bigText.textContent = calc.activeNumber;
        }
    }

}




