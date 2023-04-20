//Escreve seu codigo aqui

function numeroPerfeito(numero: number):void{
    let soma: number = 0;
    
    for(let i:number = 0; i<numero; i++){
        if(numero%i===0){
            soma += i;
        }
    }
    if(soma===numero){
        console.log("Oow numero perfeito");
    } else {
        console.log("Infelismente esse numero nao e perfeito")
    }
}

numeroPerfeito(28)