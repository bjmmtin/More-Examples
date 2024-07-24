// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Error {
    function testRequire(uint256 _i) public pure returns(bool){
        // Require should be used to validate conditions such as:
        // - inputs
        // - conditions before execution
        // - return values from calls to other functions
        require(_i > 10, "Input must be greater than 10");
        return true;
    }

    function testRevert(uint256 _i) public pure returns(bool){
        // Revert is useful when the condition to check is complex.
        // This code does the exact same thing as the example above
        if (_i <= 10) {
            revert("Input must be greater than 10");
        }
        return true;
    }

    uint256 public num;

    function testAssert() public view {
        // Assert should only be used to test for internal errors,
        // and to check invariants.

        // Here we assert that num is always equal to 0
        // since it is impossible to update the value of num
        assert(num == 0);
    }

    // custom error
    error InsufficientBalance(uint256 balance, uint256 withdrawAmount);

    function testCustomError(uint256 _withdrawAmount) public view returns(bool){
        if (10 < _withdrawAmount) {
            revert InsufficientBalance({
                balance: 10,
                withdrawAmount: _withdrawAmount
            });
        }
        return true;
    }
}
