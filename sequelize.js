const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://fuktjqbrewhxch:c19e770c4efc569da0f811d667a20913bd0b3bd8567ebba7b08be7aea435b30f@ec2-34-242-89-204.eu-west-1.compute.amazonaws.com:5432/d3v4qu441l1u6k',
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        }
    })

sequelize.sync().then(function () {}).then(
    console.log("Synced.")
);
module.exports = sequelize;