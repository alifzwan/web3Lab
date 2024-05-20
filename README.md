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
</p>

<h1 align="center">   
  Setup Environment for our Web 3
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
   - [4. Infura (Ethereum Provider)](#4-infura-ethereum-provider)
     - [Why We Need Ethereum Provider](#why-we-need-ethereum-provider)
     - [HDWalletProvider and Dotenv](#hdwalletprovider-and-dotenv)
     - [Register Infura](#register-infura)
   - [5. Initialize Our Smart Contract](#5-initialize-our-smart-contract)
     - [What Are The Purpose Of Migration?](#what-are-the-purpose-of-migration)
   - [6. Initialize Our Script Of Deployment](#6-initialize-our-script-of-deployment)
     - [What Is The Purpose Of Migrations Folder?](#what-is-the-purpose-of-migrations-folder) 

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

## 4. Infura (Ethereum Provider)
### Why we need Ethereum Provider?
   Ethereum is a decentralized platform that runs smart contracts. These smart contracts are executed on all nodes in the Ethereum network.
   To interact with the Ethereum network (i.e., to read from or write to the blockchain), your application needs to connect to an Ethereum node.

   Now, running your own Ethereum node can be resource-intensive. It requires downloading and synchronizing the entire Ethereum blockchain, which can take a lot of time and storage space. It also requires maintenance to stay synchronized with the network.
   
   This is where Infura comes in. Infura hosts Ethereum nodes for you and provides a simple API to interact with them.
   
   This means you can focus on building your application without worrying about maintaining an Ethereum node.
  
   When you use Infura, your application sends API requests to Infura's servers. Infura's servers then interact with the Ethereum network on your behalf. They execute the necessary operations (like reading from or writing to the blockchain) and then return the results to your application.
  
   In the context of deploying a smart contract, instead of setting up your own Ethereum node to deploy the contract, you can use Infura's API. You provide your Infura API key (which identifies your project) and the smart contract you want to deploy. Infura then deploys the contract to the Ethereum network for you.

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

### Register Infura
  - [Infura Registration](https://www.infura.io/)
  
  - Create your API (Name it **Web3Lab**) 
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/d42a993e-7ac0-46a2-9948-6907c879cdfb">
    </p>
  - Choose Sepolia network
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/cf827272-4b29-46b5-bda6-cbedf328a810">
    </p>
  - Copy your Endpoint and paste in on our `truffle.config.js` 

    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/6a2a2276-562e-4bb8-92f9-e80edc6859ff">
    </p>

    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/3f38117e-3e10-4fea-908d-10a4e64a780a">
    </p>
    
  - Create `.env` file to store our **PROJECT_ID** and **MNEMONIC** 
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/c30438ba-9a2e-45cd-9afe-1b06b934f353">
    </p>
    
  - Refactor your API on `truffle.config.js`
    <p align="center">
      <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/676f5d86-18e8-4ad5-88f0-a5c216aba68a">
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
        <img width="1000" src="https://github.com/alifzwan/web3Lab/assets/63784108/abfb1dd0-ab9d-41c2-9d2c-4f05030a01ae">
      </p>

## 5. Initialize Our Smart Contract
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
  The Migrations.sol file in the Truffle Suite is a special contract that helps manage the deployment of other contracts to the Ethereum network.
  
  Its purpose is to track and handle the deployment of smart contracts in a systematic way.

  **Explanation**: 

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


  **What if you dont include `Migration.sol`?**
  - If you don't include Migrations.sol in your contract folder, you won't be able to use the Truffle migration process.
  - Truffle relies on this contract to keep track of deployed contracts and their versions. 
  - Omitting it may result in an incomplete or disorganized deployment process.

## 6. Initialize Our Script Of Deployment
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
  




       
