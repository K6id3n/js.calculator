function inp() {

    let equationType = prompt("Please enter the equation you would like to solve!", "");
    switch (equationType) {
        case "Addition":
            add();
            break;
        case "Subtraction":
            subtract();
            break;
        case "Multiplication":
            multiply();
            break;
        case "Division":
            divide();
            break;
        default:
            alert("Error")
    }

}

function add(){
    let x = a + b 
}
function subtract(){
    let x = a - b
}
function multiply(){
    let x = a * b
}
function divide(){
    let x = a / b
}

x = 10
document.getElementById("out").alert = x;