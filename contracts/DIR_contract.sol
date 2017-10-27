pragma solidity ^0.4.11;

contract DIR_contract{

    struct Report{
            address     reporter;
            string      name;
            string      report_type;
            string      desc;
            address     officer;
            uint        report_status;
            address     investigator;
            string      investigation;
            string      verdict;
            address     jury;
    }

    Report[] public reports;
    uint curr;

    function DIR_contract(){
        reports.length = 15;
    }
    function createUserReport(string name, string desc, string report_type){
        reports[curr].reporter = msg.sender;
        reports[curr].name = name;
        reports[curr].desc = desc;
        reports[curr].report_type = report_type;
        curr++;
    }
}