<p align="center">
  <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
    <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" width="120" height="120"/>
  </a>
  <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">
    <img src="https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png" width="120" height='120'>
  </a>
  <a href="https://trufflesuite.com/docs/truffle/" target="_blank" rel="noopener noreferrer">
    <img src="https://seeklogo.com/images/T/truffle-logo-2DC7EBABF2-seeklogo.com.png" width="120" height='120'>
  </a>
  <a href="https://ethereum.org/en/developers/docs/" target="_blank" rel="noopener noreferrer">
    <img src="https://seeklogo.com/images/E/ethereum-logo-DE26DD608D-seeklogo.com.png" width="90" height='120'>
  </a>
  <a href="https://trufflesuite.com/docs/ganache/" target="_blank" rel="noopener noreferrer">
    <img src="https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png" width="120" height='120'>
  </a>
</p>

<h1 align="center">   
  Smart Contract: Web 3
</h1> 

<h2 align="center">   
  CNS4505: Blockchain
</h2> 


## Table of Contents
- [Setup Environment](#setup-environment)
   - [1. Node JS](1-node-js)
     - [Node JS Installation](#node-js-installation)
   - [2. Git](#2-git)
     - [Git Installation](#git-installation)
   - [3. Visual Studio Code](#3-visual-studio-code)
     - [Create New Folder](#create-new-folder)
   - [4. Truffle Suite](#4-truffle-suite)
     - [Truffle Suite Installation](#truffle-suite-installation)
     - [Folder Description](#folder-description)
   - [5. Alchemy (Ethereum Provider)](#5-alchemy-ethereum-provider)
     - [Why We Need Ethereum Provider](#why-we-need-ethereum-provider)
     - [HDWalletProvider and Dotenv](#hdwalletprovider-and-dotenv)
     - [Register Alchemy](#register-alchemy)
- [Smart Contract](#smart-contract)
   - [1. Initialize Our Smart Contract](#1-initialize-our-smart-contract)
     - [What Are The Purpose Of Migration?](#what-are-the-purpose-of-migration)
     - [Migration Explanation](#migration-explanation)
     - [What If You Dont Include Migration?](#what-if-you-dont-include-migration)
   - [2. Initialize Our Script Of Deployment](#2-initialize-our-script-of-deployment)
     - [What Is The Purpose Of Migrations Folder?](#what-is-the-purpose-of-migrations-folder)
   - [3. Completing Smart Contract and Migration](#3-completing-smart-contract-and-migration)
- [Deployment Of Smart Contract (Ethereum)](#deployment-of-smart-contract-ethereum)
   - [1. Fund Your Metamask](#1-fund-your-metamask)
   - [2. Deploy Smart Contract](#2-deploy-smart-contract)
   - [3. Error During Deployment](#3-error-during-deployment)
   - [4. Verify Smart Contract Deployment](#4-verify-smart-contract-deployment)
     - [Ethereum Explorer](#ethereum-explorer)
     - [Javascript Object Notation (JSON)](#javascript-object-notation-json)
- [Deployment Of Smart Contract (Ganache)](#deployment-of-smart-contract-ganache)
  - [1. Setup Ganache](#1-setup-ganache)
  - [2. Integrate Ganache With Metamask](#2-integrate-ganache-with-metamask)
    - [Change Hostname](#change-hostname)
    - [Add Ganache Network To Metamask](#add-ganache-network-to-metamask)
    - [Importing Ganache Account To Metamask](#importing-ganache-account-to-metamask)
    - [Refactoring Truffle Configuration](#refactoring-truffle-configuration)
  - [3. Deploy Smart Contract](#3-deploy-smart-contract)
  - [4. Verify Smart Contract Deployment](#4-verify-smart-contract-deployment)
    - [Ganache](#ganache)
    - [Javascript Object Notation (JSON)](#javascript-object-notation-json) 
- [Integration With Web Application](#integration-with-web-application)
   - [1. Javascript Object Notation (JSON)](#1-javascript-object-notation-json)
     - [Application Binary Interface (ABI)](#application-binary-interface-abi)
- [Programmers Tips](#programmers-tips)


# Setup Environment
## 1. Node JS
Node Js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.

Developers could use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

## Node JS Installation 
   - [Node JS](https://nodejs.org/en/)

     ```sh
     node -v
     ```
  - Verify your node installation on Command Prompt
     <p align="center" gap="5">
      <img width="400" alt="NodeJS" src="https://github.com/alifzwan/web3Lab/assets/63784108/a25bda77-e4ee-4365-aa69-96a626c10241">
     </p>

     
## 2. Git
Git is a version control system designed to handle everything from small to very large projects with speed and efficiency.

## Git Installation
   - [Git](https://git-scm.com/downloads)
     
     ```sh
     git --version
     ```
   - Verify your git installation on Command Prompt or Terminal on Visual Studio Code
       <p align="center" gap="5">
        <img width="400" alt="Git" src="https://github.com/alifzwan/web3Lab/assets/63784108/a5a2a736-7a09-43fc-8b69-c02b26a9dbf1">
       </p>
## 3. Visual Studio Code       

Download [Visual Studio Code](https://code.visualstudio.com/) 


Visual Studio Code for me is a universal, all in one code editor/IDE that allow developer to build, debug, test, control version, and etc. 

<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/eedc7a7e-a238-4ef4-aec5-08c80409a2bf">
</p>

Now, for starters open your terminal in Visual Studio Code. It's on View -> terminal 

<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/49ccd1f7-38f6-4438-8a6e-e2e59d942868">
</p>

However, my method is just use your keyboard. `ctrl` + `shift` + `backtick`

you can find backtick on the left side of your `1` on your keyboard.

### Create New Folder 


Now before we proceed with Truffle Suite Installation, I suggest you to create new folder to store everything within it. 

It's a good practice to have so you could find your project seamlessly and less messy environment.

For Example:

<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/fb43ebcc-37f9-4431-a59b-69a16576d55b">
</p>

Now, if let's say i want to create a new project i will:

  - Open Terminal
  - Create new folder by typing `mkdir nameOfYourFolder`
  - Enter that folder by typing `cd nameOfYourFolder`
  - Open and display it on my VSCode by typing `code .`

<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/e1732d56-d929-4dc9-8a5f-532b35d52945">
</p>

Once you type `code .` and press enter, it'll popup a new windows. 

<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/3fb53464-608b-4d7f-b21e-c8c10a272f7a">
</p>

This newly windows are the Display of your project within `nameOfYourFolder`. 

Everything you build right now will be within this project. 

If you're not implementing this practice, it may be a hassle for you to locate a certain file, folder, and overall development of your project.


Now, we can download our Truffle Suite

       
## 4. Truffle Suite
Truffle Suite is a development environment, testing framework, and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier. 

It provides a suite of tools that allow developers to write smart contracts with the Solidity programming language, test them, deploy them, and build decentralized applications (dApps) on top of them.

## Truffle Suite Installation
   - [Truffle Suite](https://trufflesuite.com/docs/truffle/)
     
     ```sh
     npm install -g truffle
     ```
   - Verify truffle installation
     ```sh
     truffle -v
     ```
     <p align="center">
        <img width="400" alt="Git" src="https://github.com/alifzwan/web3Lab/assets/63784108/a8c15d50-ae13-44d1-8571-b69224ffb3a1">
     </p>
     
   - Setup truffle environment on our project
     ```sh
     truffle init
     ```
  ### Folder Description
  
   <p align="center">
        <img width="400" src="https://github.com/alifzwan/web3Lab/assets/63784108/d3f89b35-67fd-48ef-b8d4-43699754a6f9">
   </p>
  
  - **Contracts** - This file contain all of our smart contract
  - **Migrations** - This file is where we write script to deploy the smart contract
  - **Test** - This file is for test/debug our smart contract
  - `truffle-config.js` - This file contain our truffle configuration

## 5. Alchemy (Ethereum Provider)
### Why we need Ethereum Provider?
   Ethereum is a decentralized platform that runs smart contracts. These smart contracts are executed on all nodes in the Ethereum network.
   To interact with the Ethereum network (i.e., to read from or write to the blockchain), your application needs to connect to an Ethereum node.

   Now, running your own Ethereum node can be resource-intensive. It requires downloading and synchronizing the entire Ethereum blockchain, which can take a lot of time and storage space. It also requires maintenance to stay synchronized with the network.
   
   This is where Alchemy comes in. Alchemy hosts Ethereum nodes for you and provides a simple API to interact with them.
   
   This means you can focus on building your application without worrying about maintaining an Ethereum node.
  
   When you use Alchemy, your application sends API requests to Alchemy's servers. Alchemy's servers then interact with the Ethereum network on your behalf. They execute the necessary operations (like reading from or writing to the blockchain) and then return the results to your application.
  
   In the context of deploying a smart contract, instead of setting up your own Ethereum node to deploy the contract, you can use Alchemy's API. You provide your Alchemy API key (which identifies your project) and the smart contract you want to deploy. Alchemy then deploys the contract to the Ethereum network for you.

### HDWalletProvider and Dotenv
  - **HDWalletProvider** - used to create a connection to the Infura Ethereum node, allowing you to interact with the Ethereum network without running your own Ethereum node.
  - **Dotenv** - It helps to keep sensitive data out of your codebase, which is particularly important when your code is stored in a public repository.
  - Install HDWalletProvider and dotenv on our terminal    
    ```sh
     npm install @truffle/hdwallet-provider
    ```
    ```sh
     npm install dotenv
    ```
  - Uncomment code in our `truffle.config.js`

    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/84c132e5-ee03-41c7-92a6-97048cac9732">
    </p>
    
  - Make sure change network name to **sepolia**
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/fc714cda-0606-443a-83d0-bacc599c80fd">
    </p>

### Register Alchemy
  - [Alchemy Registration](https://www.alchemy.com/)
  
  - Create your API (Name it **Web3Lab**) 
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/1f603283-d1f8-424a-8d62-c17c762bad27">
    </p>
  - Choose Sepolia network
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/4657bba8-7e8c-4693-bbea-82c778d18b90">
    </p>
  - Copy your Endpoint and paste in on our `truffle.config.js` 

    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/7025839e-02ed-4910-8c55-ee3fa17586c6">
    </p>

    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/763b66e8-cfb5-42ea-b179-0edf6b32fd5d">
    </p>
    
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/ce12fef7-3f0f-4e91-a5d3-1eaf4e9d3fbc">
    </p>
    
  - Create `.env` file to store our **PROJECT_ID** and **MNEMONIC** 
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/7c821963-18b4-4b1f-a577-3fb8ed3f701b">
    </p>
    
  - Refactor your API on `truffle.config.js`
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/42253083-df43-45b8-88bb-20d1c9f1ca6a">
    </p>



  - You can get your **MNEMONIC** in your metamask. In MetaMask, you can find your account's mnemonic in the settings. Here's how you can find it:
      - Click on the MetaMask extension icon in your browser.
      - Click on the circle icon in the top-right corner.
      - Click on "Settings".
      - Scroll down and click on "Security & Privacy".
      - Click on "Reveal Secret Recovery Phrase". 
      <p align="center">
        <img width="200" src="https://github.com/alifzwan/web3Lab/assets/63784108/869ad4f4-fe19-4698-97a5-d1999c893e17">
        <img width="200" src="https://github.com/alifzwan/web3Lab/assets/63784108/9bf73d42-64cb-4430-967e-8ace198c2d49">
        <img width="200" src="https://github.com/alifzwan/web3Lab/assets/63784108/113d65c8-c339-4610-b97e-ee3d09667404">
        <img width="200" src="https://github.com/alifzwan/web3Lab/assets/63784108/b0893691-2905-4a93-a2d4-13b3bd846c50">
      </p>
   - Now, every ethereum network has different network_id. Think of it like an address (Alamat). Since we're using **sepolia** as our ethereum network, we have to change our network_id.
     - Change your `network_id` to 11155111 
      <p align="center">
        <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/7a5d9c30-d7ee-4083-a9bd-9ec8720286d0">
      </p>

# Smart Contract       

## 1. Initialize Our Smart Contract
  - Create one file within `Contracts` folder name `Migration.sol`
    ```sol
    // SPDX-License-Identifier: MIT
    pragma solidity >=0.4.22 <0.9.0;
    
    contract Migrations {
        address public owner = msg.sender;
        uint public last_completed_migration;
    
        modifier restricted() {
            require(
                msg.sender == owner,
                "This function is restricted to the contract's owner"
            );
            _;
        }

        function setCompleted(uint completed) public restricted {
            last_completed_migration = completed;
        }
    }
    ```
### What Are The Purpose Of Migration?
  The `Migrations.sol` file in the Truffle Suite is a special contract that helps manage the deployment of other contracts to the Ethereum network.
  
  Its purpose is to track and handle the deployment of smart contracts in a systematic way.

### Migration Explanation 

  Order of Deployment:
  - Truffle uses migration scripts to deploy contracts in a specific order. 
  - The migration scripts are written in JavaScript and are executed sequentially. 
  - The Migrations.sol contract is deployed first because it's specified in the initial migration script (usually named 1_initial_migration.js), and subsequent contracts are       deployed in the order defined in subsequent migration scripts.

  Contract Deployment History: 
  - Migrations.sol maintains a record of the deployment history. 
  - Each time you run a migration, a new instance of the Migrations contract is deployed with an incremented migration number.
  - This ensures that contracts are not redeployed unnecessarily.

  Network Independence:
  - Since Ethereum networks can be decentralized and there may be multiple nodes, Migrations.sol helps ensure that each node has the same understanding of the deployed             contract state.
  - It provides a standardized way to manage and record the deployment process.

  Migration Scripting:
  - Migration scripts are JavaScript files that specify the deployment steps.
  - They typically use the Truffle artifacts and web3.js (or ethers.js) to interact with the Ethereum network.
  - These scripts are placed in the migrations folder and executed in order.


### What if you dont include Migration?
  - If you don't include `Migrations.sol` in your contract folder, you won't be able to use the Truffle migration process.
  - Truffle relies on this contract to keep track of deployed contracts and their versions. 
  - Omitting it may result in an incomplete or disorganized deployment process.

## 2. Initialize Our Script Of Deployment
- Create one file within `migration` folder name `1_migration.js`
  ```js
  const Migrations = artifacts.require("Migrations");

  module.exports = function (deployer) {
    deployer.deploy(Migrations);
  };
  ```
### What Is The Purpose Of Migrations Folder?

 Migrations folder in a Truffle project contains JavaScript files that serve as migration scripts.

 These scripts are responsible for deploying smart contracts to the Ethereum network in a controlled and organized manner.

 Each migration script corresponds to a specific deployment step and is executed sequentially.

 **Example script name**:
 - 1_initial_migration.js  -  This script deploys the `Migrations.sol` contract, initializing the migration system.
 - 2_election.js       -  This script would deploy the next contract in the deployment order.
 - 3_add_functionality.js  -  Another script that might deploy a contract or add functionality to existing contracts.

 The purpose of organising deployment steps into separate migration scripts is to maintain a clear and ordered deployment process.

 It ensures that each step is executed only once, avoiding unnecessary redeployments, and it helps in tracking the deployment history.

 ## 3. Completing Smart Contract and Migration
 `Election.sol`
 ```sol
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
 ```
 `2_election.js`
 ```js
  const Election = artifacts.require("Election");
  
  module.exports = function (deployer) {
    deployer.deploy(Election);
  };
 ```
By now i suppose your directory is like this:
 <p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/4f13a295-2904-4b53-aac6-ab1152436866">
 </p>

**Remember**, `migration.sol` and `1_migration.js` is compulsory for any smart contract deployment to the Ethereum network. 

You may change `CrowdFunding.sol` and `2_crowdFunding.js` for example if you want to deploy a smart contract about Election, you may name your smart contract to `Election.sol` and `2_election.js`.


# Deployment of Smart Contract (Ethereum)

## 1. Fund Your Metamask

You must firstly fund your metamask using [Infura Faucet](https://www.infura.io/faucet/sepolia) or [Alchemy Faucet](https://www.alchemy.com/faucets/ethereum-sepolia) 

These two website provides free cryptocurrency to users for testing purposes. You may find another faucet to fund your wallet.

If these two website cannot fund your wallet, you can search for another faucet by typing in google "sepolia testnet faucet"

If you're wallet is 0 ETH, you cannot deploy the Smart Contract as it requires a gas to deploy it to the Ethereum Network.

Before that, change your metamask's network into test network:


<p align="center">
    <img width="250" src="https://github.com/alifzwan/web3Lab/assets/63784108/2c9befbc-5ec7-4be1-8331-64415fe1630c">
</p> 

<p align="center">
    <img width="250" src="https://github.com/alifzwan/web3Lab/assets/63784108/71a8e104-11c6-4764-97e1-a86f8d95e7b0">
</p> 

Copy your wallet address of your Metamask account 

<p align="center">
    <img width="250" src="https://github.com/alifzwan/web3Lab/assets/63784108/3d1cb901-4488-4a73-bb73-12cb37c96277">
</p>

<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/bc3309d9-2369-4fa7-b82e-28a440d1a441">
</p>



## 2. Deploy Smart Contract
Firstly, we have to make sure to check compiler's version on our `truffle.config.js`

<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/1c799ff8-f24a-426c-96dc-1b5afd089943">
 </p>

**Make Sure** that the version is the same as in your `.sol` file or else you'll catch an error halfway through

Then we can compile our smart contract with the command:
```sh
truffle compile --reset
```
This command will compile all of our smart contract in the folder `/contracts`

 <p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/15b93210-51bd-4ccf-a610-c86ae13c421c">
 </p>
 
Now, we can deploy our smart contract with this command:
```sh
truffle migrate --network sepolia --reset
```
If you're getting this output, congratulations. You just deploy your first ever smart contract on ethereum network!
<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/2c449642-5160-45c1-a691-d2aa31d36b12">
</p>

## 3. Error During Deployment

You may come across some error during your deployment and that's okay. Try find a way to solve it.

**TRY THIS WAY OF THINKING**

For example, some of you may have some error stating **insufficient balance** to deploy your Smart Contract.

**Problem:**
- Insufficient balance

How we gonna solve it?

**Solution:**
- Add more fund to your wallet. **OR**
        
- Reduce complexity of your Smart Contract

The more complex your Smart Contract, the more **gas** it required to deploy.


## 4. Verify Smart Contract Deployment  

### Ethereum Explorer

**What Is Ethereum Explorer?**

Ethereum explorer, also known as a blockchain explorer, is a tool that allows you to explore the Ethereum blockchain. It provides a user-friendly way to view and analyze the transactions, blocks, and addresses that make up the blockchain.

You can verify whether your smart contract has been deploy or not on the ethereum network.

Just copy your **Contract Address** on your output, 
<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/81f90297-4ed8-4231-b439-d8473dfd9f9b">
</p>

and paste it on [Etherscan](https://etherscan.io/)
<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/cea5b213-4b6a-4c54-8b73-134396fba2cb">
</p>

Make sure you choose **sepolia testnet** 
<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/efcc22a6-ae12-4301-bf81-f5aef14cbd88">
</p>

Once you searched using your **Contract Address**, you will see as following: 

<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/db3ea193-d746-480a-a278-d82c04eda4d1">
</p>

As you can see at the bottom, it highlights the **contract creation** which is the deployment of your Smart Contract into the Ethereum Network and when the contract is deployed
<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/cb6f7fbf-a09b-4e73-b144-2973ee69cc2e">
</p>

Using Ethereum Explore is a good practice for Decentralized Application as it provide an insight regarding your smart contract deployment, any transaction occurs, block informations, as well as to interact with your Web Application.

## Javascript Object Notation (JSON)

Another method (for me), usually i'll check my `json` file 
<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/e18b9b2f-8f6f-4f99-96c5-b898a3008074">
</p>

within `networks:{}`, you can check your `network_id`, contract address, and transaction hash. If your smart contract is not deployed to Ethereum Network, this information would not appear on our `.json`.


# Deployment of Smart Contract (Ganache) 

## 1. Setup Ganache

Download [Ganache](https://archive.trufflesuite.com/ganache/)

Ganache is personal blockchain for Ethereum development that you can use to deploy contracts, develop applications, and run tests.

<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/8d3114c0-d462-4704-9070-1affc846a1f7">
</p>

<p align="center">
    <img width="400" alt="ganache-picture" src="https://github.com/alifzwan/ethers-simple-storage/blob/main/images/ganache-picture.png">
</p>


After you install **Ganache** you may proceed to **Quickstart** 
<p align="center">
    <img width="1000" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/b8e4a28c-e4d1-4249-a84e-46b67101f6ff">
</p>

Alright now you may see a list of **Account** with 100 ETH fund.

This is pretty same with **Metamask** where you have account. 

However, for development purpose i find **Metamask** a hassle since you have to fund your account compare to **Ganache** where you have a 100 ETH funded account.

## 2. Integrate Ganache With Metamask

### Change Hostname 

The hostname in Ganache determines which network interfaces on your machine the Ganache server is accessible from. Depending on your development needs, you might want to change this setting.

<p align="center">
    <img width="800" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/1c7436c3-2469-4f46-acce-4c4bf111b33e">
</p>

Choose the 192.168.0.10 - Wifi and restart your **Ganache**
<p align="center">
    <img width="800" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/0acbe946-508a-41b0-8fd7-023691086af3">
</p>

Now your RPC Server is different

<p align="center">
    <img width="800" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/2882f6ea-c7ba-419c-b44d-5239e8610d0c">
</p>

Here's what each option means:
- 0.0.0.0 - All Interfaces: This means Ganache is accessible from any network interface on your machine. This could be useful if you're testing from a different device on the same network, or if you're running a client in a different virtual machine.
- 192.168.0.10 - Wifi: This is the IP address of your Wifi network interface. If you set this as the hostname, only devices on the same Wifi network can access the Ganache server.
- 127.0.0.1 - Loopback Pseudo-Interface 1: This is the IP address of the loopback network interface. This means the Ganache server can only be accessed from the same machine it's running on. This is the most secure option, as it doesn't expose the server to the rest of the network.
- 172.29.176.1 - vEthernet (WSL (Hyper V firewall)): This is the IP address of a virtual Ethernet network interface, likely created by the Windows Subsystem for Linux (WSL) or Hyper-V. If you're running a client in WSL or a Hyper-V virtual machine, you might want to use this option.


### Add Ganache Network To Metamask

We can use these account in **Ganache** in **Metamask**. 

First, we have to establish the connection between **Ganache** and **Metamask**.

<p align="center">
    <img width="250" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/3f1c6cd2-b133-4fa8-b091-2284e6fbda05">
</p>

<p align="center">
    <img width="250" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/b9d9b84e-1840-4c06-8b26-40bf9a5b2013">
</p>

<p align="center">
    <img width="500" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/7033656c-4dd0-474e-8b33-bdd734ec8368">
</p>

<p align="center">
    <img width="500" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/1b2410ba-4e74-405c-9385-8003450b7071">
</p>

Add your Network based on this details:

- Network name: Ganache
- New RPC URL : HTTP://192.168.0.10:7545
- Chain ID : 1337 
- Currency symbol: ETH

You may find your RPC URL on your **Ganache** interface
<p align="center">
    <img width="800" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/2882f6ea-c7ba-419c-b44d-5239e8610d0c">
</p>

### Importing Ganache Account To Metamask 

By now your **Metamask** already connect with your **Ganache**

<p align="center">
    <img width="250" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/d3e6b715-57d7-4b74-8ac1-567428ef1de6)">
</p>

Now to import your **Ganache** account your have to click on your account at the top and **add account** 


<p align="center">
    <img width="250" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/0ea37b53-24ea-41a5-a41d-6a6b40673fb4">
</p>
<p align="center">
    <img width="250" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/c4647623-1582-4663-8392-649b4d5d6d75">
</p>

Click Import Account

<p align="center">
    <img width="250" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/92c8fb45-c588-4478-8a7a-1cecb99788f7">
</p>

<p align="center">
    <img width="250" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/b37ea73f-7d9a-40e4-ace6-f3e55e710ee3">
</p>



Now to get your **Account's Private Key**, open your ganache and copy your private key and paste it.
<p align="center">
    <img width="800" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/fcc4274b-75df-4ac8-91bd-033d0b9fb249">
</p>
<p align="center">
    <img width="800" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/27f361ce-a966-4919-8a3b-e45f3eb70a3f">
</p>

Now congratulations you already import your **Ganache** account into **Metamask**

<p align="center">
    <img width="250" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/375d89fe-a869-4d20-a557-546e0d2b6747">
</p>



### Refactoring Truffle Configuration

Open your `truffle.config.js` and uncomment this part of code:

<p align="center">
    <img width="800" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/8023e32e-7956-4a18-a573-e4d0b3ff9f12">
</p>

Change this section according to setting on **Ganache**:

<p align="center"> 
    <img width="800" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/0c28b692-f164-418e-8554-4473def018dd">
</p>

<p align="center"> 
    <img width="800" alt="ganache-picture" src="https://github.com/alifzwan/web3Lab/assets/63784108/e3034f69-05ed-4f19-9fe0-02959a4b6dd2">
</p>


## 3. Deploy Smart Contract

After refactoring your configuration file, you can proceed with compile and deployment of your smart contract.

**Compile:**
```sh
truffle compile --reset
```
This command will compile all of our smart contract in the folder `/contracts`

 <p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/15b93210-51bd-4ccf-a610-c86ae13c421c">
 </p>

**Deploy:**
```sh
truffle migrate --network ganache --reset
```
 <p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/36615ef5-4da5-41c4-9bed-1f83a6b1042e">
 </p>

## 4. Verify Smart Contract Deployment 

## Ganache

To check whether your smart contract is already deployed is on the **Blocks** section

**Blocks** shows each block as mined on the blockchain, along with gas used and transactions.

 <p align="center">
    <img width="800" src="https://github.com/alifzwan/web3Lab/assets/63784108/aad47b79-3c8b-47a9-bb24-04f6a3bfc5ac">
 </p>

 Here's a breakdown of what those blocks might represent:
 
- **Initialize Block (Block 0)**: The first block which often referred as **genesis block** or **Block 0**. This block doesn't contain any transactions (since you haven't deployed any contracts or made any transactions yet), but it's necessary to initialize the blockchain. All subsequent blocks (which will contain your transactions) will link back to this block.
  
- **Migrations Contract Deployment (Block 1)**: The first transaction is usually the deployment of the Migrations contract. Truffle uses this contract to keep track of which migrations have been run. The contract is deployed only once, when you run your migrations for the first time.

- **Migrations Contract Update (Block 2)**: After the Migrations contract is deployed, Truffle records that the first migration (the deployment of the Migrations contract itself) has been completed. It does this by calling a function on the Migrations contract, which creates a transaction.

- **Your Contract Deployment (Block 3)**: The next transaction is the deployment of your actual contract. This is the contract you've written and are deploying with your second migration script.

- **Migrations Contract Update (Block 4)**: After your contract is deployed, Truffle records that the second migration has been completed. Again, it does this by calling a function on the Migrations contract, which creates another transaction.

## Javascript Object Notation (JSON)

Another method (for me), usually i'll check my `json` file 
<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/18678e13-4a15-4247-af81-8f900d191aa1">
</p>

within `networks:{}`, you can check your `network_id`, contract address, and transaction hash. If your smart contract is not deployed to Ganache Network, this information would not appear on our `.json`.



# Integration With Web Application

## 1. Javascript Object Notation (JSON)

Now I believe you have a new folder names `build/contracts` which contains your `.json` file

<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/45b22509-9b34-4e40-8d15-e2a5ec4c93c7">
</p> 

You can see there's a massive line of code there.
<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/d3534acf-66c9-4d25-a4b2-9fb35960b399">
</p> 


Here's the thing, whenever you deploy your smart contract on the ethereum network, truffle frameworks will automatically generate a new `json` file.

The more complex and complicated your Smart Contract, the longer line of code you will get.

This `json` file is really crucial for Web Development integration with our Smart Contract.

Web Application + Smart Contract = Decentralized Application.

It contains important information about your contract:
  - Application Binary Interface (ABI)
  - Contract Address

Okay we've already know that we can use Contract Address to verify our smart contract deployment on Ethereum Explorer.

Well what about **Application Binary Interface (ABI)?**

### Application Binary Interface (ABI)?

ABI is a representation of the contract's functions and variables in a format that JavaScript can understand.

Javascript compiler cannot read solidity code, due to that **truffle suite** generate a file that Javascript compiler can read. 

So Javascript will undergo it's fetching method to obtain all of the variables, functions, and etc by reading the `.json` file to be operate successfully on our Web Application.


# Programmers Tips
  - Whenever you go through some errors/bugs, you **must** find a way to solve the bug. Don't worry about it, every developer/IT practitioner will go through this.
  - My way of solving is I will copy the error I run, and paste it to google. Well of course you have to use GPT as well to solve it.
  - Some of the website i used to solve my errors is [Stack Overflow](https://stackoverflow.com/) and [Ethereum Stack Exchange](https://ethereum.stackexchange.com/) as these two website will publish a solved error that someone has been go through before this.
  - **Remember**, this may be a new technology and practice for you to explore and develop. So it supposed to be hard for a beginner. If it's easy then everyone would've been a great developer right now. If you only do what you can do, you will never be more than you are.
  - I promise whenever you solve some error that has been interrupting your development, you will feel some sort of satisfaction.

‎<h1 align="center">   
  ‎ 
</h1> 


<p align="center">
  <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" width="120" height="120"/>
  </a>
  <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" width="120" height='120'>
  </a>
  <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png" width="120" height='120'>
  </a>
</p>

<h1 align="center">   
  Decentralized Application: Web 3
</h1> 

## Table of Contents

- [Responsive Web Design](#responsive-web-design)
   - [1. React JS](1-react-js)
     - [What is React JS?](#what-is-react-js)
     - [Why use React JS on Decentralized Application?](#why-use-react-js-on-decentralized-application)
   - [2. Vite](#2-vite)
- [Setup Environment](#setup-environment)
   - [1. Installation](#1-installation)
      - [React JS and Vite](#react-js-and-vite)
- [Web Development](#web-development)
   - [1. Initialize User Interface](#1-initialize-user-interface)
   - [2. Connecting Front End with Smart Contract](#2-connecting-front-end-with-smart-contract)
     - [Web3 JS](#web3-js)
     - [Smart Contract Directory](#smart-contract-directory)
     - [Refactor Our Application](#refactor-our-application)
     - [Explanation](#explanation)
       - [Import dependencies and file](#import-dependencies-and-file)
       - [useState](#usestate)
       - [useEffect](#useeffect)
       - [loadWeb3](#loadweb3)
       - [loadBlockchainData](#loadblockchaindata)
       - [addCandidate](#addcandidate)
       - [registerVoter](#registervoter)
       - [castVote](#castvote)
       - [getWinningCandidate](#getwinningcandidate)
     - [Understanding The Application Process](#understanding-the-application-process)
       - [Breaking Down Each Section](#breaking-down-each-section)
       

# Responsive Web Design

So in this section i'm just gonna explain some frameworks we use to build a Decentralized Application (DApps).

**Smart Contract (Back-End) + React JS (Front-End) = Decentralized Application (DApps)**

## 1. React JS

  Now we venturing a framework that are used to build a responsive web design. 

  I'm really sure that every one of you may heard **React JS** as it is the most popular Javascript framework in the world and is used by many well-known companies, such as Netflix, Maybank2u (MAE), Instagram, and etc.

  If you're interested to be a Front-End Developer/ Full-Stack Developer, then this frameworks is the one you have to master. 

 ### What is React JS? 

 **React JS** is a Javascript library that allow developer to build user interface. It's foundation is based on the concept of components, which are piece of code that are reusable throughout your project.

 Think of **components** as the building blocks of your app, they're like little chunks of code that you can reuse throughout your project. 

 Need a button, a form, or a navigation bar? Each one can be a component!

 **Here's a little taste of what a React component looks like:**
 ```jsx
  import React from 'react';
  
  function HelloWorld(props) {
    return (
      <div>
        Hello, {props.name}!
      </div>
    );
  }
  
  // To use it in your app
  <HelloWorld name="John Doe" />
 ```

 Now this is what we call JSX. 
 
 **JSX** is a syntax extension for Javascript that let you write your HTML code and Javascript code logic all in one place. 

 All of React JS file is in `.jsx` file format.

 ### Why use React JS on Decentralized Application?

 Alright you must wondering why we can't use other framework and programming language other than React JS and Javascript right?

 Maybe you wanna use Flask, Python's famous frameworks used to build user interface as well. 

 **Here's my take on why i use React JS compare to other frameworks:**

 - **Javascript Ecosystem**: Solidity, has a syntax that is somewhat similar to Javascript. This makes Javascript a prominent choice for Ethereum Developer. Plus, the Javascript ecosystem offers several libraries to interact with the blockchain, like Web3 JS and Ethers JS.
   
 - **Component-Based Architecture**: As i mentioned before, React is based on the concept of components, which are piece of code that are reusable throughout your project. It is a great fit for DApps. Each components can manage its own logic and state to interact with complex blockchain data.
   
 - **Strong Community and Ecosystem**: Since React JS is the most popular framework to build user interface, the community is gigantic as well, which means it's easy for you to find help and resources.


However, my most prominent reason is the **Demand of Skills**. React JS is the most famous framework to build UI. Which means most company integrate this framework in their system. Hence, this skills is demanding in the market. Not only in Malaysia, but worldwide. You master React, you'll be wanted universally.

## 2. Vite 

Vite, simply said is a build tool and development server. It can be used by any frameworks or no frameworks at all (Vanilla).

However, it is recommended to integrate your project with the React-Powered Frameworks. 

**The reason i chose this build tool:**
- It swiftly fast 
- It provide a templates for starting React projects.
- Easy for documentation and alteration.


Even React official documentation state this:
<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/3cef6ca0-471c-46fa-968c-51b20c4fca55">
</p> 

You may use Next JS if you want, but since we don't need to build a server-site rendering or simply said all of the Back-End configuration since we already have our Back-End (Smart Contract). Next JS is like all in one Front-End + Back-End. However, if you want to build only Front-End, i suggest you use Vite.


# Setup Environment

## 1. Installation

### React JS and Vite

To use React in Vite, you have to create a react application

Here's a code snippet:
```sh
npm create vite@latest
```

Configure your project like this: 
<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/c3264b6d-9992-472f-a370-dd992744c175">
</p> 

For the `Project name` you may name it with anything you want but for me personally i always name it as `client` to indicate that it is on the client-side.

Now, i believe you have a new generated folder on your directory
<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/685da1df-ed76-465e-9594-eb5beee249f0">
</p> 

This folder contains all of Front-End file. So in order to make a change (Download dependencies / run application), you have to access the folder first.

You can do so with this command:
```sh
cd yourFolderName
```

**So let's first download all of dependencies**
```sh
npm install
```

After download all of dependencies, you can run your React Application
```sh
npm run dev
```
Your VSCode will display a notification like this:
<p align="center">
    <img width="800" src="https://github.com/alifzwan/web3Lab/assets/63784108/21ca9ee0-fc94-4e25-b120-ae6d4a9ec132">
</p> 

press `Open in Browser` and it will redirect you to your browser:
<p align="center">
    <img width="800" src="https://github.com/alifzwan/web3Lab/assets/63784108/21f022e3-5a4f-4371-8fbd-f75869887467">
</p> 

and Congratulations, you just created your first ever React Application.

# Web Development
## 1. Initialize User Interface

We're not gonna go in-depth on Web Development but i suggest you do some self learning on [React JS](https://react.dev/). 

Let's first initialize our `App.jsx`:
```js
import React from 'react';


const App = () => {
    return (
        <div>
            <h1>Election DApp</h1>

            <div>
                <div>
                    <b>Current Account:</b> 
                    <b>Election Leader: </b> 
                </div>
                <h2>Candidates</h2>
                <ul>
                    <li>Name of Candidate </li>
                </ul>
            </div>

            <div>
                <div>
                    <h3>Add Candidate</h3>
                    <input type="text"placeholder="Candidate Name"/>
                    <button >
                        Add Candidate
                    </button>
                </div>

                <div>
                    <h3>Register Voter</h3>
                    <input type="text" placeholder="Voter Address"
                    />
                    <button>Register Voter</button>
                </div>

                <div>
                    <h3>Cast Vote</h3>
                    <input type="number" placeholder="Candidate Index"
                    />
                    <button>Vote</button>
                </div>
            </div>

            <div>
                <h3>Winning Candidate</h3>
                <button>Get Winning Candidate</button>
                <p></p>
            </div>
        </div>
    );
}

export default App;


```

You may run this code and display this interface using this command:
```
npm run dev
```
<p align="center">
    <img width="800" src="https://github.com/alifzwan/web3Lab/assets/63784108/c029eee8-012b-4137-8319-71f56043ccbe">
</p> 

Now let's add some styles on our interface but first you may install on our dependencies [Sass](https://sass-lang.com/)
```sh
npm install sass
```
After you install sass, we can proceed with styling our interface:
`App.jsx`:
```js
import React from 'react';
import './App.scss';

const App = () => {
    return (
        <div className="main-container">

            <h1 className="title">Election DApp</h1>

            <div className="main-content">
                <div className="account">
                    <b>Current Account:</b> 
                    <b>Election Leader: </b> 
                </div>
                <h2>Candidates</h2>
                <ul>
                    <li>Name of Candidate </li>
                </ul>
            </div>

            <div className="main-process">
                <div className="reg-candidate">
                    <h3>Add Candidate</h3>
                    <input
                        type="text"
                        placeholder="Candidate Name"
                    />
                    <button className="button">
                        Add Candidate
                    </button>
                </div>

                <div className="reg-voter">
                    <h3>Register Voter</h3>
                    <input
                        type="text"
                        placeholder="Voter Address"
                    />
                    <button className="button">Register Voter</button>
                </div>

                <div className="cast-vote">
                    <h3>Cast Vote</h3>
                    <input
                        type="number"
                        placeholder="Candidate Index"
                    />
                    <button className="button">Vote</button>
                </div>
            </div>

            <div className="winning-candidate">
                <h3>Winning Candidate</h3>
                <button>Get Winning Candidate</button>
                <p></p>
            </div>
        </div>
    );
}

export default App;
```
`App.scss`:
```scss
.main-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 20px;
    height: 90vh;
    width: 98vw;

    .title {
        text-align: center;
        font-weight: bold;
        width: 100%;
    }

    .main-content {
        .account {
            display: flex;
            flex-direction: column;
        }
    }

    .main-process {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        width: 100%;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;

        .reg-candidate {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid black;
            padding: 10px;
            gap: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                transform: scale(1.05);
            }
            .text {
                font-size: 20px;
                font-weight: bold;
            }
            .button {
                border-radius: 8px;
                border: 1px solid transparent;
                padding: 0.6em 1.2em;
                font-size: 1em;
                font-weight: 500;
                font-family: inherit;
                background-color: #1a1a1a;
                cursor: pointer;
                transition: border-color 0.25s;
            }
        }
        .reg-voter {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;

            border: 1px solid black;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                transform: scale(1.05);
            }
            .text {
                font-size: 20px;
                font-weight: bold;
            }
            .button {
                border-radius: 8px;
                border: 1px solid transparent;
                padding: 0.6em 1.2em;
                font-size: 1em;
                font-weight: 500;
                font-family: inherit;
                background-color: #1a1a1a;
                cursor: pointer;
                transition: border-color 0.25s;
            }
        }

        .cast-vote {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;

            align-items: center;
            border: 1px solid black;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                transform: scale(1.05);
            }
            .text {
                font-size: 20px;
                font-weight: bold;
            }
            .button {
                border-radius: 8px;
                border: 1px solid transparent;
                padding: 0.6em 1.2em;
                font-size: 1em;
                font-weight: 500;
                font-family: inherit;
                background-color: #1a1a1a;
                cursor: pointer;
                transition: border-color 0.25s;
            }
        }

    }

    .winning-candidate {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            transform: scale(1.05);
        }

        .icon {
            font-size: 50px;
        }

        .text {
            font-size: 20px;
            font-weight: bold;
        }
    }
}
```

Now your interface will look like this:
<p align="center">
    <img width="800" src="https://github.com/alifzwan/web3Lab/assets/63784108/a8c6dddf-0bbb-44ca-b830-79db2a5323f7">
</p> 

Cool right? 

You may adjust your styling depending on your preferences. This is where coding + creativity comes in. 

## 2. Connecting Front End with Smart Contract

### Web3 JS

[Web3 JS](https://web3js.readthedocs.io/en/v1.10.0/) is a collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket.

It's the Ethereum compatible JavaScript API which implements the Generic JSON RPC spec.

We use this library to connect our Interface with our Smart Contract.

### Smart Contract Directory

Remember we store our smart contract `json` file?

it's in `build/contracts`. However, we're gonna need this `json` file to interact with our Smart Contract.

So let's update our `truffle.config.js` 

<p align="center">
    <img width="800" src="https://github.com/alifzwan/web3Lab/assets/63784108/364294f7-d6a5-44eb-990f-0f776cfd1b55">
</p> 

with this line of code, after we deploy our smart contract, it'll automatically generate the file on `./client/src/artifacts` which `./client` is our front-end folder hence we can interact with it on our interface.



### Refactor Our Application

Now this is the most prominent and difficult part.

Connecting your interface with your smart contract require a very attentive detail and changes you made.

However, let me paste the code first and explain later on.

`App.jsx`
```js
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
```

Looks huge and complicated right?

now let's go through one by one function that we add on our `App.jsx`

### Explanation
#### Import dependencies and file 
```js
import React, { useState, useEffect } from 'react';
import Web3 from "web3";
import ElectionABI from "/src/artifacts/Election.json";
import './App.scss';
```
There's 4 things we import:
  - [useState](https://react.dev/reference/react/useState) and [useEffect](https://react.dev/reference/react/useEffect) : To initialize state variable and fetch blockchain data
  - web3 : To interact with our Smart Contract
  - `Election.json` file 
  - `App.scss` file

#### useState

useState is a React Hook that lets you add React state to function components. It takes one argument which is the initial state, and it returns an array with two elements:
- current state 
- function to update it.

```js
    const [account, setAccount] = useState('');
    const [loader, setLoader] = useState(true);
    const [election, setElection] = useState(null);

    const [electionLeader, setElectionLeader] = useState('');
    const [candidates, setCandidates] = useState([]);
    const [newCandidateName, setNewCandidateName] = useState('');
    const [voterAddress, setVoterAddress] = useState('');
    const [selectedCandidate, setSelectedCandidate] = useState('');
    const [winnerName, setWinnerName] = useState('');
```

#### useEffect

useEffect is React Hook as well but it's a function that lets you perform side effects in function components. Side effects could be data fetching of our smart contract data in this case.

```js
useEffect(() => {
        loadWeb3();
        loadBlockchainData();
    }, []);
```

#### loadWeb3
```js
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
```

This process does this following:
- Checks if the browser has MetaMask (a cryptocurrency wallet) installed.
- If MetaMask is installed, it sets up a connection to it.
- If MetaMask isn't installed, it shows an alert telling the user to consider installing MetaMask.

#### loadBlockchainData
```js
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
```

This process does this following:
- It starts a loading process.
- It connects to the Ethereum blockchain.
- It gets the user's Ethereum account and saves it.
- It gets the ID of the network the user is connected to.
- It checks if there's a smart contract for an election on this network.
- If there is:
  - It connects to the election contract.
  - It gets the current leader of the election and saves it.
  - It counts how many candidates there are in the election.
  - It gets information about each candidate and saves it.
  - It stops the loading process.
- If there isn't a smart contract, it shows an alert saying so.

#### addCandidate
```js
const addCandidate = async () => {
  await election.methods.addCandidate(newCandidateName).send({ from: account });
  setNewCandidateName('');
  loadBlockchainData();
};
```
This process does this following:
- It adds a new candidate to the election using the name stored in newCandidateName.
- It clears the newCandidateName field.
- It updates the blockchain data to reflect the new candidate.

#### registerVoter
```js
const registerVoter = async () => {
  await election.methods.registerVoters(voterAddress).send({ from: account });
  setVoterAddress('');
  alert('Voter registered successfully');
};
```
This process does this following:
- It registers a new voter with the address stored in voterAddress.
- It clears the voterAddress field.
- It shows an alert saying the voter was registered successfully.
  
### castVote
```js
const castVote = async () => {
  await election.methods.castVote(selectedCandidate).send({ from: account });
  setSelectedCandidate('');
  alert('Vote cast successfully');
  loadBlockchainData();
};
```
This process does this following:
- It casts a vote for the candidate selected by the user.
- It clears the selectedCandidate field.
- It shows an alert saying the vote was cast successfully.
- It updates the blockchain data to reflect the new vote.

#### getWinningCandidate
```js
const getWinningCandidate = async () => {
  const name = await election.methods.winningCandidate().call();
  setWinnerName(name);
  console.log("Winning Candidate:", name); // Debugging log
};
```
This process does this following:
- It gets the name of the winning candidate from the election.
- It saves the winner's name.
- It prints the winner's name for debugging purposes.

## Understanding The Application Process

### Breaking Down Each Section

**Address Info**
<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/c46f4e2d-45e7-4105-ab93-88c0b8b47926">
</p> 

This section (personally) is very crucial information to include into your Decentralized Application (DApps) as you know who's the Creator (**Election Leader** also the one who deploy the smart contract) and **Current Address** so you know who's the one that doing the transaction.

**Candidates Info**
<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/ce5777db-bbfd-4532-8af3-ad2da942d589">
</p> 

Now this section is based on our Smart Contract:
<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/da29b205-04a9-4b41-a296-91bfe6bee0a2">
</p> 

It's a good decision to be made to include it as well on our Application.

**Add Candidate** 
<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/aa34cfe3-5c75-4982-aa56-d3f90f597f7c">
</p> 

This section is based on our addCandidate() function on our smart contract 
<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/14dd4d28-4f1e-43e0-9ff7-b295067c8699">
</p> 

As you can see, it accept 1 argument which is `string memory _name` 

**Register Voters** 
<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/d2cb7af9-9396-4db1-ac58-04aa08a14831">
</p> 

This section is based on our registerVoters() function on our smart contract 
<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/b2ea684b-751c-403f-a47b-a2bbb909d484">
</p> 

As you can see, it accept 1 argument which is `string memory _name`, and it set the `bool voted` condition into `false`

**Cast Vote**

<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/ede5b741-db60-43ca-b8e7-d5c58cc400b8">
</p> 

This section is based on our castVote() function on our smart contract 
<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/31b8a259-5c88-41ce-a8ed-c0fec5e1e0a1">
</p> 

As you can see, it accept 1 argument which is `uint256 _candidateIndex` since our candidate is in array, and it 
- set the `bool voted` condition into `true`
- it records that `uint256 _candidateIndex` is mapped to the person in candidate array (if vote 0, then person in 0 index will be voted)
- add the `voteCount` of the candidate

**Winning Candidate**  

This section is just calling, which is there aint any transaction required to do so.

<p align="center">
    <img width="400" src="https://github.com/alifzwan/web3Lab/assets/63784108/89521812-cf5c-4565-a44e-46032efbf7c0">
</p> 

It check which candidate have the highest `voteCount` and display it.

### Transaction 

Transaction will be made if you are executing a function.

This 3 section:

<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/0bc0f9b7-073f-489c-b65e-fca7c3fe7e35">
</p> 

This process required a transaction to be executed. 

How do you know there is a transaction? 

This notification will pops out. 

<p align="center">
    <img width="600" src="https://github.com/alifzwan/web3Lab/assets/63784108/3fb47205-ee67-4af6-94a7-1320567a3cf0">
</p> 

It pretty much like you want to confirm some banking transaction.

If you don't have enough funds in your wallet, you would not be able to execute this transaction thus please make sure your wallet have enough funds to do the transaction.






















 

 

 




 



 

  




       
