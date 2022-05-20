let input1 = document.getElementById("input1").value
let input2 = document.getElementById("input2").value
let inputs = input1 + input2;

function verificar(){

    if(inputs.value !== "" && inputs.value !== null && inputs.value !==" "){
    let button = document.getElementById("button");
    button.style.backgroundColor = '#820AD1'
    button.style.color = 'white'
    }else{
    let button = document.getElementById("button");
    button.style.backgroundColor = 'white'
    button.style.color = 'rgba(128, 128, 128, 0.377)'
    }
}