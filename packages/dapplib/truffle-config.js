require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind hour hunt brick fold spring'; 
let testAccounts = [
"0x225fd0a937f228101145a3d3170ef594b00fa37243fdbb401a3475c3da301c9a",
"0xcbde320236ffc68509b277cafbbb3d6706c20371ccea340758a7530ad1451a38",
"0x3549d54ba8e8ecd56700b14eeafda3a71591613b4515cc28c46315b00236da7e",
"0xbabca7b2535b7c82220e48de49bd5114bd606133bf6220cb940c8e5684e0990d",
"0xfd42fbb078a1085256738bc16e5c4b8c27f0306c233c2916272094b1f3028f0f",
"0x479f7e911567f6da2c346195d0f04ac3e1bbc955dd9f050954dc8031f0e866c6",
"0x5b551e44515e0dc00c2af91aa37dc16c4ff6f61724e947d066da1e5187cab8bc",
"0x671d35bdeefae8f57da874b249cb84594f7654a50019ceed63156a926b4c9c1d",
"0x9a938b8d8e2a2ca24ae4eb52298dcc58d26bebea4c54a28c575aa1de02c3afed",
"0x1974a6c6d017f27b2149fa4ce9758c7a5089645d29794887cdfca304082491de"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
