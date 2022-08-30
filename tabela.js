let eventoExcluir = 0;
let eventoEditar = 0;
let quantFormEnviados = 0;
let dadosArray = [];
let quantFormTabela = 0;
const enviar = document.getElementById('enviar');
enviar.addEventListener("click", function (x) {
  x.preventDefault();
  let formData = new FormData(document.getElementById('formulario'))
  if (quantDeContatos < 2) {
    alert("Insira no minimo 2 contatos");
  }
  else {
    let inputNome = document.getElementById('nome');
    let inputCpf = document.getElementById('cpf');
    let inputData = document.getElementById('data')
    let selectGenero = document.getElementById('genero');
    let selectEscolaridade = document.getElementById('escolaridade');
    let inputCidade = document.getElementById('cidade');
    let selectEstado = document.getElementById('estado');
    let inputSetor = document.getElementById('setor');
    let inputComplemento = document.getElementById('complemento');
    let inputEmail = document.getElementById('email');
    let inputSenha = document.getElementById('senha');
    let formulario = document.getElementById('formulario');
    let id=0;
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
      senha: formData.get("senha"),
    };

  let j = 1;
  for (; j <= quantDeContatos; j++) {
    dadosArray[quantFormEnviados][`nomeContato${j}`] = formData.get(`contato-nome${j}`);
    dadosArray[quantFormEnviados][`telefoneContato${j}`] = formData.get(
      `contato-telefone${j}`
    );
    dadosArray[quantFormEnviados][`emailContato${j}`] = formData.get(`contato-email${j}`);
  }
  dadosArray[quantFormEnviados].ContatosNoForm = j - 1;
  quantFormEnviados++;

  formulario.reset();
  if (quantDeContatos > 1) {
    for (let i = 2; i <= quantDeContatos; i++) {
      let removeContato = document.getElementById(`contato-${i}`);
      removeContato.remove();
    }
    quantDeContatos = 1;
  }
  
  addNaTabela();

  let botaoExcluir = document.querySelectorAll('.excluir');
  let botaoEditar = document.querySelectorAll('.editar');
  // let botaoExcluirTamanho = botaoExcluir.length;
  eventoEditar++;
  eventoExcluir++;

    const funçãoRemove = function (e) {
      eventoExcluir--;
      let i = Number(e.target.id);
      let remover = document.querySelectorAll(`.ref${i}`);
      remover[0].remove();
      remover[1].remove();
      remover[2].remove();
      remover[3].remove();

      dadosArray[i - 1].pop;
      quantFormNaTabela--;
      quantFormEnviados--;

      let dadosDaTabela = document.querySelectorAll('.table-item');
      for (let w = i * 4 - 4, k = 1; w < dadosDaTabela.length; w++, k++) {
        let classes = dadosDaTabela[w].className;
        let numeroRef = classes.match(/(\d+)/)[0];
        dadosDaTabela[w].classList.remove(`ref${numeroRef}`);
        dadosDaTabela[w].classList.add(`ref${numeroRef - 1}`);
        if (k === 4) {
          k = 0;
          dadosDaTabela[w].innerHTML = `
          <button class="editar ações-btn" id="${numeroRef - 1}">Editar</button>
          <button class="excluir ações-btn" id="${numeroRef - 1}">Excluir</button>
          `;
        }
      }
      ArrumandoOsEventos(i);
    };
  // let inputNumero = document.getElementById('num-1');
  // let contatoTelefoneInput = document.getElementById('contato-telefone1');
  // let inputGeral = document.querySelectorAll('.input');
    const funçãoEdita = function (e) {
      eventoEditar--;
      let i = Number(e.target.id);
      let remover = document.querySelectorAll(`.ref${i}`);
      remover[0].remove();
      remover[1].remove();
      remover[2].remove();
      remover[3].remove();

      inputNome.value = dadosArray[i - 1].nome;
      inputCpf.value = dadosArray[i - 1].cpf;
      inputData.value = dadosArray[i - 1].data;
      selectGenero.value = dadosArray[i - 1].genero;
      selectEscolaridade.value = dadosArray[i - 1].escolaridade;
      inputCidade.value = dadosArray[i - 1].cidade;
      selectEstado.value = dadosArray[i - 1].estado;
      inputSetor.value = dadosArray[i - 1].setor;
      inputComplemento.value = dadosArray[i - 1].complemento;
      numeroInput.value = dadosArray[i - 1].num1;
      inputEmail.value = dadosArray[i - 1].email;
      inputSenha.value = dadosArray[i - 1].senha;
      let j = dadosArray[i - 1].ContatosnoForm;
      for (let k = 1; k < j; k++) {
        adicionarContatoBtn .click();
      }
      for (let p = 1; p <= j; p++) {
        let nomeContato = document.getElementById(`contato-nome${p}`);
        let telefoneContato = document.getElementById(`contato-telefone${p}`);
        let emailContato = document.getElementById(`contato-email${p}`);
        nomeContato.value = dadosArray[i - 1][`nomeContato${p}`];
        telefoneContato.value = dadosArray[i - 1][`telefoneContato${p}`];
        emailContato.value = dadosArray[i - 1][`emailContato${p}`];
      }
      dadosArray.splice(i - 1, 1);
      quantFormEnviados--;
      quantFormNaTabela--;

    let dadosDaTabela = document.querySelectorAll('.table-item');
    for (let w = i * 4 - 4, k = 1; w < dadosDaTabela.length; w++, k++) {
      let classes = dadosDaTabela[w].className;
      let numeroRef = classes.match(/(\d+)/)[0];
      dadosDaTabela[w].classList.remove(`ref${numeroRef}`);
      dadosDaTabela[w].classList.add(`ref${numeroRef - 1}`);
      if (k === 4) {
        k = 0;
        dadosDaTabela[w].innerHTML = `
        <button class="editar ações-btn" id="${numeroRef - 1}">Editar</button>
        <button class="excluir ações-btn" id="${numeroRef - 1}">Excluir</button>
        `;
      }
    }
    ArrumandoOsEventos(i);
  };      
  function ArrumandoOsEventos(i) {
    botaoExcluir = document.querySelectorAll('.excluir');
    botaoEditar = document.querySelectorAll('.editar');
    for (let a = i - 1; a < botaoExcluir.length; a++) {
      botaoExcluir[a].addEventListener('click', funçãoRemove);
      botaoEditar[a].addEventListener('click', funçãoEdita);
    }
  }

  botaoExcluir[botaoExcluir.length - 1].addEventListener('click', funçãoRemove);
  botaoEditar[botaoEditar.length - 1].addEventListener('click', funçãoEdita); 
}
});

 function addNaTabela() {
 quantFormTabela++;
 console.log(quantFormTabela);
 let tabela = document.getElementById('tabela');
 console.log(dadosArray);
   tabela.innerText='';
   let trHead = document.createElement("tr"); 
   tabela.appendChild(trHead);

   let thNome = document.createElement("th");
   let thEmail = document.createElement("th");
   let thEscolaridade = document.createElement("th");
   let thAcoes = document.createElement("th");

   trHead.appendChild(thNome);
   trHead.appendChild(thEmail);
   trHead.appendChild(thEscolaridade);
   trHead.appendChild(thAcoes); 

   thNome.textContent  = "Nome";
   thEmail.textContent = "Email";
   thEscolaridade.textContent = "Escolaridade";
   thAcoes.textContent = "Ações";


  for (let i = 0; i<quantFormTabela ; i++) {
    let trFilho = document.createElement("tr");

    tabela.appendChild(trFilho);

    let tdNome = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdEscolaridade = document.createElement("td");
    let tdAcoes = document.createElement("td");

    trFilho.appendChild(tdNome);
    trFilho.appendChild(tdEmail);
    trFilho.appendChild(tdEscolaridade);
    trFilho.appendChild(tdAcoes);

    tdNome.setAttribute(
      'class',
      `table-item nome border-right border-top ref${quantFormTabela}`
    );
    tdEmail.setAttribute(
      'class',
      `table-item nome border-right border-top ref${quantFormTabela}`
    );
    tdEscolaridade.setAttribute(
      'class',
      `table-item nome border-right border-top ref${quantFormTabela}`
    );
    tdAcoes.setAttribute(
      'class', `table-item ações border-top ref${quantFormTabela}`
    );

    tdNome.textContent = dadosArray[i].nome;
    tdEmail.textContent = dadosArray[i].email;
    tdEscolaridade.textContent = dadosArray[i].escolaridade;
    tdAcoes.innerHTML  = `
  <button class="editar" id="${quantFormTabela}">Editar</button>
  <button class="excluir" id="${quantFormTabela}">Excluir</button>`;
  }
}
// "<td class='icon-cell'><a href='#top' onclick='editaCadastro(" + cadastroAux[i].id + ")' ><i class=\"fa-solid fa-pen-to-square\"></i></a></td>";
// let tr= tbody.insertRow(dadosArray[j].id);
// let colunaNome= document.createElement('tr');
// let colunaEmail= document.createElement('tr');
// let colunaEscolaridade= document.createElement('tr');
// let botoesAdd= document.createElement('buttom')

