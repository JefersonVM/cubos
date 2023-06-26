const meuInput = document.querySelector("input");

const sucessoMensagem = document.querySelector(".sucesso");

const meuBotao = document.querySelector("button");

const mostrarMensagemSucesso = () => {
  sucessoMensagem.style.display = "block";

  if (!meuInput.value){
     return sucessoMensagem.textContent = 'Por favor preencha o campo de usuário';
     
  }
  sucessoMensagem.textContent = `O usuário ${meuInput.value} foi cadastrado`;
  meuInput.value = "";
};

meuBotao.onclick = mostrarMensagemSucesso;
