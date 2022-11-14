require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const hardhat_epc = process.env.HARDHAT_LOCAL_RPC;
const GOERLI_RPC = process.env.GOERLI_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY_G;
const ETHERSCAN_API = process.env.ETHERSCAN_API;

module.exports = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url: hardhat_epc,
      port: 31337,
    },
    Goerli: {
      url: GOERLI_RPC,
      accounts: [PRIVATE_KEY],
      port: 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
  scripts: {
    test: "hardhat test",
  },
};
