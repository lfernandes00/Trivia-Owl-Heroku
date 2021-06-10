module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Username can not be empty!" } } 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Password can not be empty!" } } 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Name can not be empty!" } } 
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: { notNull: { msg: "Birth Date can not be empty!" } } 
        },
        course: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Course can not be empty!" } } 
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Level can not be empty!" } } 
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Photo can not be empty!" } } 
        },
        doneActivities: {
            type: DataTypes.INTEGER
        },
        points: {
            type: DataTypes.INTEGER
        },
    }, {
        timestamps: false
    });
    return User;
};