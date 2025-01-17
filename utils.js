import {ethers} from "ethers";
import 'dotenv/config';

const getProvider = (mainnet = false) => {
    const providerURL = mainnet ? "http://10.0.0.38:8545" 
    : process.env.INFURA_KEY;

    return new ethers.providers.JsonRpcProvider(providerURL);
}

//const provider = getProvider(true);
//console.log("Provider", await provider.getNetwork());

const generateNewWallet = () => {
    //Wallet Address = 
    const wallet = ethers.Wallet.createRandom();

    console.log("address", wallet.address);
    console.log("mnenomic", wallet.mnemonic.phrase);
    console.log("private Key", wallet.privateKey);
};

const getSigner = (mainnet = false) => {
    const provider = getProvider(mainnet);
    return new ethers.Wallet (
        process.env.PRIVATE_KEY,
        provider
    );
};

//const provider = getProvider();
//const signer = getSigner();
//console.log("signer", (await signer.getBalance()).toString());
//console.log("Provider", await provider.getNetwork());

//generateNewWallet();

export {getSigner, getProvider, generateNewWallet};