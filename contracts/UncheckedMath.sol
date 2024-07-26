// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract UncheckedMath {
    uint256 public lastResult;
    function uncheckedadd(uint256 x, uint256 y) external returns (uint256) {
        // 22103 gas
        unchecked {
            lastResult = x + y;
            return x + y;
        }
    }
    function add(uint256 x, uint256 y) external returns (uint256) {
        // 22291 gas
         lastResult = x + y;
         return x + y;

    }
    function yul_add(uint256 x, uint256 y) external returns (uint256 z) {
        assembly {
            z := add(x, y)
            if lt(z, x) { revert(0, 0) }
            sstore(lastResult.slot, z)
        }
    }
}
