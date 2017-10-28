var DIR_contract = artifacts.require("./DIR_contract.sol");

contract('DIR_contract',function (accounts) {

    var DIR_contractListInstance;
    var reporter= accounts[1];
    var reporterName= "Rishab";
    var reportDesc="child missing";
    var report_type="kidnapping";
    it("contract intilaised",function(){
        return DIR_contract.deployed().then(function (instance) {
            return dir.getUserReportByIndex.Call();
            }).then(function (data) {
                assert.equal(data[0],0x0, "User Address must be empty");
                assert.equal(data[1],'', "User Name must be empty");
                assert.equal(data[2],'', "description name msut be empty");
                assert.equal(data[3],'', "report type msut be empty");
                // assert.equal(data[4],0x0, "Offier Address must be empty");
                // assert.equal(data[5].toNumber(),0, "report status must be 0");
                // assert.equal(data[6],0x0, "Investigation Address must be empty");
                // assert.equal(data[7],'', "investigation report msut be empty");
                // assert.equal(data[8],'', "vertict or jury report msut be empty");
                // assert.equal(data[9],0x0, "Jury Address must be empty");
        });


    });

    //Test case for demo report
    it("demo report", function() {
        return DIR_contract.deployed().then(function(instance) {
            DIR_contractListInstance = instance;
            return DIR_contractListInstance.createReport(reporterName, report_type, web3.toWei(articlePrice, "ether"), {
                from: seller
            });
        }).then(function() {
            return DIR_contractListInstance.getArticle.call();
        }).then(function(data) {
            assert.equal(data[0], seller, "seller must be " + seller);
            assert.equal(data[1], articleName, "article name must be " + articleName);
            assert.equal(data[2], articleDesc, "article descriptio must be " + articleDesc);
            assert.equal(data[3].toNumber(), web3.toWei(articlePrice, "ether"), "article price must be " + web3.toWei(articlePrice, "ether"));
        });
    });

});