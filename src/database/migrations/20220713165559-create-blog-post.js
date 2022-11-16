'use strict';
const AttributesCreatBlogPots = require('../helpers/migrations/AttributesCreatBlogPots');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('BlogPosts', AttributesCreatBlogPots );

  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('BlogPosts');
  }
};