const Blockchain = require('./Blockchain');
const write_blockchain = require('./write_blockchain');

const blockchain = new Blockchain();

blockchain.create_genesis_block();

write_blockchain(blockchain);
