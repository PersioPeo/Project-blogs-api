const createPostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    }
  },
    {
    tableName: 'PostCategories',
    timestamps: false,
  }); 
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'blogsPosts',
    });
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'categories',
    });
  };
  return PostCategory;
 };
  
module.exports = createPostCategory;