module.exports = function(sequelize, DataTypes) {
  var Band = sequelize.define("Band", {
    name: DataTypes.STRING
  });

  Band.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Band.hasMany(models.Song, {
      onDelete: "cascade"
    });
  };

  return Band;
};
