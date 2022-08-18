let quantFormEnviados=0;
let dadosArray=[];
let formulario= document.getElementById("formulario");
const enviar= document.getElementById('enviar');
 enviar.addEventListener("click",function(x){
    x.preventDefault();
    let formdata= new Formdata(formulario);
    if(quantidadeDeContatos<2){
        alert("Insira no minimo 2 contatos");
    }
    else{
        dadosArray[quantFormEnviados]= {
            nome: formdata.get('nome');
            cpf: formdata.get('cpf');
            data: formdata.get('data');
            genero: formdata.get('genero');
            escolaridade: formdata.get('escolaridade');
            cidade: formdata.get('cidade');
            estado: formdata.get('estado');
            setor: formdata.get('setor');
            complemento: formdata.get('complemento');
            num1: formdata.get('num-1');
            nome2: formdata.get('nome-2');
            num2: formdata.get('num-2');
            email2: formdata.get('email-2');
            email: formdata.get('email');
            senha: formdata.get('senha');
        }

    }
 })

}