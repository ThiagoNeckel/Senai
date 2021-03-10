let fila = []
let obj = 0 

while (obj !=6){
 obj = prompt("1-Adicionar\n2-Remover\n3-Listar\n4-Limpar Fila\n5-Verificar Fila\n6-Sair")
    if (obj == 1){

        if (fila.length < 25){
             
            addFila()

        }else {
            alert('Pilha cheia ')
        }

    }else if (obj == 2 ){
        delFila()
    }else if (obj == 3){
       alert(fila)
    }else if (obj == 4){
        limpaFila()
    }else if (obj == 5){
        vazio()
    }else{
        alert ("Saindo")
    }
}

function addFila(){
     let entrada = prompt('Digite item a ser Cadastrado:')
     return fila.push(entrada)
}
function delFila(){
     fila.shift()
      return alert("Deletado!!")
}
function limpaFila(){
        fila.splice(0,fila.length)
        alert ("Fila vazia ")
}
function vazio(){
    if (fila.length == 0 ){
        alert(`Fila vazia!!`)
    }else{
        alert(`Fila tem ${fila.length} elementos`)
    }
}
     
