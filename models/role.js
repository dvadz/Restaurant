module.exports = function(sequelize, DataTypes){
    var Role = sequelize.define("Role",{
        name: DataTypes.STRING
    });

    Role.associate = function(models){

        Role.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Role;
}