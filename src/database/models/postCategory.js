
const AttibutesPostCategory = require('../helpers/models/AttributsPostCategogy');

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',AttibutesPostCategory , 
    {
      underscore: true,
      timestamps: false,
      tableName: 'PostCategories',
    },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategory, as: 'categories' });
    models.Category.belongsToMany(models.BlogPost,
      { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategory, as: 'blogPosts' });
  };

  return PostCategory;
};