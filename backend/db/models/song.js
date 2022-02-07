'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.Album, {foreignKey: 'albumId'});
    Song.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Song;
};
