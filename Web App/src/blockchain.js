import Web3 from 'web3';
import CorkToken from './contracts/TheWineGame.json';

const contractAddress = "0x53C3e9F98c3d5bA18c6154298B26Da139a9bFC25";

let web3 = undefined
let account = undefined
let contract = undefined

export async function initWeb3() {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      return true;
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
      return true;
    }

    return false;
}

export function isWeb3Ready() {
    return web3 !== undefined
}

export async function connectToBlockchain() {
    const accounts = await web3.eth.getAccounts()

    contract = new web3.eth.Contract(CorkToken.abi, contractAddress)
    account = accounts[0]
}

export function isConnectedToBlockchain() {
    return contract !== undefined && account !== undefined
}

export function claimCork(guests, title, beverage_barcode_data, beverage_brand, beverage_name) {
    return contract.methods.claim(
        guests,
        title,
        beverage_barcode_data,
        beverage_brand,
        beverage_name
    ).send({
        from: account, 
        value: Web3.utils.toWei('10', 'finney')
    })
}