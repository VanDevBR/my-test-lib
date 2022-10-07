const pkg = require('./package.json');
function checkLib() {
    console.log("I'm here!!! Version - " + pkg.version)
}
module.exports = checkLib;