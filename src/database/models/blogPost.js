const createBlogPost = (sequelize, DataTypes) => { 
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.Date,
    updated: DataTypes.Date,
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
  });
  BlogPost.associate = (models) => { 
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
    
  }
  return BlogPost;
}

module.exports = createBlogPost;