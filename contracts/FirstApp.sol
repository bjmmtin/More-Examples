// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

contract FirstApp {
    uint256 public count = 10;

    //function to get the current count
    function get() external view returns (uint256) {
        return count;
    }

    //function to inc the current count
    function inc() external {
        count +=1;
    }

    //function to dec the current count
    function dec() external {
        count -=1;
    }
}