import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // limpa tabela
  await knex("users").del();

  // insere dados de teste
  await knex("users").insert([
    {
        nome: "rodrigo",
        email: "rodrigo@example.com",
        rua: "Rua 23",
        numero: 144,
        bairro: "Parque Tokio",
        cidade: "Sao Paulo",
        estado: "SP",
        status: "ativo",
        is_deleted: false,
    },
    {
        nome: "João",
        email: "joao@example.com",
        rua: "Rua 22",
        numero: 302,
        bairro: "Santa Marilia",
        cidade: "Ouro Preto",
        estado: "MG",
        status: "ativo",
        is_deleted: false,
    },
  ]);
}