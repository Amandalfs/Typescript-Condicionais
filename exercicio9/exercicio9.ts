//Escreve seu codigo aqui

function verQuadradoPerfeito(numero:number):void{
    const raiz:number = Math.sqrt(numero);
    if(Number.isInteger(raiz)){
        console.log("Quadrado Perfeito");
    } else {
        console.log("quadrado Inperfeito")
    }
}

verQuadradoPerfeito(9)