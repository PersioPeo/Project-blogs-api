
const AttributesBlogPots = require('../helpers/models/AttributesBlogPots');
module.exports = (sequelize) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    AttributesBlogPots, 
    {
      underscore: true,
      timestamps: false,
      tableName: 'BlogPosts',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};