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

// knex.select('id', 'name', 'borough', 'cuisine')
//   .from('restaurants')
//   .where({borough: 'Manhattan'})
//   .limit(3)
//   .debug(true)
//   .then(results => console.log(JSON.stringify(results, null, 4)));

//Drills 3-13
//#1
knex
  .select()
  .from('restaurants')
  .then(results => console.log(results));

//#2
knex
  .select()
  .from('restaurants')
  .where({cuisine: 'Italian'})
  .then(results => console.log(results));

//#3
knex
  .select('id', 'name')
  .from('restaurants')
  .where({cuisine: 'Italian'})
  .then(results => console.log(results));

//#4
knex
  .select()
  .from('restaurants')
  .where({cuisine: 'Thai'})
  .then(results => console.log(results.length));

//#5
knex
  .select()
  .from('restaurants')
  .then(results => console.log(results.length));

//#6
knex
  .select()
  .from('restaurants')
  .where(
    {cuisine: 'Thai',
    address_zipcode: '11372'}        
)
  .then(results => console.log(results));

//#7
knex
  .select()
  .from('restaurants')
  .where('cuisine', 'Italian')
  .whereIn('address_zipcode', [10012, 10013, 10014])
  .limit(5)
  .then(results => console.log(results));

// #8
knex('restaurants')
  .insert(
    {
    name: 'Byte Cafe',
    borough: 'Brooklyn',
    cuisine: 'coffee',
    address_building_number: '123',
    address_street: 'Atlantic Avenue',
    address_zipcode: '11231'
  }
  )
  .returning(['name', 'borough', 'cuisine'])
  .then(results => console.log(results));

// #9
knex('restaurants')
  .insert(
    {
      name: 'IHOP',
      borough: 'Brooklyn',
      cuisine: 'breakfast',
      address_building_number: '456',
      address_street: 'Pacific Avenue',
      address_zipcode: '22462'
    }
  )
  .returning(['name', 'borough', 'cuisine'])
  .then(results => console.log(results));

//#10
knex('restaurants')
  .insert(
    [{
      name: 'Hawks Praerie',
      borough: 'Brooklyn',
      cuisine: 'breakfast',
      address_building_number: '456',
      address_street: 'Pacific Avenue',
      address_zipcode: '22462'
    },
    {
      name: 'Hawks Yummy',
      borough: 'Brooklyn',
      cuisine: 'breakfast',
      address_building_number: '456',
      address_street: 'Pacific Avenue',
      address_zipcode: '22462'
    },
    {
      name: 'Hawks Valley',
      borough: 'Brooklyn',
      cuisine: 'breakfast',
      address_building_number: '456',
      address_street: 'Pacific Avenue',
      address_zipcode: '22462'
    }]
  )
  .returning(['name', 'borough', 'cuisine'])
  .then(results => console.log(results));

//#11
knex('restaurants')
  .where({nyc_restaurant_id: '30191841'})
  .update({name: 'DJ Reynolds Pub and Restaurant'}, ['id', 'name'])
  .then(results => console.log(results));

//#12
knex('grades')
  .where({id: '10'})
  .del()
  .then(results => console.log(results));

//#13
// knex('restaurants')
  // .where({id: '22'})
  // .del()
  // .then(results => console.log(results)); 
  // !!!Causes foreign key contraints error!!!

// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});