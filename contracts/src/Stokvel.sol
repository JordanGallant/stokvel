// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.13;

contract Stokvel {
    address public owner;
    uint256 public contributionAmount;
    string public name;
    uint256 public maxMembers;
    address[] public members;
    string public payoutTimeframe; // weekkly, monthly, 3-months
    
    event Contribution(address indexed member, uint256 amount);
    event MemberJoined(address indexed member);
    event Payout(address indexed member, uint256 amount);

    mapping(address => bool) public hasContributed;

    constructor(uint256 _contributionAmount, address _owner, string memory _name, uint256 _maxMembers,string memory _payoutTimeframe ) {
        owner = _owner;
        contributionAmount = _contributionAmount;
        name = _name;
        maxMembers =_maxMembers;
        payoutTimeframe = _payoutTimeframe;
    }
    
    function contribute() external payable {
        require(isMember(msg.sender), "You must join the stokvel before contributing.");
        require(!hasContributed[msg.sender], "You have already contributed.");
        require(msg.value == contributionAmount, "Incorrect amount");
        hasContributed[msg.sender] = true;
        emit Contribution(msg.sender, msg.value);
    }

    function joinStokvel() external {
        require(members.length < maxMembers, "Stokvel is full");
        members.push(msg.sender);
        emit MemberJoined(msg.sender);
    }

    //helper to see if address is a member of the stokvel
    function isMember(address _member) public view returns (bool) {
        for (uint i = 0; i < members.length; i++) {
            if (members[i] == _member) {
                return true;
            }
        }
        return false;
    }
}
