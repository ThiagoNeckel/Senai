let numeros = []

let quant = prompt("Digite a quantidade de numeros a serem cadastrados")

for(let i=0; i != quant;i++){
    let n = Number(prompt("Digite um numero"))
    numeros.push(n)    
}
alert('Numeros cadastrados:\n' +numeros+'\nOrdenados:\n'+bubbleSort())


function bubbleSort(){

    for(let j = numeros.length - 1 ; j > 0; j--) {
        for (let i = 0 ; i < j ; i++){
            if (numeros[i] > numeros[i+1]){
            [numeros[i] , numeros[i + 1]] = [numeros[i+1],numeros[i]]
            
            }
    
        }
    } 
    return numeros
}
