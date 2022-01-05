var Ballot = artifacts.require("./Ballot.sol");

module.exports = function(deployer){
    
    deployer.deploy(Ballot, ["0x7f0c87a3b436df5c95b662d7706b67d586d81d55"]);
}