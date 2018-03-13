'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));




// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .then(results => console.log(results));

knex
  .select()
  .from('restaurants')
  .where('restaurants.cuisine', 'Italian')
  .limit(2)
  .then(([results]) => console.log(results));

// Destroy the connection pool
// knex.destroy().then(() => {
//   console.log('database connection closed');
// });