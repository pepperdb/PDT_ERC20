var PepperDBToken = artifacts.require("PepperDBToken");

module.exports = function(deployer) {
  deployer.deploy(PepperDBToken);
};
