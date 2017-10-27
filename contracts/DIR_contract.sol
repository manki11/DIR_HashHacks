pragma solidity ^0.4.11;
<<<<<<< HEAD


contract DIR_contract {

    address     reporter;
    string      name;
    string      report_type;
    string      desc;

    event createReportEvent(address indexed _reporter,string _name, string _report_type, string _desc);

    function createReport(string _name, string _report_type, string _desc){
        reporter = msg.sender;
        name = _name;
        report_type = _report_type;
        desc = _desc;
        createReportEvent(reporter,name,report_type,desc);
    }

    function getReport() public constant returns(
    address _reporter,string _name, string _report_type, string _desc){
        return(reporter,name,desc,report_type);
    }

=======
contract DIR_contract{
        address     reporter;
        string      name;
        string      report_type;
        string      desc;

        event createReportEvent(address indexed _reporter,string _name, string _report_type, string _desc);

        function createReport(string _name, string _report_type, string _desc){
            reporter = msg.sender;
            name = _name;
            report_type = _report_type;
            desc = _desc;
            createReportEvent(reporter,name,report_type,desc);
        }

        function getReport() public constant returns(
            address _reporter,string _name, string _report_type, string _desc){
            return(reporter,name,desc,report_type);
        }
>>>>>>> e91a19af9b43ff40e64052143e1657e7225d62d4
}