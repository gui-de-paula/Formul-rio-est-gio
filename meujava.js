// function valorInvalido(campo) {
//    campo.style.cssText = 'background-color: #FEC7B3;' + 'border: 1px solid #B30C00;'
 
//  }
 
//  function valorValido(campo) {
//    campo.style.cssText = 'background-color: #BCFFBA;' + 'border: 1px solid #73B370;'
 
//  }
 
function _email(email) {
   email= document.getElementById('email');
   let mask = /\S+@\S*\.\S*/;
   if (mask.test(email.value)) {
   //   valorValido(email)
     return true;
   } else {
   //   valorInvalido(email);
     return false;
   }
}
function validaEmail(e){
   if(_email == false){
      alert("Email inválido! \n erro: " + e.value);

      // apaga o valor
      e.value = "";
   }
   
}
function _cpf(cpf) {
   cpf = cpf.replace(/[^\d]+/g, '');
   if (cpf == '') return false;
   if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;
   add = 0;
   for (i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
   rev = 11 - (add % 11);
   if (rev == 10 || rev == 11)
      rev = 0;
   if (rev != parseInt(cpf.charAt(9)))
      return false;
   add = 0;
   for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
   rev = 11 - (add % 11);
   if (rev == 10 || rev == 11)
      rev = 0;
   if (rev != parseInt(cpf.charAt(10)))
      return false;
   return true;
}
function validarCPF(el) {
   if (!_cpf(el.value)) {
      alert("CPF inválido! \n erro: " + el.value);

      // apaga o valor
      el.value = "";
   }
}
//  function print(){
//   let fm= document.forms[0];
//   let a,b,c,d,e,f,g,h,i,j,k,l;
//   a=fm.elements[0].value;
//   b=fm.elements[1].value;
//   c= fm.elements[2].value;
//   d= fm.elements[3].value;
//   e= fm.elements[4].value;
//   f= fm.elements[5].value;
//   g= fm.elements[6].value;
//   h= fm.elements[7].value;
//   i= fm.elements[8].value;
//   j= fm.elements[9].value;
//   k= fm.elements[10].value;
//   l= fm.elements[11].value;

//    document.write("Dados:"+a+"\n"+b+"\n"+c+"\n"+d+"\n"+e+"\n"+f+"\n"+g+"\n"+h+"\n"+i+"\n"+j+"\n"+k+"\n"+l);
//  }

//Adicionar Contatos
let quantDeContatos = 1;
const adicionarContatoBtn = document.getElementById("add-contato");
const contato1 = document.getElementById("contato-1");

function criarContato() {
   quantDeContatos++;
   let contatoAserAdicionado = document.createElement("div");
   contatoAserAdicionado.setAttribute("id", `contato-${quantDeContatos}`);
   const node = `<p id="${quantDeContatos}°contato" class="nth-contato">Contato ${quantDeContatos}:</p>
  <div class="contato-nome-container flexbox">
    <label for="contato-nome" class="padding-left-1rem">Nome</label>
    <input type="text" name="contato-nome${quantDeContatos}" id="contato-nome" required />
    </div>
  <div class="contato-telefone-container flexbox">
  <label for="contato-telefone" class="padding-left-1rem">Telefone</label>
    <input type="tel" name="contato-telefone${quantDeContatos}" id="num-contato" required/>
  </div>
  <div class="contato-email-container flexbox">
    <label for="contato-email" class="padding-left-1rem">E-mail</label>
    <input type="email" name="contato-email${quantDeContatos}" id="contato-email" required />
  </div>
  `;
   contatoAserAdicionado.innerHTML = node;

   return contatoAserAdicionado;
}

adicionarContatoBtn.addEventListener("click", function () {
   document.getElementById("div-referencia-pra-add-contatos").before(criarContato());
});

//removerContatos
const removerContatoBtn = document.getElementById("remove-contato");

function removerContato() {
   if (quantDeContatos > 1) {
      const contatoAserRemovido = document.getElementById(
         `contato-${quantDeContatos}`
      );
      contatoAserRemovido.parentNode.removeChild(contatoAserRemovido);
      quantDeContatos--;
   }
}
removerContatoBtn.addEventListener("click", function () {
   removerContato();
})



// const dadosTabela= document.getElementById("mostrar");
// function exibir() {
//    let elementoFilho = document.querySelector("numero-contato").children
//     document.querySelector("#dados").innerHTML = `
//        <h2>Dados: </h2>
//         <p> O segundo elemento filho é: ${elementoFilho[1].tagName}
//         <p> O conteúdo do segundo elemento filho é: ${elementoFilho[1].innerHTML}`
// }
// dadosTabela.addEventListener("click",function () {
//    exibir();})


