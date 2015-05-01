module.exports = {
  rethinkdb: {
    host: process.env.DB_1_PORT_28015_TCP_ADDR || 'localhost',
    port: process.env.DB_1_PORT_28015_TCP_PORT || 28015,
    authKey: '',
    db: 'rethinkdb_ex'
  },
  express: {
     port: 3000
  }
};