module.exports = {
  rethinkdb: {
    host: 'db', // db is the host name linked in docker
    port: process.env.DB_1_PORT_28015_TCP_PORT || 28015,
    authKey: '',
    db: 'rethinkdb_ex'
  },
  express: {
     port: 3000
  }
};