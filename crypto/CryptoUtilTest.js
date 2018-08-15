let CryptoUtil = require('./CryptoUtil');
let keys = require('./key');
let cryptoUtil = new CryptoUtil();


const plainText = "will z kkdfkkd";

let crypted01 = cryptoUtil.encrypt(plainText, keys.pubKey);

console.log(crypted01);

let decrypt = cryptoUtil.decrypt(crypted01, keys.privKey);

console.log(decrypt.toString());





