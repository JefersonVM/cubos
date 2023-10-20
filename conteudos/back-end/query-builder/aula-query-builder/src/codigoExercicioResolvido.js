 // const quantidadeMedicamentos = await knex("farmacia").count();
  // const usuarioMaisNovo = await knex("usuarios").min('idade');
  //   const somaDoEstoque = await knex("farmacia")
  //     .select("categoria")
  //     .sum("estoque")
  //     .whereNotNull("categoria")
  //     .groupBy("categoria");
  //   const quantidadeMedicamentos = await knex("farmacia")
  //     .whereNull("categoria")
  //     .count();
  //   const quantidadesProdutos = await knex("farmacia")
  //     .select("categoria")
  //     .count("id")
  //     .whereNotNull("categoria")
  //     .groupBy("categoria");
  //   const quantidadeUsuarios = await knex("usuarios")
  //   .select('idade')
  //   .count()
  //   .where('idade', '>=', 18)
  //   .groupBy('idade')
  //   res.json(quantidadeUsuarios);