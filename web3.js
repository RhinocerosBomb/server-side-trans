const Web3 = require('web3');
const Tx = require('ethereumjs-tx')

const contract = require('./contracts/SimpleOracle')

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

web3.eth.defaultAccount = web3.eth.accounts[0];

const TestContract = new web3.eth.Contract(contract.CONTRACT_ABI, contract.CONTRACT_ADDRESS);

const account = "0xb32fB0aE376a5f2A838E1B79901d623b44B209C4";

const privateKey = new Buffer('be399f4b4214a0ae5252ed011dffc63f8a69d078963d2139453508c1cbf9bc86');

module.export = {
    TestContract,
    account,
    privateKey,
    contract
}
