// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Election {
    address public electionLeader;
    uint256 public candidatesCount = 0;


    constructor(){
        electionLeader = msg.sender; // electionLeader is the one who deploy the contract
    }

    modifier onlyByElectionLeader{ // Modifier to restrict access to certain functions in the contract
        require(msg.sender == electionLeader, "Only election leader can register voters.");
        _;
    }

    struct Voter {
        bool voted;   // To track if a voter has voted
        uint256 vote; // To store the vote cast by the voter
    }
    mapping(address => Voter) public voters; // Mapping to store the voter details


    struct Candidate {
        string name;       // Name of the candidate
        uint256 voteCount; // Number of votes the candidate has received
    }

    Candidate[] public candidates; // Array to store the candidates

    function addCandidate(string memory _name) public onlyByElectionLeader{
        candidatesCount++;
        candidates.push(Candidate(_name, 0));
    }


    function registerVoters(address _voter) public onlyByElectionLeader{
        voters[_voter].voted = false;
    }

    function castVote(uint256 _candidateIndex) public {
        require(!voters[msg.sender].voted, "You have already voted.");
        require(candidatesCount > 0, "Invalid candidate index.");
        voters[msg.sender].voted = true;
        voters[msg.sender].vote = _candidateIndex;
        candidates[_candidateIndex].voteCount += 1;
    }

   function winningCandidate() public view returns (string memory winnerName) {
        uint256 winningVoteCount = 0;
        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > winningVoteCount) {
                winningVoteCount = candidates[i].voteCount;
                winnerName = candidates[i].name;
            }
        }
    }
}


