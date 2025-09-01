import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("email").notNullable().unique();
    table.string("rua");
    table.integer("numero");
    table.string("bairro");
    table.string("complemento");
    table.string("cidade");
    table.string("estado", 2);
    table.string("cep");
    table.string("status");
    table.boolean("is_deleted").defaultTo(false);
    table.timestamp("created").defaultTo(knex.fn.now());
    table.timestamp("updated").defaultTo(knex.fn.now());
    table.timestamp("deleted");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}

