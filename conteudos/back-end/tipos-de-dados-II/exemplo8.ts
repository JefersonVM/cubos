type Transacao = {
  numero: number;
  validade: Date;
  cvv: number;
  nome: string;
  tipo: "credito" | "debito";
};

const transacao = (transacao: Transacao) => {
  transacao.tipo === "credito" ? console.log("Crédito") : console.log("Débito");
};

transacao({
  numero: 123456789,
  validade: new Date(),
  cvv: 123,
  nome: "Fulano",
  tipo: "debito",
});
