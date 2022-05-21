
function verificar(){
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

if(input1.value == ""){
    input1.placeholder = 'Informe seu CPF'
}else{
    input1.placeholder = 'CPF'
}

if(input2.value == "" && input2.value.length < 8){
    input2.placeholder = 'Senha inválida'
}else{
    input2.placeholder = 'Senha'
}
    input1.value = "";
    input1.focus()
    input2.value = "";
    input2.focus()

}