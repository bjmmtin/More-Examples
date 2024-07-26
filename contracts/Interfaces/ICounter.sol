// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

interface ICounter {
    function count() external view returns (uint256);

    function increment() external;
}