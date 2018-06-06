const PepperDBToken = artifacts.require("PepperDBToken");

contract('PepperDBToken', function(accounts){

  it("should put 10000000000000000 PDT in the first account", function() {
    return PepperDBToken.deployed().then(instance => {
      return instance.balanceOf(accounts[0]);
    }).then(balance => {
      assert.equal(balance.valueOf(), '10000000000000000', "10000000000000000 wasn't in the first account");
    })
  })

  it("transfer from accounts[0] to accounts[1]", function() {
    var PDT
    return PepperDBToken.deployed().then(instance => {
      PDT = instance
      PDT.transfer(accounts[1], 2000)
      return PDT.balanceOf(accounts[0]).valueOf()
    }).then( balance => {
      assert.equal(balance, '9999999999998000');
      return PDT.balanceOf(accounts[1]).valueOf()
    }).then( balance => {
      assert.equal(balance, '2000');
      PDT.transfer(accounts[1], '1111')
      return PDT.balanceOf(accounts[0]).valueOf()
    }).then( balance => {
      assert.equal(balance, '9999999999996889')
    })
  })
})
