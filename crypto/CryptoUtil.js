const crypto = require('crypto');
const sign = crypto.createSign('RSA-SHA256');
class CryptoUtil{
    constructor(){}

    
    encrypt(data, key){
        return crypto.publicEncrypt(key, Buffer.from(data)).toString('base64');
    }

    decrypt(encrypted, key){
        return crypto.privateDecrypt(key, Buffer.from(encrypted,'base64'));
    }

}
module.exports = CryptoUtil;