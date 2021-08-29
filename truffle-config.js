const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secrets/.wallet").toString().trim();
const apiKey = fs.readFileSync(".secrets/.bscscan").toString().trim();

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: apiKey
  },


  networks: {
     test: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-2-s1.binance.org:8545/'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      networkCheckTimeout: 1500000,
      skipDryRun: true,
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed1.binance.org'),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      networkCheckTimeout: 1500000,
      skipDryRun: true,
    },
  },

  // Compiler configuration
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: false,
           runs: 200
        }
      }
    }
  }
}
