const Sequelize = require('sequelize')

const database = 'pizza_luvrs'
const host = 'pizza-db.ctigl0vi5ae0.ap-south-1.rds.amazonaws.com'
const username = 'postgres'
const password = 'postgres'

const pgClient = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    dialect: 'postgres'
  }
)

const Pizza = pgClient.define('pizza', {
  id: {
    type: Sequelize.STRING,
    primaryKey:true
  },
  name : {
    type: Sequelize.STRING
  },
  toppings: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  created: {
    type: Sequelize.BIGINT
  }
})

Pizza.sync().then(() => {
  console.log('postgres connection ready')
})
module.exports = Pizza
