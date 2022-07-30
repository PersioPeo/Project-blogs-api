const { DataTypes } = require('sequelize');

/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
const AttibutesPostCategory = {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'BlogPost',
      key: 'id',
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Category',
      key: 'id',
    },
  },
};

module.exports = AttibutesPostCategory;
