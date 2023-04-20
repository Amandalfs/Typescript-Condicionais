//Escreve seu codigo aqui

function verNumero(numero:number):void{
    const arrayDeNumeros:string [] = (String(numero).split(""))
    let soma:number = 0;

    for(let indice in arrayDeNumeros){
            soma += Number(arrayDeNumeros[Number(indice)]) ** 3;
    }
    
    if(soma===numero){
        console.log("número de Armstrong")
    } else {
        console.log("nao e número de Armstrong")
    }
}

verNumero(153)