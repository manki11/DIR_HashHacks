var DIR_Contract = artifacts.require("./DIR_contract.sol");

module.exports = function (deployer) {
    deployer.deploy(DIR_Contract);
}