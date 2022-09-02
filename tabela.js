let quantFormEnviados = 0;
var arrayCadastro =[];
let quantFormTabela = 0;
var tabela= document.getElementById('tabela');
const cadastrar= document.getElementById("enviar");
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
const nome2= document.getElementById('nome-2');
const email2= document.getElementById('email-2');
const numero2= document.getElementById('num-2');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const mascaraCpf = /(\d{3})\.(\d{3})\.(\d{3})-(\d{2})/;
let id=0;
let dadosOriginal;
let quantDeContatos=0;
cadastrar.addEventListener("click",salvaForm);

  function resetar(){
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
     
    let nomeCont;
    let emailCont;
    let numeroCont;

    for(let i = 0; i <= contadorContatos; i++){

      nomeCont = document.querySelector(`#nomeContato${i}`);
      emailCont = document.querySelector(`#emailContato${i}`);
      numeroCont = document.querySelector(`#telefoneContato${i}`);
  
      nomeCont.value = "";
      emailCont.value = "";
      numeroCont.value = "";
    }
  
    divContato.innerHTML = "";

    complemento.value = "";
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
    
      divBotoes.innerHTML = "<button class='botao-contato' type='button' onclick='removeContato(" + Aux + ")'>Deletar Campo</button>"
    
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
              const nomeContato = document.getElementById(`nomeContato1`);
              const numeroContato = document.getElementById('numeroContato1');
              const emailContato = document.getElementById('emailContato1');
    
              nomeContato.value = dadosArray[i].contato1.nome;
              numeroContato.value = dadosArray[i].contato1.numero;
              emailContato.value = dadosArray[i].contato1.email;
            }else {
              let divFilho = document.createElement("div");
              divContato.appendChild(divFilho);
    
              divFilho.setAttribute("class", "contatos-child")
              let nomeContato = document.createElement("input");
              let numContato = document.createElement("input");
              let emailContato = document.createElement("input");
    
              divFilho.appendChild(nomeContato);
              divFilho.appendChild(numContato);
              divFilho.appendChild(emailContato);
    
              divFilho.setAttribute("id", `contato${quantDeContatos+1}`)
    
              nomeContato.setAttribute("placeholder", "Insira o nome do contato");
              nomeContato.setAttribute("id", `nomeContato${j}`);
              nomeContato.setAttribute("required", "true");
    
              numContato.setAttribute("placeholder", "Insira o telefone  com ddd");
              numContato.setAttribute("id", `numeroContato${j}`);
              numContato.setAttribute("required", "true");
              numContato.setAttribute("class", "tell");
    
              emailContato.setAttribute("placeholder", "Insira o e-mail do contato");
              emailContato.setAttribute("id", `emailContato${j}`);
              emailContato.setAttribute("required", "true");
    
              nomeContato.value = dadosArray[i][`contato${j}`].nome;
              numContato.value = dadosArray[i][`contato${j}`].numero;
              emailContato.value = dadosArray[i][`contato${j}`].email;
    
            }
          }
        }
      }
     }    

  function salvaForm(e){
    
    if (quantDeContatos >=1) {
     
    let dados;
    let contato;
    let json;
    let contNome;
    let contEmail;
    let contNumero;
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
      Contatos:quantDeContatos
    }
    for(let j=0; j<= quantDeContatos;j++){
      contNome= document.getElementById('contato-nome');
      contEmail= document.getElementById('num-contato');
      contNumero= document.getElementById('contato-email');

      contato= {
        nome: contNome.value,
        email: contEmail.value,
        numero: contNumero.value
      }
      jsonContato= JSON.stringify(contato);
      dados[`contato${j}`]=contato;
    }
    
    if (mascaraCpf.test(dados.Cpf)) {
      dados.Cpf = dados.Cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})-(\d{2})/, '$1$2$3$4');
    }
    json = JSON.stringify(dados);

  console.log(typeof json)

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
  console.log(arrayCadastro);
  quantDeContatos=0;
}
else{
  alert("Insira no minimo 2 contatos");
}
dadosOriginal="";
quantDeContatos=0;
e.preventDefault(e);

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

    for(let j=0;j<dadosArray.length;j++){
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

      colunaNome.innerText= dadosArray[i].nome;
      colunaEmail.innerText= dadosArray[i].email;
      colunaEscolaridade.innerText= dadosArray[i].escolaridade;
      colunaEdita.innerHTML= "<td class='icon-cell'><a href='#top' onclick='editaDados(" + cadastroArr[i].id + ")' ><i class=\"fa-solid fa-user\"></i></a></td>";
      colunaExclui.innerHTML= "<td class='icon-cell' ><a onclick='excluiDados(" + cadastroArr[i].id + ")'><i class=\"fa-solid fa-trash-can\"></i></td>";

    }
  }
  function editaDados(id){
    let dadosArray= [];
    let dados;
    for(let j=0;j<arrayCadastro.length;j++){
      dadosArray[j]=JSON.parse(arrayCadastro[j])
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
        nome2.value = dados.Nome2;
        email2.value = dados.Email2;
        numero2.value = dados.Numero2;
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
    
    for(let j=0;j<arrayCadastro.length;j++){
      dadosArray[j]= JSON.parse(arrayCadastro[j])
    }
    for(let i=0;i<dadosArray.length;i++){
      if(id == dadosArray[i].id){
        arrayCadastro.splice(i,1);
        tabela.deletRow(i+1);
      }
    }
    if(arrayCadastro.length ===0){
      tabela.deletRow(0);
    }
  }
  function removeContato(cont) {
    let contRemovido = document.querySelector(`#contato${cont}`);
    contRemovido.remove();
    quantDeContatos--;
  }
  

//   let botaoExcluir = document.querySelectorAll('.excluir');
//   let botaoEditar = document.querySelectorAll('.editar');
//   // let botaoExcluirTamanho = botaoExcluir.length;
//   eventoEditar++;
//   eventoExcluir++;

//     const funçãoRemove = function (e) {
//       eventoExcluir--;
//       let i = Number(e.target.id);
//       let remover = document.querySelectorAll(`.ref${i}`);
//       remover[0].remove();
//       remover[1].remove();
//       remover[2].remove();
//       remover[3].remove();

//       dadosArray[i - 1].pop;
//       quantFormNaTabela--;
//       quantFormEnviados--;

//       let dadosDaTabela = document.querySelectorAll('.table-item');
//       for (let w = i * 4 - 4, k = 1; w < dadosDaTabela.length; w++, k++) {
//         let classes = dadosDaTabela[w].className;
//         let numeroRef = classes.match(/(\d+)/)[0];
//         dadosDaTabela[w].classList.remove(`ref${numeroRef}`);
//         dadosDaTabela[w].classList.add(`ref${numeroRef - 1}`);
//         if (k === 4) {
//           k = 0;
//           dadosDaTabela[w].innerHTML = `
//           <button class="editar ações-btn" id="${numeroRef - 1}">Editar</button>
//           <button class="excluir ações-btn" id="${numeroRef - 1}">Excluir</button>
//           `;
//         }
//       }
//       ArrumandoOsEventos(i);
//     };
//   // let inputNumero = document.getElementById('num-1');
//   // let contatoTelefoneInput = document.getElementById('contato-telefone1');
//   // let inputGeral = document.querySelectorAll('.input');
//     const funçãoEdita = function (e) {
//       eventoEditar--;
//       let i = Number(e.target.id);
//       let remover = document.querySelectorAll(`.ref${i}`);
//       remover[0].remove();
//       remover[1].remove();
//       remover[2].remove();
//       remover[3].remove();

//       inputNome.value = dadosArray[i - 1].nome;
//       inputCpf.value = dadosArray[i - 1].cpf;
//       inputData.value = dadosArray[i - 1].data;
//       selectGenero.value = dadosArray[i - 1].genero;
//       selectEscolaridade.value = dadosArray[i - 1].escolaridade;
//       inputCidade.value = dadosArray[i - 1].cidade;
//       selectEstado.value = dadosArray[i - 1].estado;
//       inputSetor.value = dadosArray[i - 1].setor;
//       inputComplemento.value = dadosArray[i - 1].complemento;
//       numeroInput.value = dadosArray[i - 1].num1;
//       inputEmail.value = dadosArray[i - 1].email;
//       inputSenha.value = dadosArray[i - 1].senha;
//       let j = dadosArray[i - 1].ContatosnoForm;
//       for (let k = 1; k < j; k++) {
//         adicionarContatoBtn .click();
//       }
//       for (let p = 1; p <= j; p++) {
//         let nomeContato = document.getElementById(`contato-nome${p}`);
//         let telefoneContato = document.getElementById(`contato-telefone${p}`);
//         let emailContato = document.getElementById(`contato-email${p}`);
//         nomeContato.value = dadosArray[i - 1][`nomeContato${p}`];
//         telefoneContato.value = dadosArray[i - 1][`telefoneContato${p}`];
//         emailContato.value = dadosArray[i - 1][`emailContato${p}`];
//       }
//       dadosArray.splice(i - 1, 1);
//       quantFormEnviados--;
//       quantFormNaTabela--;

//     let dadosDaTabela = document.querySelectorAll('.table-item');
//     for (let w = i * 4 - 4, k = 1; w < dadosDaTabela.length; w++, k++) {
//       let classes = dadosDaTabela[w].className;
//       let numeroRef = classes.match(/(\d+)/)[0];
//       dadosDaTabela[w].classList.remove(`ref${numeroRef}`);
//       dadosDaTabela[w].classList.add(`ref${numeroRef - 1}`);
//       if (k === 4) {
//         k = 0;
//         dadosDaTabela[w].innerHTML = `
//         <button class="editar ações-btn" id="${numeroRef - 1}">Editar</button>
//         <button class="excluir ações-btn" id="${numeroRef - 1}">Excluir</button>
//         `;
//       }
//     }
//     ArrumandoOsEventos(i);
//   };      
//   function ArrumandoOsEventos(i) {
//     botaoExcluir = document.querySelectorAll('.excluir');
//     botaoEditar = document.querySelectorAll('.editar');
//     for (let a = i - 1; a < botaoExcluir.length; a++) {
//       botaoExcluir[a].addEventListener('click', funçãoRemove);
//       botaoEditar[a].addEventListener('click', funçãoEdita);
//     }
//   }

//   botaoExcluir[botaoExcluir.length - 1].addEventListener('click', funçãoRemove);
//   botaoEditar[botaoEditar.length - 1].addEventListener('click', funçãoEdita); 
// }
// });

//  function addNaTabela() {
//  quantFormTabela++;
//  console.log(quantFormTabela);
//  let tabela = document.getElementById('tabela');
//  console.log(dadosArray);
//    tabela.innerText='';
//    let trHead = document.createElement("tr"); 
//    tabela.appendChild(trHead);

//    let thNome = document.createElement("th");
//    let thEmail = document.createElement("th");
//    let thEscolaridade = document.createElement("th");
//    let thAcoes = document.createElement("th");

//    trHead.appendChild(thNome);
//    trHead.appendChild(thEmail);
//    trHead.appendChild(thEscolaridade);
//    trHead.appendChild(thAcoes); 

//    thNome.textContent  = "Nome";
//    thEmail.textContent = "Email";
//    thEscolaridade.textContent = "Escolaridade";
//    thAcoes.textContent = "Ações";


//   for (let i = 0; i<quantFormTabela ; i++) {
//     let trFilho = document.createElement("tr");

//     tabela.appendChild(trFilho);

//     let tdNome = document.createElement("td");
//     let tdEmail = document.createElement("td");
//     let tdEscolaridade = document.createElement("td");
//     let tdAcoes = document.createElement("td");

//     trFilho.appendChild(tdNome);
//     trFilho.appendChild(tdEmail);
//     trFilho.appendChild(tdEscolaridade);
//     trFilho.appendChild(tdAcoes);

//     tdNome.setAttribute(
//       'class',
//       `table-item nome border-right border-top ref${quantFormTabela}`
//     );
//     tdEmail.setAttribute(
//       'class',
//       `table-item nome border-right border-top ref${quantFormTabela}`
//     );
//     tdEscolaridade.setAttribute(
//       'class',
//       `table-item nome border-right border-top ref${quantFormTabela}`
//     );
//     tdAcoes.setAttribute(
//       'class', `table-item ações border-top ref${quantFormTabela}`
//     );

//     tdNome.textContent = dadosArray[i].nome;
//     tdEmail.textContent = dadosArray[i].email;
//     tdEscolaridade.textContent = dadosArray[i].escolaridade;
//     tdAcoes.innerHTML  = `
//   <button class="editar" id="${quantFormTabela}">Editar</button>
//   <button class="excluir" id="${quantFormTabela}">Excluir</button>`;
//   }
// }
// // "<td class='icon-cell'><a href='#top' onclick='editaCadastro(" + cadastroAux[i].id + ")' ><i class=\"fa-solid fa-pen-to-square\"></i></a></td>";
// // let tr= tbody.insertRow(dadosArray[j].id);
// // let colunaNome= document.createElement('tr');
// // let colunaEmail= document.createElement('tr');
// // let colunaEscolaridade= document.createElement('tr');
// // let botoesAdd= document.createElement('buttom')

// // colunaNome.setAttribute('class',`colunaNome${quantFormTabela}`)
// // colunaEmail.setAttribute('class',`colunaEmail${quantFormTabela}`);
// // colunaEscolaridade.setAttribute('class',`colunaEscolaridade${quantFormTabela}`)
// // botoesAdd.setAttribute('class', `botoes${quantFormTabela}`);



// // }}
// // }); 
// //     colunaNome.textContent= dadosArray[a].nome;
// //     colunaEmail.textContent= dadosArray[a].email;
// //     colunaEscolaridade.textContent= dadosArray[a].escolaridade;

// //     tr.insertCell().appendChild(colunaNome);
// //     tr.insertCell().appendChild(colunaEmail);
// //     tr.insertCell().appendChild(colunaEscolaridade);
//   // let BotaoExcluir = document.querySelectorAll('.excluir');
//   // for (let i = 0; i < BotaoExcluir.length; i++) {
//   //   BotaoExcluir[i].addEventListener('click', function () {
//   //     let remover = document.querySelectorAll(`.ref${BotaoExcluir[i].id}`);
//   //     remover[0].remove();
//   //     remover[1].remove();
//   //     remover[2].remove();
//   //     remover[3].remove();
//   //     dadosArray[BotaoExcluir[i].id - 1].pop;
//   //   });
//   // }
//   //  let BotaoExcluir = document.querySelectorAll('.excluir');
//   // console.log(dadosArray[quantFormEnviados].nome)
//   // for (let i = 0; i < dadosArray[i].length; i++) {
//   //   BotaoExcluir.addEventListener('click', function () {
//   // let excluir = tbody.removeRow(dadosArray[quantFormEnviados].id);
//   //  excluir.removeChild(colunaNome);
//   //  excluir.removeChild(colunaEmail);
//   //  excluir.removeChild(colunaEscolaridade);
//   //  excluir.removeChild(botoesAdd);
//   //   });
//   // }
//   // function addNaTabela() {
//   //   console.log(dadosArray[quantFormEnviados].id)
//   //   let tbody= document.getElementById('tbody')
//   //   tbody.innerText='';
//   //   for(let a=0;a<quantFormTabela;a++){
//   //     let tr= tbody.insertRow(dadosArray[quantFormEnviados].id);

//   //     tr.insertCell().appendChild(document.createTextNode(dadosArray[a].nome));
//   //     tr.insertCell().appendChild(document.createTextNode(dadosArray[a].email));
//   //     tr.insertCell().appendChild(document.createTextNode(dadosArray[a].escolaridade));
//   //     let botoesadd= document.createElement('buttom')
      
//   //     botoesadd.setAttribute('class', `table-item ações border-top ref${quantFormTabela}`);
//   //     botoesadd.innerHTML = `
//   //     <button class="editar" id="${quantFormTabela}">Editar</button>
//   //     <button class="excluir" id="${quantFormTabela}">Excluir</button>`;
//   //     tr.insertCell().appendChild(botoesadd);
//   //     quantFormTabela++;
//   // let Id = document.createTextNode(dadosArray[a].id);
//   //   function Excluir(){
//     //     let linha = $(this).parent().parent(); //tr
//     //     linha.remove();
//     // };
//     //   let BotaoExcluir = document.querySelectorAll('.excluir');
//     //    BotaoExcluir.addEventListener("click",Excluir());
//     //   // BotaoExcluir.setAttribute("onclick","dadosArray[quantFormEnviados].deletar()");
    
//     //   // for (let i = 0; i < BotaoExcluir.length; i++) {
//       //   //   BotaoExcluir[i].addEventListener('click', function () {
//         //   //     let remover = document.querySelectorAll(`.ref${BotaoExcluir[i].id}`);
//         //   //     remover[0].remove();
//         //   //     remover[1].remove();
//         //   //     remover[2].remove();
//         //   //     remover[3].remove();
//         //   //     dadosArray[BotaoExcluir[i].id - 1].pop;
//         //   //   });
//         //   // }
//         //   function addNaTabela() {
//           //     quantFormTabela++;
//           //     console.log(quantFormTabela)
//           //     let tbody = document.getElementById('tbody')
//           //     tbody.innerText = '';
//           //     for (let a = 0; a < quantFormTabela; a++) {
//             //       let linha = $(this).parent().parent();
            
//             //       let ColunaNome = $("<td>").text(dadosArray[a].nome);
//             //       let ColunaEmail = $("<td>").text(dadosArray[a].email);
//             //       let ColunaEscolaridade = $("<td>").text(dadosArray[a].escolaridade);
//             //       let ColunaBotoes = $("<td>");
//             //       let botoesAdd = document.createElement('buttom');
            
//             //       botoesAdd.setAttribute('class', `table-item ações border-top ref${quantFormTabela}`);
//             //       botoesAdd.innerHTML = `
//             //       <button class="editar" id="${quantFormTabela}">Editar</button>
//             //       <button class="excluir" id="${quantFormTabela}">Excluir</button>`;
            
//             //       ColunaBotoes.append(botoesAdd)
//             //       linha.append(ColunaNome);
//             //       linha.append(ColunaEmail);
//             //       linha.append(ColunaEscolaridade);
//             //       linha.append(ColunaBotoes);
//             //       console.log(ColunaNome);
            
//             //     }
//             //   }
//             // }
//             //  );
            
            
//             // tdNome = par.children("td:nth-child(1)");
            // tdEmail = par.children("td:nth-child(2)");
            // tdEscolaridade = par.children("td:nth-child(3)");
            // tdBotoes = par.children("td:nth-child(4)");
            
            
            // tr.appendChild(Id);
            // tr.insertCell().appendChild(document.createTextNode(dadosArray[a].nome));
            // tr.insertCell().appendChild(document.createTextNode(dadosArray[a].email));
            // tr.insertCell().appendChild(document.createTextNode(dadosArray[a].escolaridade));
            // let botoesadd = document.createElement('buttom')
            
            // tr.insertCell().appendChild(botoesadd);
            
            
            
            
            
  //     tr.insertCell().appendChild(botoesAdd);

      // tr.insertCell().appendChild();
      // tr.insertCell().appendChild(document.createTextNode(dadosArray[a].email));
      // tr.insertCell().appendChild(document.createTextNode(dadosArray[a].escolaridade));




    // quantFormTabela++;
    // console.log(quantFormTabela)
    // let tbody= document.getElementById('tbody')
    // tbody.innerText='';
    // for(let a=0;a<quantFormTabela;a++){
    //   let td= tbody.insertRow();
    //    let colunaNome= document.createElement('tr');
    //    let colunaEmail= document.createElement('tr');
    //    let colunaEscolaridade= document.createElement('tr');

    //   td.appendChild(colunaNome);
    //   td.appendChild(colunaEmail);
    //   td.appendChild(colunaEscolaridade);
    //   let botoesadd= document.createElement('buttom')
    //   botoesadd.setAttribute('class', `table-item ações border-top ref${quantFormTabela}`);
    //   botoesadd.innerHTML = `
    //   <button class="editar" id="${quantFormTabela}">Editar</button>
    //   <button class="excluir" id="${quantFormTabela}">Excluir</button>`;
    //   tr.appendChild(botoesadd);
  //   }}
  // });
