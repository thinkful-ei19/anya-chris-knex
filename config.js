'use strict';

const DATABASE_URL = process.env.DATABASE_URL
                   ||  global.DATABASE_URL 
                   || 'postgres://ttsfvsyp:ilRJbzyCQCcCnrTHD7nrCpGCq-bCsb3F@nutty-custard-apple.db.elephantsql.com:5432/ttsfvsyp';

exports.DATABASE = {
  client: 'pg',
  connection: DATABASE_URL,
  pool: { min: 1, max: 2 }, // Fix issue w/ ElephantSQL
  debug: false               // Outputs knex debugging information
};

exports.PORT = process.env.PORT || 8080; 
