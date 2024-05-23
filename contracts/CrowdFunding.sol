// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract CrowdFunding {
    address public owner;         // Variable to store the owner of the crowdfunding campaign.
    uint public goal;             // Variable to store the goal of the crowdfunding campaign.
    uint public raisedAmount = 0; // Variable to store the total amount raised.
    mapping(address => uint) public contributions; // Mapping to store the contributions of each address.

    // Constructor - function that will be called upon contract deployment.
    constructor(uint _goal) {
        owner = msg.sender;
        goal = _goal;
    }

    // Modifier - function to restrict access to a certain function.
    modifier onlyByOwner{ 
        require(msg.sender == owner, "Only owner can check raised amount.");
        _;
    }

    // contribute() - Function to contribute to the crowdfunding campaign.
    function contribute() public payable {
        require(msg.value > 0, "Contribution amount must be greater than 0");
        require(raisedAmount + msg.value <= goal, "Goal has already been reached");

        contributions[msg.sender] += msg.value;
        raisedAmount += msg.value;
    }

    // withdrawFunds() - function to withdraw funds after the deadline has passed and the goal has been reached. 
    function withdrawFunds() public onlyByOwner{
        require(raisedAmount >= goal, "Goal has not been reached yet");

        payable(owner).transfer(raisedAmount); // Transfer the raised amount to the owner.
        raisedAmount = 0;
    }

    // refund() - function to refund the contributions if the deadline has passed and the goal has not been reached.
    function refund() public {
        require(raisedAmount > goal, "The crowdfunding campaign was successful.");
        
        uint amount = contributions[msg.sender];
        contributions[msg.sender] = 0;
        payable(msg.sender).transfer(amount); // Refund the contribution amount to the contributor.
    }
}