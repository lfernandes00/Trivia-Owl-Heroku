module.exports = (sequelize, DataTypes) => {
    const Trophie = sequelize.define("userTrophie", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { notNull: { msg: "userId can not be empty!" } }
        },
        trophyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {notNull: {msg: "trophyId can not be empty!"}}
        }
    }, {
        timestamps: false
    });
    return Trophie;
};