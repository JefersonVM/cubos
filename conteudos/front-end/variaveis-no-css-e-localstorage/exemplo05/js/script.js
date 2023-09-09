const form = document.querySelector("form");
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const btnList = document.querySelector("#btn-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (!nome.value || !email.value || !phone.value) {
    return;
  }

  const user = {
    nome: nome.value,
    email: email.value,
    phone: phone.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
});

btnList.addEventListener('click', () => {
  const user = JSON.parse( localStorage.getItem('user'));
  h1.textContent = user.nome;
  h2.textContent = user.email;
});
