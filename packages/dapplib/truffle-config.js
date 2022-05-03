require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strike crawl oval company gentle light army gate'; 
let testAccounts = [
"0x6444c57a16c770abffc2992ff08e7d53c9174b3b033d7372c546ffaf1e7e3585",
"0xc4ad7173e80f76aac1cd2be935256b51876ac765db3785198856f28f92bb38cd",
"0x72f26fd11c76323d00f15643f27b8400987630c0dbbb06bf56b89f14ea373b78",
"0x84c357c846877fe5c82e105189fa415fa1abf72f8197a43841e5ad570c9d149e",
"0x5e2aa5a2315ecd022651db6f6e817a15e134fb1ed4dd2d2b67a4777b486008c9",
"0xc130622f63f5e0d718ca9868732e6ac0a4139383469978623864f4273fcb69df",
"0x89b30bfdf9def991169fa484c98156660de30c270eb0db02f12eed6c12f3c756",
"0x0def3271c1d514c7d2dc1782c3e2f6c1c5e6e16021209db5bd90faffcd401a2f",
"0x686d474ccb44a67ab1e077e7bd88a09a0ac5adcc7405ded052ad433c04c6c05b",
"0x59d7722361f3827a0bc5b21b582b2c5f29c4667852ed27613dcd2ab0f9610e8a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


