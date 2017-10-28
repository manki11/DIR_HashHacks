pragma solidity ^0.4.11;


contract DIR_contract{

        address     reporter;
        string      name;
        string      report_type;
        string      desc;
        uint        report_status;

        event createReportEvent(address indexed _reporter,string _name, string _report_type, string _desc);

        function createReport(string _name, string _report_type, string _desc){
            reporter = msg.sender;
            name = _name;
            report_type = _report_type;
            desc = _desc;
            report_status = 1;
            createReportEvent(reporter,name,report_type,desc);
        }

        function getReport() public constant returns(
            address _reporter,string _name, string _report_type, string _desc, uint _report_status){
            return(reporter,name,report_type,desc,report_status);
        }

        function setStatus(uint _report_status){
            report_status = _report_status;
        }


}