let operacao = prompt("digite sua operação")
let valor1 = Number(prompt("digite o valor 1:"))
let valor2 = Number(prompt("digiteo valor 2:"))

function calculator(operacao,valor1,valor2) {
    if (operacao === "+") {
        let soma = valor1 + valor2
        alert(soma)

    } else if(operacao === "-" ) {
        let sub = valor1 - valor2
        alert(sub)

    }else if( operacao === "*"){
        let mult = valor1 * valor2
        alert(mult)

    }else if(operacao === "/"){
       let sub = valor1 - valor2 
       alert(sub)

    }else {
        alert("operação inválida")
    }
} 
calculator(operacao,valor1,valor2)