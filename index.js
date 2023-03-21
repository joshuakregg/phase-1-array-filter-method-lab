// Code your solution here
function findMatching(collection, driver) {
    return collection.filter(user => user.toLowerCase() === driver.toLowerCase());
}

function fuzzyMatch(collection, driver) {
    return collection.filter(user => user[0] === driver[0]);
}

function matchName(collection, driver) {
    return collection.filter(user => user.name.toLowerCase() === driver.toLowerCase());
}