let quantFormEnviados=0;
let dadosArray=[];
let dadosFormulario;
const enviar= document.getElementById('enviar');
 enviar.addEventListener("click",function(x){
    x.preventDefault();
    if(quantDeContatos<2){
        alert("Insira no minimo 2 contatos");
    }
    else{
        
        let formData= new FormData(document.getElementById('formulario'))
        // let cadastro = new Object();
        
         dadosArray[quantFormEnviados]= {
            nome: formData.get("nome"),
            cpf: formData.get("cpf"),
            data: formData.get("data"),
            genero: formData.get("genero"),
            escolaridade: formData.get("escolaridade"),
            cidade: formData.get("cidade"),
            estado: formData.get("estado"),
            setor: formData.get("setor"),
            complemento: formData.get("complemento"),
            num1: formData.get("num-1"),
            nome2: formData.get("nome-2"),
            num2: formData.get("num-2"),
            email2: formData.get("email-2"),
            email: formData.get("email"),
            senha: formData.get("senha")
        };
        console.log(dadosArray[0].cpf) 
    }
    for (; j <= quantDeContatos;j++) {
      dadosArray[quantFormEnviados][`nomeContato${j}`] = formData.get(`contato-nome${j}`);
      dadosArray[quantFormEnviados][`telefoneContato${j}`] = formData.get(
        `contato-telefone${j}`
      );
      dadosArray[quantFormEnviados][`emailContato${j}`] = formData.get(`contato-email${j}`);
    }
    dadosArray[quantFormEnviados].ContatosNoForm = j - 1;
    quantFormEnviados++;

   
    form.reset();
    if (quantDeContatos > 1) {
      for (let i = 2; i <= quantDeContatos; i++) {
        let removerCont = document.getElementById(`contato-${i}`);
        removerCont.remove();
      }
      quantDeContatos = 1;
    }

    addNaTabela();

    let BotaoExcluir = document.querySelectorAll('.excluir');
    for (let i = 0; i < BotaoExcluir.length; i++) {
      BotaoExcluir[i].addEventListener('click', function () {
        let remover = document.querySelectorAll(`.ref${BotaoExcluir[i].id}`);
        remover[0].remove();
        remover[1].remove();
        remover[2].remove();
        remover[3].remove();
        dadosArray[BotaoExcluir[i].id - 1].pop;
      });
    



  
