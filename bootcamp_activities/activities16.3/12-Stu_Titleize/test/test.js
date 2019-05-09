var expect = require("chai").expect;
var titleize = require("../titleize");

describe("Titleize Testd", function() {
    it("Proper capitalize first name and last name", function(){
        expect(titleize("nate olson")).to.equal("Nate Olson")
    });
    it("Proper capitalize titles", function(){
        expect(titleize("mr. pants")).to.equal("Mr. Pants")
    });
    it("Proper title punctuation", function(){
        expect(titleize("Mr Pants")).to.equal("Mr. Pants")
    });
});
