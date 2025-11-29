currentInput = ''
previousInput = ''
operation = ''
 const clearButton = () => {
    if (!isOn) return;
    currentInput = '0'
    document.getElementById('display').value = currentInput
 }
 const numButton = (num) => {
    if (!isOn) return;

    num = String(num);   

   
    if (display.value === "0") {
        display.value = num;
        currentInput = num;
    } else {
        currentInput = String(currentInput) + num; 
        document.getElementById('display').value = currentInput
    }
};

const scicalc = (func) => {
    if (!isOn) return
    if(currentInput === "0"){
        currentInput = "";
    }
    currentInput += func
    document.getElementById('display').value = currentInput
}

const calc =() => {
    answer = eval(currentInput)
    document.getElementById('display').value = answer
}

const del =() => {
    currentInput = currentInput.slice(0,-1)
    if (currentInput === "") {
        currentInput = "0";
    }
    document.getElementById('display').value = currentInput
    
}
const sinDeg =(x) => {
    return Math.sin(x*Math.PI/180)
}
let isOn = false;
const turnOff = () => {
    isOn = false;
    currentInput = ""
    const display = document.getElementById('display');
    display.disabled = true;          
    display.value = "";              
    display.placeholder = "";         
    display.style.background = "#E5E7EB"; 
};


const turnOn = () => {
    isOn = true
    currentInput = ""
    const display = document.getElementById('display');
    display.disabled = false;        
    display.value = "0";               
    display.placeholder = "";        
    display.style.background = "#FFFFFF";  
};


