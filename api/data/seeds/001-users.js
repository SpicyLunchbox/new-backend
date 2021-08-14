exports.seed = function(knex) {
    // Deletes ALL existing entries
    // return knex('users').truncate()
    //   .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {username: 'user1', password: '$2a$08$yxq4ZrmvRRDqktMadY54LOEIbmioEgBmPRcXx0/.xD0RGmLwc3S4G'},
          {username: 'user2', password: '$2a$08$yxq4ZrmvRRDqktMadY54LOEIbmioEgBmPRcXx0/.xD0RGmLwc3S4G'},
          {username: 'user3', password: '$2a$08$yxq4ZrmvRRDqktMadY54LOEIbmioEgBmPRcXx0/.xD0RGmLwc3S4G'}
        ]);
      };