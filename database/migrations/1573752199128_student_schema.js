"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlunosSchema extends Schema {
  up() {
    this.create("students", table => {
      table.increments();
      table
        .string("nome", 100)
        .notNullable()
        .unique();
      table
        .string("cpf", 11)
        .nullable()
        .unique();
      table
        .string("rg", 15)
        .nullable()
        .unique();
      table
        .string("certidao", 15)
        .nullable()
        .unique();
      table.date("nascimento").nullable();
      table.text("observacao").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("students");
  }
}

module.exports = AlunosSchema;
