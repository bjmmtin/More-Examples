// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract MappingContract {
    mapping (address => uint256) myMap;

    //function to get unit256 from myMap
    function get(address _account) external view returns(uint256) {
        return myMap[_account];
    }

    //function to set uint256 to myMap
    function set(address _account, uint256 _amount) external {
        myMap[_account] = _amount;
    }

    //function to remove uint256 from myMap
    function remove(address _account) external {
        delete myMap[_account];
    }
}