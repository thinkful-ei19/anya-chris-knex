'use strict';

const DATABASE_URL = process.env.DATABASE_URL
                   ||  global.DATABASE_URL 
                   || 'postgres://ttsfvsyp:ilRJbzyCQCcCnrTHD7nrCpGCq-bCsb3F@nutty-custard-apple.db.elephantsql.com:5432/ttsfvsyp';

exports.DATABASE = {
  client: 'pg',
  connection: DATABASE_URL,
  pool: { min: 0, max: 3 }, // Fix issue w/ ElephantSQL
  debug: true               // Outputs knex debugging information
};

exports.PORT = process.env.PORT || 8080; 
