const settings2 = require("./settings2");
const knex = require('knex')({
    client: 'pg',
    version: '7.4.1',
    connection: {
      host : settings2.host,
      user : settings2.user,
      password : settings2.password,
      database : settings2.database
    }
  });

const fn = process.argv.slice(2)[0];
const ln = process.argv.slice(2)[1];
const bd = process.argv.slice(2)[2];
knex('famous_people')
.insert({first_name:fn,last_name:ln,birthdate:bd})
.then(function(rows) {
    console.log(rows);
    knex.destroy();
})
.catch(function(error) {
    console.error(error);
    knex.destroy();
});
