let client = require("../dbconnect");
let projectCollection;

setTimeout(() => {
    projectCollection = client.mongoClient.db().collection("petsNew");
}, 2000);

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

module.exports = {
    insertProjects,getProjects
}