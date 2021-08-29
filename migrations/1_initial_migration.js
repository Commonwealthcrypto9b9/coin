const Migrations = artifacts.require("Migrations");
const Coin = artifacts.require("Jejudoge9b9BusinessCoin");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Coin);
};
