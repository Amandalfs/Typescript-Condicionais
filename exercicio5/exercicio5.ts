//Escreve seu codigo aqui

function verPrimo(numero:number):void{
    let vezesDiv:number = 0;

    for(let indice:number = 1; indice<=numero; indice++){
        if(numero%indice === 0){
            vezesDiv++
        }
    }

    if(vezesDiv==2){
        console.log("o numero e primo");
    } else {
        console.log("O numero nao e primo")
    }
}

verPrimo(3)