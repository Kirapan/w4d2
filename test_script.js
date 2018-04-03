const pg = require('pg');
const settings = require("./settings");
const argv = process.argv.slice(2);

const client =  new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

const queries =  require('./function.js')(client);
client.connect((err) => {
    if (err) {
        console.error("Connection Error", err);
        process.exit(1);
    }
    let params = [argv[0]];
    queries
    .findPeopleByName(params)
    .then((result) => {
        console.log('Searching ...');
        console.log(`Found ${result.rows.length} person(s) by the name '${argv[0]}:'`);
        let i = 1;
        result.rows.forEach(element => {
            console.log(`- ${i}: ${element.first_name} ${element.last_name}, born '${element.birthdate}'`);
            i++;
        });
    })
    .catch((err) => {
        console.error(err);
        client.end();
    })


    })

