// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "./Interfaces/ICounter.sol";
contract Counter {
    uint256 public count;

    function increment() external {
        count += 1;
    }
}

contract MyContract {
    function incrementCounter(address _counter) external {
        ICounter(_counter).increment();
    }

    function getCount(address _counter) external view returns (uint256) {
        return ICounter(_counter).count();
    }
}