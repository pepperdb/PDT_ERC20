pragma solidity 0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract PepperDBToken is StandardToken {
    string public name = "PepperDB Token";
    string public symbol = "PDT";
    uint256 public decimals = 8;
    uint256 public INITIAL_SUPPLY = 100000000;


    constructor() public {
      totalSupply_ = INITIAL_SUPPLY * (10 ** decimals);
      balances[msg.sender] = INITIAL_SUPPLY * (10 ** decimals);
    }
}
