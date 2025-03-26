// SPDX-License-Identifier: UNLICENSED
import "./Stokvel.sol";

pragma solidity ^0.8.13;

contract StokvelFactory {
    event StokvelCreated(address indexed stokvelAddress, address indexed creator, uint256 contributionAmount, string name, uint256 maxMembers, string payoutTimeframe);

    address[] public stokvels;

    function createStokvel(uint256 _contributionAmount, string memory _name, uint256 _maxMembers, string memory _payoutTimeframe) external {
    Stokvel newStokvel = new Stokvel(_contributionAmount, msg.sender, _name, _maxMembers, _payoutTimeframe);
        stokvels.push(address(newStokvel));

        emit StokvelCreated(address(newStokvel), msg.sender, _contributionAmount, _name, _maxMembers, _payoutTimeframe);
    }

    function getStokvels() external view returns (address[] memory) {
        return stokvels;
    }
}