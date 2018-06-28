/**
 * Authors.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'library',
  tableName: 'authors',
  attributes: {
    authorId: {
      type: 'number',
      autoIncrement: true,
      columnName: 'author_id'
    },
    nameAuthor: {
      type: 'string',
      required: true,
      columnName: 'name'
    },
    // nationalityAuthor: {
    //   type: 'string',
    //   required: true,
    //   // columnName: 'nationality'
    // }
  },

};

