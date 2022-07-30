'use strict';
const AttributesUser = require('../helpers/migrations/AttributesUser');
/** @param {import('sequelize').Sequelize} sequelize */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users',AttributesUser );
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

/*
** recebendo ajuda para resolver erro no database;
** conflito no blog-post sem resolução;
** com a ajuda do colega da turma José Cleiton, e indicações de mudanças no database nas models e seeders. 
*/