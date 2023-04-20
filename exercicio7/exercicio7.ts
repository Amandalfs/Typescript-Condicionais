//Escreve seu codigo aqui

function verPali(palavra:string): void{
    const textoEmArray:string[] = palavra.split('');
    const palavraInvertida:string = textoEmArray.join('')
    
    if(palavra===palavraInvertida){
        console.log("e palíndromo");
    } else {
        console.log("nao e palíndromo")
    }
}

verPali("ana")