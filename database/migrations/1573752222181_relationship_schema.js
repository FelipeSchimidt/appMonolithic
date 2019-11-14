"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FamiliaresSchema extends Schema {
  up() {
    this.create("relationships", table => {
      table.increments();
      table.string("nome", 100).notNullable();
      table
        .string("cpf", 11)
        .notNullable()
        .unique();
      table.string("rg", 13).nullable();
      table.date("nascimento").nullable();
      table
        .enum("parentesco", ["mãe", "pai", "tios", "primos", "avos"])
        .nullable();
      table
        .boolean("responsavel_financeiro")
        .defaultTo("true")
        .nullable();
      table.string("telefone", 15).nullable();
      table.string("endereco", 100).nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("relationships");
  }
}

module.exports = FamiliaresSchema;
