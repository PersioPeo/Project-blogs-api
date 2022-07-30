'use strict';
const AttibutesCreatCategory = require('../helpers/migrations/AttibutesCreatCategory');
/** @param {import('sequelize').Sequelize} sequelize */


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Categories', AttibutesCreatCategory );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Categories', AttibutesCreatCategory);
  }
};