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
        
         dadosArray[quanFormEnviados]= {
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
        console.log(dadosArray[0].nome) 
    }
    for (let i = 1; i <= quantDeContatos; i++) {
        dadosArray[quantFormEnviados][`nomeContato${i}`] = formData.get(`contato-nome${i}`);
        dadosArray[quantFormEnviados][`telefoneContato${i}`] = formData.get(
          `contato-telefone${i}`
        );
        dadosDoFormularioObj[quantidadeDeFormulariosEnviados][`emailContato${i}`] = formData.get(`contato-email${i}`);
      }
      quantFormEnviados++;
  
      //resetando o formulário pra que um novo seja preenchido
      form.reset();
  
});



    
//     class tabela{
//         constructor(){

//         } 
//         let tabela= new tabela()
//         listatabela(){
//             let tbody= document.getElementById('tbody');
//              let tr= tbody.insertRow();
    
//              let td_nome = tr.insertCell();
//              let td_email = tr.insertCell();
//              let td_escolaridade = tr.insertCell();
//              let td_acoes = tr.insertCell();
    
//         }

//     }
//  })

// }