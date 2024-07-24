// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
contract HelloWorld is OwnableUpgradeable {
    string public greet = "Hello world!";
}