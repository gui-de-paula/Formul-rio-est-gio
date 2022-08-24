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
    dadosArray[quantFormEnviados] = {
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
    console.log(dadosArray[quantFormEnviados].cpf)
  }
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
  }
  function addNaTabela() {
    quantFormTabela++;
    console.log(quantFormTabela)
    let tbody= document.getElementById('tbody')
    tbody.innerText='';
    for(let a=0;a<quantFormTabela;a++){
      let tr= tbody.insertRow();

      tr.insertCell().appendChild(document.createTextNode(dadosArray[a].nome));
      tr.insertCell().appendChild(document.createTextNode(dadosArray[a].email));
      tr.insertCell().appendChild(document.createTextNode(dadosArray[a].escolaridade));
      let botoesadd= document.createElement('buttom')
      
      botoesadd.setAttribute('class', `table-item ações border-top ref${quantFormTabela}`);
      botoesadd.innerHTML = `
      <button class="editar" id="${quantFormTabela}">Editar</button>
      <button class="excluir" id="${quantFormTabela}">Excluir</button>`;
      tr.insertCell().appendChild(botoesadd);
    }}
  });

