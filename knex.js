const config = require("./knexfile.js");
const knex = require('knex')(config);

const argv = process.argv.slice(2);
knex.select('first_name','last_name','birthdate').from('famous_people')
.where('first_name', '=', argv[0])
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log(rows);
  knex.destroy();
});



