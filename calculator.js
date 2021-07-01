// Grabs by id, and changes the content
const updateDisplayBox = (text) => {
    // Gives me the div element from my page
    const calcDisplay = document.getElementById("display-box");
    calcDisplay.innerHTML += text;
};

const evalDisplayBox = (text) => {
    // Gives me the div element from my page
    const calcDisplay = document.getElementById("display-box");
    calcDisplay.innerHTML = text;
};

const clearDisplayBox = (text) => {
    const calcDisplay = document.getElementById("display-box");
    calcDisplay.innerHTML = text;
}

// Defining a function to be called when user clicks an input button, with checks disallowing operators as first input or consecutive
const handleButtonClick = (event) => {
    const calcDisplay = document.getElementById("display-box").innerHTML;
    
    const inputToFloat = parseFloat(event.target.value);
    if (isNaN(inputToFloat) && calcDisplay.length === 0) {
        alert("First input must be a number");
        return;
    } 
        
    const lastInput = calcDisplay[calcDisplay.length - 1];
    if (isNaN(lastInput) && isNaN(inputToFloat)) {
        alert("Number must come after operator");
        return;
    } 

    console.log(calcDisplay.length);

    updateDisplayBox(event.target.value);
};

const handleClear= (event) => {
    clearDisplayBox(event.target.value);
};

// equals button evaluation function
const handleEval = (event) => {
    const calcDisplay = document.getElementById("display-box");
    const splitCalc = calcDisplay.innerHTML.split(/([+*-/])/);
    console.log(splitCalc);
    console.log(typeof(splitCalc));
    
        // 
    if (splitCalc[1] == "+") {
       evalDisplayBox((parseFloat(splitCalc[0]) + parseFloat(splitCalc[2])));
    } else if (splitCalc[1] == "-") {
       evalDisplayBox(parseFloat(splitCalc[0]) - parseFloat(splitCalc[2]));
    } else if (splitCalc[1] == "/") {
        evalDisplayBox(parseFloat(splitCalc[0]) / parseFloat(splitCalc[2]));
    } else if (splitCalc[1] == "*") {
        evalDisplayBox(parseFloat(splitCalc[0]) * parseFloat(splitCalc[2]))
    }
   
}

// My array of number and operator buttons and their event listeners
const inputButtons = document.getElementsByClassName("input-btn");
for (let i = 0; i < inputButtons.length; ++i) {
    console.log(inputButtons[i].constructor.name);
    inputButtons[i].addEventListener("click", handleButtonClick);
};


// My evaluation "equals = " button with a different function called on it's event listener
const evalButton = document.getElementsByClassName("eval-btn");
for (let i = 0; i < evalButton.length; ++i) {
    evalButton[i].addEventListener("click", handleEval);
};

const clearButton = document.getElementsByClassName("clear-btn");
for (let i = 0; i < evalButton.length; ++i) {
    clearButton[i].addEventListener("click", handleClear);
};

// so it works with happy math, but doesn't return a result if first input is 0
// to fix I might consider splitting things up more
// need to make separate class and handling for operator buttons
// operator buttons need to store the previous text content as integer and their own operation somehow?