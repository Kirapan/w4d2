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

const argv = process.argv.slice(2);
knex.select('first_name','last_name','birthdate').from('famous_people')
.where('first_name', '=', argv[0])
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log(rows);
  knex.destroy();
});



