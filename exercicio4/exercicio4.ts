//Escreve seu codigo aqui

function verMaior(num1:number, num2:number, num3:number):number{
    if(num1>num2 && num1>num3){
        return num1;
    } else if(num2>num1 && num2>num3){
        return num2;
    } else {
        return num3
    }
}

console.log(verMaior(5,25,3))