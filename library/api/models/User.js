/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // connection: 'mysql',
  // Name table in database
  tableName: 'users',

  // attributes: types, validations ans defaults values
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      // columnName: 'author_id'
    },
    name: {
      type: 'string',
      required: true
    },
    createdData: {
      type: 'string',
      columnType: 'datetime'
    },
    updateDate: {
      type: 'string',
      columnType: 'datetime'
      // defaultsTo: function () {
      //   return new Date();
      // }
    }
  },
  // before execute function createsss
  beforeCreate: function (values, cb) {
    values.createdData = new Date();
    cb();
  }
};
