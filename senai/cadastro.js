let nomeVect = [] 
let idadeVect = []


let n = 0
while(n !=5){
    let n = Number(prompt('1-Cadastrar novo Usuario\n2-Listar Usuários\n3-Finalizar Programa\n 4-Buscar Usuário\n 5-Remover Usuário\n Escolha uma opção:'))

if (n==1){
        cadastrar()                      
}else if (n==2 ){
    let listar= []
    for(let l = 0; l < nomeVect.length; l++){
        listar.push(["Nome: "+nomeVect[l]+" Idade: "+idadeVect[l]+("\n")])
        }
    
    alert(listar.join(" "))
}else if(n==3){
        break
    }else if(n==4){
        buscar()
    }else if (n==5){
        remover()  
    }
}
function formataNome(nome){
    nome = nome.toLowerCase()
    let sobrenome = nome.split(" ")
    for( let i=0; i < sobrenome.length;i++){
        sobrenome[i] = sobrenome[i][0].toUpperCase()+sobrenome[i].substr(1)      
        
    }
    return sobrenome.join(" ")
}
function cadastrar(){
    numeroCadastro = Number(prompt('Digite o numero de novos Cadastros'))
    for(let i = 0; numeroCadastro >i; i++){
        let nome = String(prompt(`Digite nome`))
        nome = formataNome(nome)
        nomeVect.push(nome)
        let idade = Number(prompt(`Digite idade`))
        idadeVect.push(idade)
    }
}
function buscar(){
    let buscar = (prompt('Digite o nome do Usuário:'))
       buscar = formataNome(buscar)
       
       let resposta = nomeVect.indexOf(buscar)
       if(resposta==-1){
           alert('Nome não existe ou esta escrito errado.')
       }else

       return alert("Nome: "+nomeVect[resposta]+ "  Idade: "+idadeVect[resposta]+"\nPosição: "+resposta)
}
function remover(){
    let remover = (prompt('Digite Nome do usuário para remover:'))
        remover = formataNome(remover)
        let posicao = nomeVect.indexOf(remover)
        if (posicao==-1){
        alert('Nome não existe ou esta escrito errado.')
        }else {
        nomeVect.splice(posicao, 1)
        idadeVect.splice(posicao,1)

       return alert(`Removido ${remover}`)   
    }
}