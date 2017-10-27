App = {
    web3Provider: null,
    contracts: {},

    init: function () {
        return App.initWeb3();
    },

    initWeb3: function () {
        if (typeof web3 !== 'undefined') {
            console.log("not mine!");

            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            console.log("mine!");
            // set the provider you want from Web3.providers
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
            web3 = new Web3(App.web3Provider);
        }
        App.displayAccountInfo();
        return App.initContract();
    },

    displayAccountInfo: function () {
        web3.eth.getCoinbase(function (err, account) {
            if (err === null) {
                App.account = account;
                $("#account").text(account);
                console.log(account);

                web3.eth.getBalance(account, function (err, balance) {
                    if (err === null) {
                        $("#accountBalance").text(web3.fromWei(balance, "ether") + " ETH");
                    }
                });
            }
        });
    },

    initContract: function () {
        $.getJSON('DIR_contract.json', function (DIRArtifact) {
            // Get the necessary contract artifact file and instantiate it with truffle-contract
            App.contracts.DIR_contract = TruffleContract(DIRArtifact);

            // Set the provider for our contract
            App.contracts.DIR_contract.setProvider(App.web3Provider);
            console.log(DIRArtifact);

            // App.listenToEvents();
            // Use our contract to retrieve and mark the adopted pets
            // return App.markAdopted();
            return App.reloadReports();
        });
    },

    reloadReports: function () {

        App.displayAccountInfo();

        App.contracts.DIR_contract.deployed().then(function (instance) {
            return instance.getReport.call();
        }).then(function (report) {
            if(report[0]== 0x0){
                return;
            }
            console.log(report[0]);
        })
    }


};

$(function () {
    $(window).load(function () {
        App.init();
    });
});
