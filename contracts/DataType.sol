// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "hardhat/console.sol";
contract DataType{

    //max of int and max of int256
    int256 public  maxi256 = type(int256).max;
    int  public    maxi = type(int256).max;

    //max of uint and max of uint256
    uint256 public  maxui256 = type(uint256).max;
    uint  public      maxui = type(uint).max;
    //byte array
    bytes1 public    a1 = 0xb5;
    bytes32 public   a = 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef;
    bytes10 public   a10 = 0xb5b5b5b5b5b5b5b5b5b5;

}