var DIR_contract = artifacts.require("./DIR_contract.sol");

contract('DIR_contract',function (accounts) {

    it("contract intilaised",function(){
        var dir =  DIR_contract.deployed();
        return dir.getUserReportByIndex.Call(accounts[0]).then(function (data) {
            assert.equal(data[0],0x0, "User Address must be empty");
            assert.equal(data[1],'', "User Name must be empty");
            assert.equal(data[2],'', "description name msut be empty");
            assert.equal(data[3],'', "report type msut be empty");
            assert.equal(data[4],0x0, "Offier Address must be empty");
            assert.equal(data[5].toNumber(),0, "report status must be 0");
            assert.equal(data[6],0x0, "Investigation Address must be empty");
            assert.equal(data[7],'', "investigation report msut be empty");
            assert.equal(data[8],'', "vertict or jury report msut be empty");
            assert.equal(data[9],0x0, "Jury Address must be empty");
        });
    });
});