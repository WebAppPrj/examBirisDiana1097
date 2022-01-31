const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize")

const References = sequelize.define("References", {
    ReferenceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },

    ArticleID: {
        type: DataTypes.INTEGER,
        references: { model: 'Articles', key: 'ArticleID'},
        allowNull: true
    },

    Title: {
        type: DataTypes.STRING,
        validate: {
            len:[5,255]
        },
        allowNull: false
    },

    PublishDate: {
        type: DataTypes.DATE
    },

    AuthorNames: {
        type: DataTypes.ENUM("JKRowling", "WilliamShakespeare", "GeorgeOrwell")
    }, 
})

module.exports = References;
