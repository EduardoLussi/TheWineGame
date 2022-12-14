const TheWineGame = artifacts.require("TheWineGame");

module.exports = function(deployer) {
    deployer.deploy(TheWineGame);
};