let numeros = []
let left =[]
let right = []

let quant = prompt("Digite a quantidade de numeros a serem cadastrados")

for(let i=0; i != quant;i++){
    let n = Number(prompt("Digite um numero"))
    numeros.push(n)    
}
alert('Numeros cadastrados:\n' +numeros+'\nOrdenados:\n'+mergeSort(numeros))

function mergeCorta(left, right) {
    let array = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift())  
        } else {
            array.push(right.shift()) 
        }
    } 
    return [ ...array, ...left, ...right ]
}
function mergeSort(array){
    let meio  = array.length / 2
  
  if(array.length < 2){
    return array 
  }
   let left = array.splice(0, meio)
  return mergeCorta(mergeSort(left),mergeSort(array))
}
