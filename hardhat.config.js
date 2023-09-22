require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    swisstronik:{
      url:"https://json-rpc.testnet.swisstronik.com/",
      accounts:["ee2e8190b2315c0db6a57a8644c6d4bfbb365016a20f1837c0cb07874ca44274"]
    }
  }
};
