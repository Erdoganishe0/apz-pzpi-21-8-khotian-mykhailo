const { Web3 } = require("web3")
const web3 = new Web3('https://sepolia.blast.io')
const userController = require('./userController');

const USDC_ADDRESS = "0xda9C093a7D9e41d21Dc9A7ff5601A3FD02111d95"
const USDT_ADDRESS = "0x7Cb0C805544C5BA83A6e014A9e199E1C8ed16137"
const IGNITE_ADRESS = "0xA843520d406cfF0D648E4F6B6833C987ccB9Ef14"
const ADDRESS = "0x4f19b886C5Cc4ac9Ca32596D2bBCf760928703B8";


async function getTokenBallance  (address, token, decimals) {
    const responce = await fetch(`https://api-sepolia.blastscan.io/api?module=account&action=tokenbalance&contractaddress=${token}&address=${address}&tag=latest&apikey=YourApiKeyToken`)
    const data = await responce.json();
    return parseFloat(data.result) / Math.pow(10, decimals);
}

async function getEthPrice  () {
    
    const responce = await fetch("https://api-sepolia.blastscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken")
    const data = await responce.json();
    return data? data.result? data.result.ethusd : "3000.00000" : "3000.00001";
}

async function getETHHistory (address/*, token*/) {
    const curBlock = await web3.eth.getBlockNumber()
    const firstBlock = curBlock - 43200n
    //const ballances = []
    //web3.eth.getBalance(address, )
    web3.get
    
        const a = await web3.eth.getBalance(address, i)
        console.log(i)
        console.log(a)

    
    // return data.result;
    console.log(curBlock)
    console.log(firstBlock)

    return ballances
}

async function getTokens() {
    await new Promise(resolve => setTimeout(resolve, 210));
    const ethBall = web3.utils.fromWei(await web3.eth.getBalance(ADDRESS), "ether");
    await new Promise(resolve => setTimeout(resolve, 210));
    const usdcBall = await getTokenBallance(ADDRESS, USDC_ADDRESS, 6)
    await new Promise(resolve => setTimeout(resolve, 210));
    const usdtBall = await getTokenBallance(ADDRESS, USDT_ADDRESS, 6)
    await new Promise(resolve => setTimeout(resolve, 420));
    const igniteBall = await getTokenBallance(ADDRESS, IGNITE_ADRESS, 18)
    await new Promise(resolve => setTimeout(resolve, 110));
    const price = await getEthPrice();

    const resp = {
        "eth": ethBall.toString(),
        "usdt":usdtBall.toString(), 
        "usdc": usdcBall.toString(), 
        "ignite": igniteBall.toString(),
        "ethValue": price? price.toString() : "3010.2301"}

    //console.log(resp)

    return resp
}

const getBalanceHistory = async (req, res) => {

}

const getWalletDetais = async (req, res) => {
    const bal = await getETHHistory(ADDRESS)
    const jsonres = await getTokens()
    const resu = {"values": jsonres, "bal": bal}

    console.log(resu)

    res.json(resu)
}

module.exports = {
    getWalletDetais
}