//Escreve seu codigo aqui

function verificarPalavra(palavra:string):void{
    const arrayDePalavras:string[] = palavra.toLowerCase().split('');

    const somenteVogais = arrayDePalavras.every((elemento:string)=>{
        const vogais:string [] = ["a", "e", "i", "o", "u"]
        if(vogais.includes(elemento)){
            return true
        }
    })

    const somenteConsoantes = arrayDePalavras.every((elemento:string)=>{
        const conso:string [] = ["q", "w", "r", "t", "y", 'p', 's', 'd', 'f','g','h','j','k','l','z','c','v','b','n','m']
        if(conso.includes(elemento)){
            return true
        }
    })

    if(somenteVogais){
        console.log("a palavra tem apenas vogais.")
    } else if(somenteConsoantes) {
        console.log("a palavra tem apenas consoantes.")
    } else {
        console.log("a palavra e uma mistura de ambos.")
    }

}


verificarPalavra("www")