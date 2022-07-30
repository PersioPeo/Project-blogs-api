'use strict';
const AttributsCreatPostCategory = require('../helpers/migrations/AttributsCreatPostCategory');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('PostCategories', AttributsCreatPostCategory);
  },
  
  down: async (queryInterface) => {
    await queryInterface.dropTable('PostsCategories', AttributsCreatPostCategory);
  }
};