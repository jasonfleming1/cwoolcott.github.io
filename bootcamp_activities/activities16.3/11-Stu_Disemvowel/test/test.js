var expect = require("chai").expect;
var disemvowel = require("../disemvowel");

describe("Disemvowel Test" ,function(){
    it("Should Remove vowels from a lowercase string", function(){
        expect(disemvowel("this is lowercase")).to.equal("ths s lwrcs");
    });
    it("Should Remove vowels from a UPPERCASE string", function(){
        expect(disemvowel("UPPERCASE")).to.equal("PPRCS");
    });
    it("Should Remove vowels from a string", function(){
        expect(disemvowel("12345")).to.equal("12345");
    });


})