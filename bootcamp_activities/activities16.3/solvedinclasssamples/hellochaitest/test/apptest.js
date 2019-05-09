const assert = require('chai').assert;
const sayHello = require('../app').sayHello;


describe('Say Hello', function(){
    it('Say Hello function should say Hello', function(){
        var result = sayHello();
        assert.equal(result, "hello tom")
    })
    it('Say Hello function should be a string', function(){
        var result = sayHello();
        assert.typeOf(result, "string")
    })
});

