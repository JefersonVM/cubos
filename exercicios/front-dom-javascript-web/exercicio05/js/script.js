const btnSublinhado = document.querySelector(".btn-sublinhado");
const btnItalico = document.querySelector(".btn-italico");
const btnNegrito = document.querySelector(".btn-negrito");

const btnDecremento = document.querySelector(".btn-decremento");
const btnIncremento = document.querySelector(".btn-incremento");

const btnVermelho = document.querySelector(".btn-vermelho");
const btnAzul = document.querySelector(".btn-azul");
const btnRoxo = document.querySelector(".btn-roxo");
const btnPreto = document.querySelector(".btn-preto");

const meuTexto = document.querySelector(".texto");

btnSublinhado.onclick = () => {
  if (meuTexto.style.textDecoration === "underline") {
    meuTexto.style.textDecoration = "none";
  } else {
    meuTexto.style.textDecoration = "underline";
  }
};

btnItalico.onclick = () => {
  if (meuTexto.style.fontStyle === "italic") {
    meuTexto.style.fontStyle = "normal";
  } else {
    meuTexto.style.fontStyle = "italic";
  }
};

btnNegrito.onclick = () => {
  if (meuTexto.style.fontWeight === "bold") {
    meuTexto.style.fontWeight = "normal";
  } else {
    meuTexto.style.fontWeight = "bold";
  }
};

btnVermelho.onclick = () => {
  meuTexto.style.color = "#ff0000";
};

btnAzul.onclick = () => {
  meuTexto.style.color = "#0000ff";
};

btnRoxo.onclick = () => {
  meuTexto.style.color = "#800080";
};

btnPreto.onclick = () => {
  meuTexto.style.color = "#000000";
};
