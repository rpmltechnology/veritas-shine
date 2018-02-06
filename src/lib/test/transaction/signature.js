const should = require('chai').should();
const expect = require('chai').expect;
import _ from 'lodash'

const pqccore = require('../..');

const {Transaction, Script, PrivateKey, errors} = pqccore
const TransactionSignature = pqccore.Transaction.Signature

describe('TransactionSignature', () => {
  const fromAddress = 'GMTKwHcKuRHLBUu2hvrhess5vRCUuVq8eo';
  const privateKey = '2SRLnpdFnpiqzeAbJXSBoLeCvG65m7ham4N7ZuFuSgRSAmAVQwKDVrJnui3gY4Ywv7ZFVeW5QuFC4oakVAxetMxGVnvEyct';
  const simpleUtxoWith100000Satoshis = {
    address: fromAddress,
    txId: 'a477af6b2667c29670467e4e0728b685ee07b240235771862318e29ddbe58458',
    outputIndex: 0,
    script: Script.buildPublicKeyHashOut(fromAddress).toString(),
    glv: 100000
  };

  const getSignatureFromTransaction = function () {
    const transaction = new Transaction();
    transaction.from(simpleUtxoWith100000Satoshis);
    return transaction.getSignatures(privateKey)[0];
  };

  it('can be created without the `new` keyword', function() {
    this.timeout(20 * 1000)
    const privKey = new PrivateKey(privateKey)
    console.log(privKey.toAddress(), privKey.toPublicKey())
    const signature = getSignatureFromTransaction();
    const serialized = signature.toObject();
    const nonew = new TransactionSignature(serialized);
    expect(nonew.toObject()).to.deep.equal(serialized);
  });
  //
  // it('can be retrieved from Transaction#getSignatures', () => {
  //   const signature = getSignatureFromTransaction();
  //   expect(signature instanceof TransactionSignature).to.equal(true);
  // });
  //
  // it('fails when trying to create from invalid arguments', () => {
  //   expect(() => {
  //     return new TransactionSignature();
  //   }).to.throw(errors.InvalidArgument);
  //   expect(() => {
  //     return new TransactionSignature(1);
  //   }).to.throw(errors.InvalidArgument);
  //   expect(() => {
  //     return new TransactionSignature('hello world');
  //   }).to.throw(errors.InvalidArgument);
  // });
  // it('returns the same object if called with a TransactionSignature', () => {
  //   const signature = getSignatureFromTransaction();
  //   expect(new TransactionSignature(signature)).to.equal(signature);
  // });
  //
  // it('gets returned by a P2SH multisig output', () => {
  //   const private1 = new PrivateKey('6ce7e97e317d2af16c33db0b9270ec047a91bff3eff8558afb5014afb2bb5976');
  //   const private2 = new PrivateKey('c9b26b0f771a0d2dad88a44de90f05f416b3b385ff1d989343005546a0032890');
  //   const public1 = private1.publicKey;
  //   const public2 = private2.publicKey;
  //   const utxo = {
  //     txId: '0000000000000000000000000000000000000000000000000000000000000000', // Not relevant
  //     outputIndex: 0,
  //     script: Script.buildMultisigOut([public1, public2], 2).toScriptHashOut(),
  //     glv: 100000
  //   };
  //   const transaction = new Transaction().from(utxo, [public1, public2], 2);
  //   let signatures = transaction.getSignatures(private1);
  //   expect(signatures[0] instanceof TransactionSignature).to.equal(true);
  //   signatures = transaction.getSignatures(private2);
  //   expect(signatures[0] instanceof TransactionSignature).to.equal(true);
  // });
  //
  // it('can be aplied to a Transaction with Transaction#addSignature', () => {
  //   const transaction = new Transaction();
  //   transaction.from(simpleUtxoWith100000Satoshis);
  //   const signature = transaction.getSignatures(privateKey)[0];
  //   const addSignature = function () {
  //     return transaction.applySignature(signature);
  //   };
  //   expect(signature instanceof TransactionSignature).to.equal(true);
  //   expect(addSignature).to.not.throw();
  // });
  //
  // describe('serialization', () => {
  //   it('serializes to an object and roundtrips correctly', () => {
  //     const signature = getSignatureFromTransaction();
  //     const serialized = signature.toObject();
  //     expect(new TransactionSignature(serialized).toObject()).to.deep.equal(serialized);
  //   });
  //
  //   it('can be deserialized with fromObject', () => {
  //     const signature = getSignatureFromTransaction();
  //     const serialized = signature.toObject();
  //     expect(TransactionSignature.fromObject(serialized).toObject()).to.deep.equal(serialized);
  //   });
  //
  //   it('can deserialize when signature is a buffer', () => {
  //     const signature = getSignatureFromTransaction();
  //     const serialized = signature.toObject();
  //     serialized.signature = new Buffer(serialized.signature, 'hex');
  //     expect(TransactionSignature.fromObject(serialized).toObject()).to.deep.equal(signature.toObject());
  //   });
  //
  //   it('can roundtrip to/from json', () => {
  //     const signature = getSignatureFromTransaction();
  //     const serialized = signature.toObject();
  //     const json = JSON.stringify(signature);
  //     expect(TransactionSignature(JSON.parse(json)).toObject()).to.deep.equal(serialized);
  //     expect(TransactionSignature.fromObject(JSON.parse(json)).toObject()).to.deep.equal(serialized);
  //   });
  //
  //   it('can parse a previously known json string', () => {
  //     const str = JSON.stringify(TransactionSignature(JSON.parse(testJSON)));
  //     expect(JSON.parse(str)).to.deep.equal(JSON.parse(testJSON));
  //   });
  //
  //   it('can deserialize a previously known object', () => {
  //     expect(TransactionSignature(testObject).toObject()).to.deep.equal(testObject);
  //   });
  // });
});
