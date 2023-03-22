require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    testnet: {
      // Keep private key secret:
      accounts: ['0xed126f78b1fcf57e4983ca3d22c101449db72bf47b6bd54a49becaf0fcee0a83'],
      url: "https://matic-mumbai.chainstacklabs.com"
    }
  },
  abiExporter: {
    path: "./abi",
    clear: false,
    flat: true,
    pretty: false,
    runOnCompile: true,
  },
};
