const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize")

const Articles = sequelize.define("Articles", {
    ArticleID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },

    Title: {
        type: DataTypes.STRING,
        validate: {
            len:[5,255]
        },
        allowNull: false
    },

    Abstract: {
        type: DataTypes.STRING,
        validate: {
            len:[10,255]
        },
        allowNull:false
    },

    PublishDate: {
        type: DataTypes.DATE
    }
})

module.exports = Articles;
