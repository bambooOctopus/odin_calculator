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
                        this.storedNumber = plusAnswer;
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
                        this.storedNumber = multiplyAnswer;
                        smallText.textContent = this.storedNumber;
                        this.activeNumber = "";
                        bigText.textContent = "";

                    break;

                    case "divide":
                        console.log("this is divide");
                        
                        let divideAnswer = this.divide();
                        this.storedNumber = divideAnswer;
                        smallText.textContent = this.storedNumber;
                        this.activeNumber = "";
                        bigText.textContent = "";


                    break;

                };
                
            },
            
            plus: function() {
                return parseInt(this.storedNumber) + parseInt(this.activeNumber);
            },

            minus: function() {
                return parseInt(this.storedNumber) - parseInt(this.activeNumber);
            },

            multiply: function() {
                return parseInt(this.storedNumber) * parseInt(this.activeNumber);
            },

            divide: function() {
                return parseInt(this.storedNumber) / parseInt(this.activeNumber);
            }


    }
}

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
    id = this.id;    

    if (id[0] == "n") {
        let numberId = id[id.length - 1];  
        calc.activeNumber = calc.activeNumber + numberId;              
        bigText.textContent = calc.activeNumber;  
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
            calc.storedOperator = this.id;
            operand.textContent = operatorHash[this.id];
            
        }
        else if (calc.storedNumber.length == 0 && calc.storedOperator.length == 0 && calc.activeNumber.length > 0) {
            //move active number to smallText; storedOperator == this.id; bigText == ""; activeNumber = ""
            calc.storedNumber = calc.activeNumber;
            calc.activeNumber = "";
            calc.storedOperator = this.id;
            bigText.textContent = "";
            smallText.textContent = calc.storedNumber;
            operand.textContent = operatorHash[calc.storedOperator];
            
        }
        
        
    }

    else if (this.classList[1] == "equals") {
        calc.compute();
        calc.storedOperator = "";
        operand.textContent = "";
        
        smallText = "";
        bigText = calc.storedNumber;
        calc.storedNumber = "";
    }

}



// function calculate(operator) {
//     console.log(operator);
//     switch (operator) {
//         case "plus":
//             calc.add();
//             //add()
//             break
//     }
// }

//         if (storedTotal.length > 0 && numArray.length > 0) {
//             for (let i = 0; i < length; i ++) {
//                 numArray.pop();
//                 bigText.textContent = numArray;
//             }

//         }
//         else if (numArray.length > 0) {
//             for (let i = 0; i < length; i ++) {
//                 numArray.pop();
//                 bigText.textContent = numArray;
//             }

//         }
//         else if (storedTotal.length > 0 && operand.textContent != "") {
//             //set storedOperator to null
//             storedOperator.shift();            
//             operand.textContent = ""; 
            

//         }
//         else if (storedTotal.length > 0 && operand.textContent == "") {
//             let length = storedTotal.length;

//             for (let i = 0; i < length; i++) {
//                 storedTotal.pop();
//                 smallText.textContent = "";
//             }
           
            
//         }
        
        

        
//     }
//     else if (this.classList[1] == "operator") {
        
//         //have to make sure there is a storedTotal before we take any operator



//         if (storedTotal.length > 0 && storedOperator.length > 0 && numArray.length > 0) { 
//             switch(storedOperator[0]) {
//                 case 'division': 
//                     console.log(divide(storedTotal[0], numArray[0]));
//                     storedTotal[0] = divide(storedTotal[0], numArray[0]);
//                     smallText.textContent = storedTotal[0];
//                     console.log("this dot " + this.id)
//                     storedOperator[0] = this.id;
//                     operand.textContent = operatorHash[this.id];

//                     numArray.shift();
//                     bigText.textContent = "";
                    
                    
//                     break
//                 case 'multiply': 
//                     console.log(multiply(storedTotal[0], numArray[0]));
//                     storedTotal[0] = multiply(storedTotal[0], numArray[0]);
//                     smallText.textContent = storedTotal[0];
//                     console.log("this dot " + this.id)
//                     storedOperator[0] = this.id;
//                     operand.textContent = operatorHash[this.id];

//                     for (let i = 0; i < numArray.length; i++) {
//                         numArray.pop();
//                     }

                    
//                     bigText.textContent = "";
                    
//                     break
                
//                 case 'minus': 
//                     console.log(minus(storedTotal[0], numArray[0]));
//                     storedTotal[0] = minus(storedTotal[0], numArray[0]);
//                     smallText.textContent = storedTotal[0];
//                     console.log("this dot " + this.id)
//                     storedOperator[0] = this.id;
//                     operand.textContent = operatorHash[this.id];

//                     for (let i = 0; i < numArray.length; i++) {
//                         numArray.pop();
//                     }

                    
//                     bigText.textContent = "";
                    

//                     break
                
