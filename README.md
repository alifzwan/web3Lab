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
</p>

<h1 align="center">   
  Decentralized Application: Web 3
</h1> 

## Table of Contents
- [Setup Environment](#setup-environment)
   - [1. Node JS](1-node-js)
     - [Node JS Installation](#node-js-installation)
   - [2. Git](#2-git)
     - [Git Installation](#git-installation)
   - [3. Truffle Suite](#3-truffle-suite)
     - [Truffle Suite Installation](#truffle-suite-installation)
     - [Folder Description](#folder-description)
   - [4. Alchemy (Ethereum Provider)](#4-alchemy-ethereum-provider)
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
- [Deployment Of Smart Contract](#deployment-of-smart-contract)
   - [1. Fund Your Metamask](#1-fund-your-metamask)
   - [2. Deploy Smart Contract](#2-deploy-smart-contract)
   - [3. Verify Your Deployment On Ethereum Explorer](#3-verify-your-deployment-on-ethereum-explorer)
     - [What Is Ethereum Explorer?](#what-is-ethereum-explorer)
- [Integration With Web Application](#integration-with-web-application)
   - [1. Javascript Object Notation (JSON)](#1-javascript-object-notation-json)
     - [Application Binary Interface (ABI)](#application-binary-interface-abi)


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
       
## 3. Truffle Suite
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

## 4. Alchemy (Ethereum Provider)
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
 - 2_crowdFunding.js       -  This script would deploy the next contract in the deployment order.
 - 3_add_functionality.js  -  Another script that might deploy a contract or add functionality to existing contracts.

 The purpose of organising deployment steps into separate migration scripts is to maintain a clear and ordered deployment process.

 It ensures that each step is executed only once, avoiding unnecessary redeployments, and it helps in tracking the deployment history.

 ## 3. Completing Smart Contract and Migration
 `CrowdFunding.sol`
 ```sol
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
 ```
 `2_crowdFunding.js`
 ```js
  const CrowdFunding = artifacts.require("CrowdFunding");
  
  module.exports = function (deployer) {
    deployer.deploy(CrowdFunding, 200);
  };
 ```
By now i suppose your directory is like this:
 <p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/4f13a295-2904-4b53-aac6-ab1152436866">
 </p>

**Remember**, `migration.sol` and `1_migration.js` is compulsory for any smart contract deployment to the Ethereum network. 

You may change `CrowdFunding.sol` and `2_crowdFunding.js` for example if you want to deploy a smart contract about Election, you may name your smart contract to `Election.sol` and `2_election.js`.


# Deployment of Smart Contract

## 1. Fund Your Metamask

You must firstly fund your metamask using [Infura Faucet](https://www.infura.io/faucet/sepolia) or [Alchemy Faucet](https://www.alchemy.com/faucets/ethereum-sepolia) 

If you're wallet is 0 ETH, you cannot deploy the Smart Contract as it requires a gas to deploy it to the Ethereum Network.

Before that, change your metamask's network into test network 


<p align="center">
    <img width="250" src="https://github.com/alifzwan/web3Lab/assets/63784108/2c9befbc-5ec7-4be1-8331-64415fe1630c">
</p> 

<p align="center">
    <img width="250" src="https://github.com/alifzwan/web3Lab/assets/63784108/71a8e104-11c6-4764-97e1-a86f8d95e7b0">
</p> 


<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/bc3309d9-2369-4fa7-b82e-28a440d1a441">
</p>

Copy your wallet address of your Metamask account 

<p align="center">
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/3d1cb901-4488-4a73-bb73-12cb37c96277">
</p>

and you'll get 0.5 ETH. This fund is for testing purposes. Meaning you cannot do any transaction to buy things using it. 

If those two website cannot fund your wallet, you can search for another faucet by typing in google "sepolia testnet faucet"

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


## 3. Verify Your Deployment On Ethereum Explorer 

### What Is Ethereum Explorer?

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
    <img width="500" src="https://github.com/alifzwan/web3Lab/assets/63784108/cb6f7fbf-a09b-4e73-b144-2973ee69cc2e">
</p>

Using Ethereum Explore is a good practice for Decentralized Application as it provide an insight regarding your smart contract deployment, any transaction occurs, block informations, as well as to interact with your Web Application.

Another method (for me), usually i'll check my `json` file 
<p align="center">
    <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/e18b9b2f-8f6f-4f99-96c5-b898a3008074">
</p>

within `networks:{}`, you can check your `network_id`, contract address, and transaction hash. If your smart contract is not deployed to Ethereum Network, this information would not appear on our `.json`.

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





 



 

  




       
