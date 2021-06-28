const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//const bcrypt = require('bcrypt');

class Comment extends Model {}

Comment.init(
  {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  ctitle: {
    type: DataTypes.STRING,
    allowable: false,
  },
 
     cdescription:{
    type: DataTypes.STRING,
      allowable: false,
  },
  date_created: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'post',
      key: 'id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'comment',
}
);
module.exports = Comment;