//                 case 'plus': 
//                     console.log(add(storedTotal[0], numArray[0]));
//                     storedTotal[0] = add(storedTotal[0], numArray[0]);
//                     smallText.textContent = storedTotal[0];
//                     console.log("this dot " + this.id)
//                     storedOperator[0] = this.id;
//                     operand.textContent = operatorHash[this.id];

//                     for (let i = 0; i < numArray.length; i++) {
//                         numArray.pop();
//                     }

                    
//                     bigText.textContent = "";
                    
                    
//                     break
                
                
            
//             }
          
//         }

//         else  if (numArray.length > 0 && storedTotal.length > 0) {
//             let operatorFunction = this.id;
            
//             storedOperator[0] = operatorFunction;
            

//             switch(storedOperator[0]) {
//                 case 'division': 
//                     operand.textContent = "/";
//                     compute();
//                     break
//                 case 'multiply': 
//                     operand.textContent = "*";
//                     console.log("hello?");
//                     compute();
//                     break
                
//                 case 'minus': 
//                     operand.textContent = "-";
//                     compute();
//                     break
                
//                 case 'plus': 
//                     operand.textContent = "+";
//                     compute();
//                     break
                
                
            
//             }


//         }
//         else {
//             //so if theres something in numArray we want to 
//             //1. save the operator id to storedOperator
//             //2. move the number from the bigText to smallText
//             //3. move operator to smallText
//             //4. empty numArray

//             let operatorFunction = this.id;
//             console.log(this.id);
//             storedOperator[0] = operatorFunction;

//             let firstNumber = numArray.join("");
//             storedTotal.push(firstNumber);

//             let length = numArray.length;

//             for (i = 0; i < length; i++) {
//                 numArray.pop();
//             }

//             smallText.textContent = storedTotal[0];
//             bigText.textContent = "";

//             switch(storedOperator[0]) {
//                 case 'division': 
//                     operand.textContent = "/";
//                     break
//                 case 'multiply': 
//                     operand.textContent = "*";
//                     break
                
//                 case 'minus': 
//                     operand.textContent = "-";
//                     break
                
//                 case 'plus': 
//                     operand.textContent = "+";
//                     break
                
                
            
//             }

            

//         }
//     }

//     else if (this.classList[1] == "equals") {
//         console.log("equals");

//         switch(storedOperator[0]) {
//             case 'division': 
//                 console.log(divide(storedTotal[0], numArray[0]));
//                 storedTotal[0] = divide(storedTotal[0], numArray[0]);
//                 smallText.textContent = storedTotal[0];
//                 console.log("this dot " + this.id)
//                 storedOperator[0] = this.id;
//                 operand.textContent = operatorHash[this.id];

//                 numArray.shift();
//                 bigText.textContent = "";
                
                
//                 break
//             case 'multiply': 
//                 console.log(multiply(storedTotal[0], numArray[0]));
//                 storedTotal[0] = multiply(storedTotal[0], numArray[0]);
//                 smallText.textContent = storedTotal[0];
//                 console.log("this dot " + this.id)
//                 storedOperator[0] = this.id;
//                 operand.textContent = operatorHash[this.id];

//                 for (let i = 0; i < numArray.length; i++) {
//                     numArray.pop();
//                 }

                
//                 bigText.textContent = "";
                
//                 break
            
//             case 'minus': 
//                 console.log(minus(storedTotal[0], numArray[0]));
//                 storedTotal[0] = minus(storedTotal[0], numArray[0]);
//                 smallText.textContent = storedTotal[0];
//                 console.log("this dot " + this.id)
//                 storedOperator[0] = this.id;
//                 operand.textContent = operatorHash[this.id];

//                 for (let i = 0; i < numArray.length; i++) {
//                     numArray.pop();
//                 }

                
//                 bigText.textContent = "";
                

//                 break
            
//             case 'plus': 
//                 console.log(add(storedTotal[0], numArray[0]));
//                 storedTotal[0] = add(storedTotal[0], numArray[0]);
//                 smallText.textContent = storedTotal[0];
//                 console.log("this dot " + this.id)
//                 storedOperator[0] = this.id;
//                 operand.textContent = operatorHash[this.id];

//                 for (let i = 0; i < numArray.length; i++) {
//                     numArray.pop();
//                 }

                
//                 bigText.textContent = "";
                
                
//                 break
            
            
        
//         }


//     }
//     else if (this.classList[1] == "decimal") {
//         console.log("decimal");
//     }
    
// }

// function compute() {
//     if (numArray.length > 0 && storedTotal.length > 0 && storedOperator.length > 0) {
//         console.log("doing it");

//     }

// }

// function add(num1, num2) {
//     return parseInt(num1) + parseInt(num2);
// }

// function minus(num1, num2) {
//     return parseInt(num1) - parseInt(num2);
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }