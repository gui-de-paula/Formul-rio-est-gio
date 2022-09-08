
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
   telefoneContato.setAttribute("id", `numeroContato${quantDeContatos+1}`);
   telefoneContato.setAttribute("required", "true");
   telefoneContato.setAttribute("class", "tell");
 
   emailContato.setAttribute("placeholder", "Insira o e-mail do contato");
   emailContato.setAttribute("id", `emailContato${quantDeContatos+1}`);
   emailContato.setAttribute("required", "true");
 
   quantDeContatos++;
 }