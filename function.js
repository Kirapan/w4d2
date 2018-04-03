module.exports = db => {
    function findPeopleByName (params) {
        const query = "SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name = $1;";
        return db.query(query,params);
    }

    return {
        findPeopleByName
    };
}