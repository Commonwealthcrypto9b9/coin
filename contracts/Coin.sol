// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Jejudoge9b9BusinessCoin is ERC20 {
    constructor() ERC20("Jejudoge 9b9 Business Coin", "Jejudoge9b9") {
        _mint(msg.sender, 7000000000 * 10 ** decimals());
    }
}