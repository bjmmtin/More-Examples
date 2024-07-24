// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract NestedMapping {
    mapping (address => mapping (uint256 => bool)) myMap;

    //function to get from myMap
    function get(address _account, uint256 _amount) external view returns(bool) {
        return myMap[_account][_amount];
    }

    //function to set to myMap
    function set(address _account, uint256 _amount, bool _boo) external {
        myMap[_account][_amount] = _boo;
    }

    //function to remove from myMap
    function remove(address _account, uint256 _amount) external {
        delete myMap[_account][_amount];
    }
}