let quantFormEnviados = 0;
var arrayCadastro =[];
let quantFormTabela = 0;
var tabela= document.getElementById('tabela');
const salvar= document.getElementById("formulario");
const divContato = document.querySelector(".contato-filho");
const Id = document.getElementById('identificador');
const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const data = document.getElementById('data')
const genero = document.getElementById('genero');
const escolaridade = document.getElementById('escolaridade');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const setor = document.getElementById('setor');
const complemento = document.getElementById('complemento');
const numero= document.getElementById('num-1');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const mascaraCpf = /(\d{3})\.(\d{3})\.(\d{3})-(\d{2})/;
let id=0;
let dadosOriginal;
let quantDeContatos=0;
salvar.addEventListener("submit",salvaForm)

  function resetar(){
    let contatoNome;
    let contatoEmail;
    let contatoNumero;
    nome.value="";
    cpf.value="";
    data.value="";
    genero.value="";
    escolaridade.value="";
    cidade.value="";
    estado.value="";
    setor.value="";
    complemento.value="";
    senha.value="";
    email.value="";
     

    for(let i = 0; i <quantDeContatos; i++){

      contatoNome = document.querySelector(`#nomeContato${i}`);
      contatoEmail = document.querySelector(`#emailContato${i}`);
      contatoNumero = document.querySelector(`#numeroContato${i}`);
  
      contatoNome.value = "";
      contatoEmail.value = "";
      contatoNumero.value = "";
    }
  
    divContato.innerHTML = "";

    // complemento.value = "";
    nome.style.cssText = "border: 1px solid #000;' + 'background-color:#000";
    email.style.cssText = "border: 1px solid #000;' + 'background-color: #000";
    cpf.style.cssText = "border: 1px solid #000;' + 'background-color: #000";
  }


  function addContato(){
      let divFilho = document.createElement("div");
      divContato.appendChild(divFilho);
    
      divFilho.setAttribute("class", "contatos-filhos")

      let nomeContato = document.createElement("input");
      let telefoneContato = document.createElement("input");
      let emailContato = document.createElement("input");
      let divBotoes = document.createElement("div");
      let Aux = quantDeContatos + 1;
    
      divFilho.appendChild(nomeContato);
      divFilho.appendChild(telefoneContato);
      divFilho.appendChild(emailContato);
      divFilho.appendChild(divBotoes);
    
      divFilho.setAttribute("id", `contato${quantDeContatos+1}`)
    
      divBotoes.setAttribute("class", "botaoCont");
    
      divBotoes.innerHTML = "<button class='botao-contato' type='button' onclick='removeContato(" + Aux + ")'>Excluir contato</button>"
    
      nomeContato.setAttribute("placeholder", "Insira o nome do contato");
      nomeContato.setAttribute("id", `nomeContato${quantDeContatos+1}`);
      nomeContato.setAttribute("required", "true");
    
    
      telefoneContato.setAttribute("placeholder", "Insira o telefone  com ddd");
      telefoneContato.setAttribute("id", `telefoneContato${quantDeContatos+1}`);
      telefoneContato.setAttribute("required", "true");
      telefoneContato.setAttribute("class", "tell");
    
      emailContato.setAttribute("placeholder", "Insira o e-mail do contato");
      emailContato.setAttribute("id", `emailContato${quantDeContatos+1}`);
      emailContato.setAttribute("required", "true");
    
      quantDeContatos++;
    }
   
    function mostrarContatos(id){
    
      let dadosArray = [];
      for(let i = 0; i < arrayCadastro.length; i++){
        dadosArray[i] = JSON.parse(arrayCadastro[i])
      }
    
      for(let i = 0; i < arrayCadastro.length; i++){
        if(dadosArray[i].id == id){

          quantDeContatos = dadosArray[i].contatos;
          for(let j = 0; j <= dadosArray[i].contatos; j++){
            if(j==0){
              const nomeCont = document.getElementById(`nomeContato0`);
              const numeroCont = document.getElementById('numeroContato0');
              const emailCont = document.getElementById('emailContato0');
    
              nomeCont.value = dadosArray[i].contato0.nome;
              numeroCont.value = dadosArray[i].contato0.telefone;
              emailCont.value = dadosArray[i].contato0.email;
            }else {
              let divFilho = document.createElement("div");
              divContato.appendChild(divFilho);
    
              divFilho.setAttribute("class", "contatos-filhos")
              let nomeContato = document.createElement("input");
              let telefoneContato = document.createElement("input");
              let emailContato = document.createElement("input");
    
              divFilho.appendChild(nomeContato);
              divFilho.appendChild(telefoneContato);
              divFilho.appendChild(emailContato);
    
              divFilho.setAttribute("id", `contato${quantDeContatos+1}`)
    
              nomeContato.setAttribute("placeholder", "Insira o nome do contato");
              nomeContato.setAttribute("id", `nomeContato${j}`);
              nomeContato.setAttribute("required", "true");
    
              telefoneContato.setAttribute("placeholder", "Insira o telefone  com ddd");
              telefoneContato.setAttribute("id", `numeroContato${j}`);
              telefoneContato.setAttribute("required", "true");
              telefoneContato.setAttribute("class", "tell");
    
              emailContato.setAttribute("placeholder", "Insira o e-mail do contato");
              emailContato.setAttribute("id", `emailContato${j}`);
              emailContato.setAttribute("required", "true");
    
              nomeContato.value = dadosArray[i][`contato${j}`].nome;
              telefoneContato.value = dadosArray[i][`contato${j}`].telefone;
              emailContato.value = dadosArray[i][`contato${j}`].email;
              
            }
          }
        }
      }
     }    

  function salvaForm(e){
    console.log(quantDeContatos)
    e.preventDefault( );      
    if (quantDeContatos >=1) {


    let dados;
    let contato;
    let json;
    // let jsonContato;

    dados={
      Nome:nome.value,
      Cpf:cpf.value,
      Escolaridade:escolaridade.value,
      Cidade:cidade.value,
      Estado: estado.value,
      Setor:setor.value,
      Complemento:complemento.value,
      Numero: numero.value,
      Email:email.value,
      Senha:senha.value,
      id:id,
      contatos:quantDeContatos
    }
    for(let i=0; i< quantDeContatos;i++){
      let  contatoNome= document.querySelector(`#nomeContato${i}`);
      let  contatoNumero= document.querySelector(`#numeroContato${i}`);
      let  contatoEmail= document.querySelector(`#emailContato${i}`);

      contato= {
        nome: contatoNome.value,
        telefone: contatoNumero.value,
        email: contatoEmail.value
      }
      console.log(contatoNumero.value)
      jsonContato= JSON.stringify(contato);
      dados[`contato${i}`]=contato;
    }
    if (mascaraCpf.test(dados.Cpf)) {
      dados.Cpf = dados.Cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})-(\d{2})/, '$1$2$3$4');
    }
    json = JSON.stringify(dados);

  console.log(nome.value)

    if (arrayCadastro.includes(dadosOriginal)){
      editaArray(json);
      mostrarDados();
      dadosOriginal="";
    }
    else{
      dados.id=id;
      if (mascaraCpf.test(dados.Cpf)) {
        dados.Cpf = dados.Cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})-(\d{2})/, '$1$2$3$4');
      }
      let jsonDadosNovos=JSON.stringify(dados);
      arrayCadastro.push(jsonDadosNovos);
      id++
      mostrarDados();
    }
   resetar();
  quantDeContatos=0;
}
else{
  alert("Insira no minimo 2 contatos");
}
dadosOriginal="";
quantDeContatos=0;


}
  function mostrarDados(){
    let dadosArray=[];
    for(let i=0; i<arrayCadastro.length;i++){
      dadosArray[i]=JSON.parse(arrayCadastro[i])
    }
    tabela.innerHTML="";
    let tHead= document.createElement("tr");

    tabela.appendChild(tHead);

    let tituloNome= document.createElement("th");
    let tituloEmail= document.createElement("th");
    let tituloEscolaridade= document.createElement("th");
    let tituloEdita= document.createElement("th");
    let tituloExclui= document.createElement("th");

    tHead.appendChild(tituloNome);
    tHead.appendChild(tituloEmail);
    tHead.appendChild(tituloEscolaridade);
    tHead.appendChild(tituloEdita);
    tHead.appendChild(tituloExclui);

    tituloNome.innerText= "Nome";
    tituloEmail.innerText= "Email";
    tituloEscolaridade.innerText= "Escolaridade";
    tituloEdita.innerText= "Editar";
    tituloExclui.innerText= "Excluir";

    for(let i=0;i<dadosArray.length;i++){
      let tFilho= document.createElement("tr");

      tabela.appendChild(tFilho);

      let colunaNome= document.createElement("td");
      let colunaEmail= document.createElement("td");
      let colunaEscolaridade= document.createElement("td");
      let colunaEdita= document.createElement("td");
      let colunaExclui= document.createElement("td");

      tFilho.appendChild(colunaNome);
      tFilho.appendChild(colunaEmail);
      tFilho.appendChild(colunaEscolaridade);
      tFilho.appendChild(colunaEdita);
      tFilho.appendChild(colunaExclui);

      colunaNome.innerText= dadosArray[i].Nome;
      colunaEmail.innerText= dadosArray[i].Email;
      colunaEscolaridade.innerText= dadosArray[i].Escolaridade;
      colunaEdita.innerHTML= "<td class='icon-cell'><a href='#top' onclick='editaDados(" + dadosArray[i].id + ")' ><i class=\"fa-solid fa-pen-to-square\"></i></a></td>";
      colunaExclui.innerHTML= "<td class='icon-cell'><a onclick='excluiDados(" + dadosArray[i].id + ")'><i class=\"fa-solid fa-trash-can\"></i></a></td>";

    }
  }
  function editaDados(id){
    let dadosArray= [];
    let dados;
    for(let i=0;i<arrayCadastro.length;i++){
      dadosArray[i]=JSON.parse(arrayCadastro[i])
    }
    for(let i=0;i<dadosArray.length;i++){
      if(dadosArray[i].id==id){
        dados= dadosArray[i];
        Id.value = dados.id;
        nome.value = dados.Nome;
        cpf.value = dados.Cpf;
        data.value = dados.Data;
        genero.value = dados.Genero;
        escolaridade.value = dados.Escolaridade;
        cidade.value=dados.Cidade;
        estado.value= dados.Estado;
        setor.value = dados.Setor;
        complemento.value = dados.Complemento;
        numero.value = dados.Numero;
        email.value = dados.Email;
        senha.value = dados.Senha;

        mostrarContatos(id);
      }
    }
    let json= JSON.stringify(dados);
    dadosOriginal=json;
  }
  function editaArray(s){
    let index = arrayCadastro.indexOf(dadosOriginal);
    arrayCadastro.splice(index,1, s);
    }

  function excluiDados(id){
    let dadosArray=[];
    
    for(let i=0;i<arrayCadastro.length;i++){
      dadosArray[i]= JSON.parse(arrayCadastro[i])
    }
    for(let i=0;i<dadosArray.length;i++){
      if(id == dadosArray[i].id){
        arrayCadastro.splice(i,1);
        tabela.deleteRow(i+1);
      }
    }
    if(arrayCadastro.length ==0){
      tabela.deleteRow(0);
    }
  }
  function removeContato(cont) {
    let contRemovido = document.querySelector(`#contato${cont}`);
    contRemovido.remove();
    quantDeContatos--;
  }
  
