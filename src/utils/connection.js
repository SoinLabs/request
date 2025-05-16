const { Sequelize } = require('sequelize');
const path = require('path')

const logging = process.env.REQUEST_LOGGING === 'true' ? console.log : false

const connection = async (connectionError) => {
    try {
        const sequelize = new Sequelize({
            logging,
            dialect: 'sqlite',
            storage: path.resolve(__dirname, '../../sqlite/database.sqlite')
        })
        await sequelize.authenticate();
        // sequelize.sync()
        console.info('Connection has been established successfully.')
        return sequelize
    } catch (error) {
        connectionError('Unable to connect to the database:', error)
    }
}

module.exports = { connection }