/*
const ganache = require('ganache-cli');
const assert = require('assert');
const Web3 = require('web3');
const {interface, bytecode} = require('../compile');
const web3 = new Web3(ganache.provider());


let accounts;
let inbox;

beforeEach( async () => {
    //get list of accounts
    accounts = await web3.eth.getAccounts();
    //use one of those accounts to deploy

    //the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data : bytecode, arguments : ['Hi there!']})
    .send({from : accounts[0], gas : '1000000'});

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });
       
    it('can be a change', async () => {
        await inbox.methods.setMessage('bye').send({ from : accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });

});
*/

const ganache = require('ganache-cli');
const assert = require('assert');
const { interface, bytecode } = require('../compile');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let accounts, inbox;

beforeEach( async () => {

    accounts = await web3.eth.getAccounts();

    inbox = new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data : bytecode, arguments : ['Hi there!']})
        .send({ from : accounts[0], gas : '1000000'});

});

describe ('inbox', () => {
    it('adress control', () => {
        assert.ok(inbox.options.address);
    });

    it('message function unchangable', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });

    it('setMessage function', async () => {
        await inbox.methods.setMessage('bye!!!!!').send({from:account[0]})
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye!!!!!');
    });
});

