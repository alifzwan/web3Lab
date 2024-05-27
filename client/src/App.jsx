import React, { useState, useEffect } from 'react';
import Web3 from "web3";
import ElectionABI from "/src/artifacts/Election.json";
import './App.scss';

const App = () => {
    const [account, setAccount] = useState('');
    const [loader, setLoader] = useState(true);
    const [election, setElection] = useState(null);

    const [electionLeader, setElectionLeader] = useState('');
    const [candidates, setCandidates] = useState([]);
    const [newCandidateName, setNewCandidateName] = useState('');
    const [voterAddress, setVoterAddress] = useState('');
    const [selectedCandidate, setSelectedCandidate] = useState('');
    const [winnerName, setWinnerName] = useState('');

    useEffect(() => {
        loadWeb3();
        loadBlockchainData();
    }, []);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };

    const loadBlockchainData = async () => {
        setLoader(true);
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const networkData = ElectionABI.networks[networkId];

        if (networkData) {
            const election = new web3.eth.Contract(ElectionABI.abi, networkData.address);
            setElection(election);

            const leader = await election.methods.electionLeader().call();
            setElectionLeader(leader);

            const candidateCount = await election.methods.candidatesCount().call()
            const candidatesList = [];
            for (let i = 0; i < candidateCount; i++) {
                const candidate = await election.methods.candidates(i).call();
                candidatesList.push(candidate);
            }
            console.log("Candidates:", candidatesList); // Debugging log
            setCandidates(candidatesList);
            setLoader(false);
        } else {
            window.alert('The smart contract is not deployed to current network');
        }
    };

    const addCandidate = async () => {
        await election.methods.addCandidate(newCandidateName).send({ from: account });
        setNewCandidateName('');
        loadBlockchainData();
    };

    const registerVoter = async () => {
        await election.methods.registerVoters(voterAddress).send({ from: account });
        setVoterAddress('');
        alert('Voter registered successfully');
    };

    const castVote = async () => {
        await election.methods.castVote(selectedCandidate).send({ from: account });
        setSelectedCandidate('');
        alert('Vote cast successfully');
        loadBlockchainData();
    };

    const getWinningCandidate = async () => {
        const name = await election.methods.winningCandidate().call();
        setWinnerName(name);
        console.log("Winning Candidate:", name); // Debugging log
    };

    if (loader) {
        return (
            <div>
                Loading....
            </div>
        );
    }

    return (
        <div className="main-container">
            <h1 className="title">Election DApp</h1>

            <div className="main-content">
                <div className="account">
                    <b>Current Account:</b> {account}
                    <b>Election Leader: </b> {electionLeader}
                </div>

                <h2>Candidates</h2>
                <ul>
                    {candidates.map((candidate, index) => (
                        <li key={index}>{candidate.name} - {candidate.voteCount.toString()} votes</li>
                    ))}
                </ul>
            </div>

            <div className="main-process">
                <div className="reg-candidate">
                    <h3>Add Candidate</h3>
                    <input
                        type="text"
                        value={newCandidateName}
                        onChange={(e) => setNewCandidateName(e.target.value)}
                        placeholder="Candidate Name"
                    />
                    <button className="button" onClick={addCandidate}>
                        Add Candidate
                    </button>
                </div>

                <div className="reg-voter">
                    <h3>Register Voter</h3>
                    <input
                        type="text"
                        value={voterAddress}
                        onChange={(e) => setVoterAddress(e.target.value)}
                        placeholder="Voter Address"
                    />
                    <button className="button" onClick={registerVoter}>Register Voter</button>
                </div>

                <div className="cast-vote">
                    <h3>Cast Vote</h3>
                    <input
                        type="number"
                        value={selectedCandidate}
                        onChange={(e) => setSelectedCandidate(e.target.value)}
                        placeholder="Candidate Index"
                    />
                    <button className="button" onClick={castVote}>Vote</button>
                </div>
            </div>

            <div className="winning-candidate">
                <h3>Winning Candidate</h3>
                <button onClick={getWinningCandidate}>Get Winning Candidate</button>
                <p>{winnerName}</p>
            </div>
        </div>
    );
}

export default App;
