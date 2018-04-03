const config = require("./knexfile.js")
const knex = require('knex')(config);

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