// colunaNome.setAttribute('class',`colunaNome${quantFormTabela}`)
// colunaEmail.setAttribute('class',`colunaEmail${quantFormTabela}`);
// colunaEscolaridade.setAttribute('class',`colunaEscolaridade${quantFormTabela}`)
// botoesAdd.setAttribute('class', `botoes${quantFormTabela}`);



// }}
// }); 
//     colunaNome.textContent= dadosArray[a].nome;
//     colunaEmail.textContent= dadosArray[a].email;
//     colunaEscolaridade.textContent= dadosArray[a].escolaridade;

//     tr.insertCell().appendChild(colunaNome);
//     tr.insertCell().appendChild(colunaEmail);
//     tr.insertCell().appendChild(colunaEscolaridade);
  // let BotaoExcluir = document.querySelectorAll('.excluir');
  // for (let i = 0; i < BotaoExcluir.length; i++) {
  //   BotaoExcluir[i].addEventListener('click', function () {
  //     let remover = document.querySelectorAll(`.ref${BotaoExcluir[i].id}`);
  //     remover[0].remove();
  //     remover[1].remove();
  //     remover[2].remove();
  //     remover[3].remove();
  //     dadosArray[BotaoExcluir[i].id - 1].pop;
  //   });
  // }
  //  let BotaoExcluir = document.querySelectorAll('.excluir');
  // console.log(dadosArray[quantFormEnviados].nome)
  // for (let i = 0; i < dadosArray[i].length; i++) {
  //   BotaoExcluir.addEventListener('click', function () {
  // let excluir = tbody.removeRow(dadosArray[quantFormEnviados].id);
  //  excluir.removeChild(colunaNome);
  //  excluir.removeChild(colunaEmail);
  //  excluir.removeChild(colunaEscolaridade);
  //  excluir.removeChild(botoesAdd);
  //   });
  // }
  // function addNaTabela() {
  //   console.log(dadosArray[quantFormEnviados].id)
  //   let tbody= document.getElementById('tbody')
  //   tbody.innerText='';
  //   for(let a=0;a<quantFormTabela;a++){
  //     let tr= tbody.insertRow(dadosArray[quantFormEnviados].id);

  //     tr.insertCell().appendChild(document.createTextNode(dadosArray[a].nome));
  //     tr.insertCell().appendChild(document.createTextNode(dadosArray[a].email));
  //     tr.insertCell().appendChild(document.createTextNode(dadosArray[a].escolaridade));
  //     let botoesadd= document.createElement('buttom')
      
  //     botoesadd.setAttribute('class', `table-item ações border-top ref${quantFormTabela}`);
  //     botoesadd.innerHTML = `
  //     <button class="editar" id="${quantFormTabela}">Editar</button>
  //     <button class="excluir" id="${quantFormTabela}">Excluir</button>`;
  //     tr.insertCell().appendChild(botoesadd);
  //     quantFormTabela++;
  // let Id = document.createTextNode(dadosArray[a].id);
  //   function Excluir(){
    //     let linha = $(this).parent().parent(); //tr
    //     linha.remove();
    // };
    //   let BotaoExcluir = document.querySelectorAll('.excluir');
    //    BotaoExcluir.addEventListener("click",Excluir());
    //   // BotaoExcluir.setAttribute("onclick","dadosArray[quantFormEnviados].deletar()");
    
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
        //   function addNaTabela() {
          //     quantFormTabela++;
          //     console.log(quantFormTabela)
          //     let tbody = document.getElementById('tbody')
          //     tbody.innerText = '';
          //     for (let a = 0; a < quantFormTabela; a++) {
            //       let linha = $(this).parent().parent();
            
            //       let ColunaNome = $("<td>").text(dadosArray[a].nome);
            //       let ColunaEmail = $("<td>").text(dadosArray[a].email);
            //       let ColunaEscolaridade = $("<td>").text(dadosArray[a].escolaridade);
            //       let ColunaBotoes = $("<td>");
            //       let botoesAdd = document.createElement('buttom');
            
            //       botoesAdd.setAttribute('class', `table-item ações border-top ref${quantFormTabela}`);
            //       botoesAdd.innerHTML = `
            //       <button class="editar" id="${quantFormTabela}">Editar</button>
            //       <button class="excluir" id="${quantFormTabela}">Excluir</button>`;
            
            //       ColunaBotoes.append(botoesAdd)
            //       linha.append(ColunaNome);
            //       linha.append(ColunaEmail);
            //       linha.append(ColunaEscolaridade);
            //       linha.append(ColunaBotoes);
            //       console.log(ColunaNome);
            
            //     }
            //   }
            // }
            //  );
            
            
            // tdNome = par.children("td:nth-child(1)");
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
