const { Web3 } = require("web3")
const web3 = new Web3('https://sepolia.blast.io')
const userController = require('./userController');

const USDC_ADDRESS = "0xda9C093a7D9e41d21Dc9A7ff5601A3FD02111d95"
const USDT_ADDRESS = "0x7Cb0C805544C5BA83A6e014A9e199E1C8ed16137"
const IGNITE_ADRESS = "0xA843520d406cfF0D648E4F6B6833C987ccB9Ef14"
const ADDRESS = "0x4f19b886C5Cc4ac9Ca32596D2bBCf760928703B8";

const TRANSACTION_COUNT = 30n;

    // currentTime = new Date();
    // hours = currentTime.getHours();
    // minutes = currentTime.getMinutes();
    // seconds = currentTime.getSeconds();
    // console.log(`The current time is ${hours}:${minutes}:${seconds}`);

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

async function findBlockForTransactionCount(address, targetCount, fromBlock, toBlock) {
    let counter = 0;
    console.log(`FROM: ${fromBlock}| TO ${toBlock}`)
    while (fromBlock <= toBlock) {
        const midBlock = BigInt((fromBlock + toBlock) / 2n);
        //console.log(`MID: ${midBlock}`)
        let txCount;
        try {
             txCount = await web3.eth.getTransactionCount(address, midBlock);
        } catch (error) {
            console.log(`MB: ${midBlock}`)
            console.log(`!!!!ERROR: ${error}`)
        }

 
        if (txCount < targetCount) {  
            fromBlock = midBlock + 1n;
        } else { 
            toBlock = midBlock - 1n; 
        }
        counter +=1; 
    }
    console.log(counter)
    return fromBlock;
}

async function getLastNTransactionBlocks(address, n) {
    const latestBlock = await web3.eth.getBlockNumber();
    const latestTxCount = await web3.eth.getTransactionCount(address, latestBlock);
    const lBlock = await findBlockForTransactionCount(address, latestTxCount, 
        0n, latestBlock);

    const blocks = [];
    for (let i = 0n; i < n; i++) {
        const targetTxCount = latestTxCount - (n - i - 1n);
        const block = await findBlockForTransactionCount(address, targetTxCount, 
            blocks.length!=0? blocks[blocks.length - 1] + 1n : 0n, lBlock);
        console.log(`Block: ${block}`)
        blocks.push(block); 
    }

    return blocks;
}

async function getBalancesForBlocks(address, blocks) {
    const balances = [];
    for (const block of blocks) {
        const ba = await web3.eth.getBalance(address, block)
        const balance = web3.utils.fromWei(ba, "ether");
        const timestamp = (await web3.eth.getBlock(block)).timestamp
        //  var date = new Date(Number(timestamp) * 1000);
        // date.ge
        // // Hours part from the timestamp
        // // var hours = date.getHours(); 

        // // // Minutes part from the timestamp
        // // var minutes = "0" + date.getMinutes();

        // // // Seconds part from the timestamp
        // // var seconds = "0" + date.getSeconds();

        // // // Will display time in 10:30:23 format
        // // var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

        console.log(`BAL: ${balance}`)
        balances.push({"bal":balance.toString().substring(-1),"time": Number(timestamp) * 1000});
    }
    return balances;
}

async function getETHHistory (address/*, token*/) {
 
    //const ballances = []
    //web3.eth.getBalance(address, )

    // let currentTime = new Date();
    // let hours = currentTime.getHours();
    // let minutes = currentTime.getMinutes();
    // let seconds = currentTime.getSeconds();
    // console.log(`The current time is ${hours}:${minutes}:${seconds}`);
    // for(let i = firstBlock; i < lasBlock; i++){
    //     ballances.push((await web3.eth.getBalance(address, i)).toString().substring(-1))
    // }
    
//     web3.eth.getTransactionCount(ADDRESS, 	2343544n)
// .then(console.log);
    const blocks = await getLastNTransactionBlocks(ADDRESS, TRANSACTION_COUNT);
    const balances = await getBalancesForBlocks(ADDRESS, blocks);

    console.log('Blocks:', blocks);
    console.log('Balances:', balances);
    // return data.result;
    // console.log(curBlock)
    // console.log(firstBlock)

    return balances
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