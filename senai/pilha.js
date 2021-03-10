let pilha = []
let item = 0

while (item !=6){
 item = prompt("1-Empilhar\n2-Desempilhar\n3-Listar\n4-Limpar Pilha\n5-Verificar Pilha\n6-Sair")
    if (item == 1){

        if (pilha.length < 20){
             
            addPilha()

        }else {
            alert('Pilha cheia ')
        }

    }else if (item == 2 ){
        delPilha()
    }else if (item == 3){
       alert(pilha)
    }else if (item == 4){
        limpaPilha()
    }else if (item== 5){
        vazio()
    }else{
        alert ("Saindo")
    }
}

function addPilha(){
     let entrada = prompt('Digite item a ser Cadastrado:')
     return pilha.push(entrada)
}
function delPilha(){
     pilha.pop()
      return alert("Deletado!!")
}
function limpaPilha(){
        pilha.splice(0,20)
        alert ("Pilha vazia ")
}
function vazio(){
    if (pilha.length == 0 ){
        alert(`Pilha vazia!!`)
    }else{
        alert(`Pilha tem ${pilha.length} elementos`)
    }
}
     
