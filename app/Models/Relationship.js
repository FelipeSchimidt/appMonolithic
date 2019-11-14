"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Relationship extends Model {
  students() {
    return this.belongsToMany("App/Models/Student").pivotTable(
      "relationship_students"
    );
  }
}

module.exports = Relationship;
