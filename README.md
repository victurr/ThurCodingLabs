# ThurCodingLabs

You are to write a function, reverseString(), that returns the reverse of the string argument provided.
If the reverse of the string is the same as the original string, as in the case of palindromes, return true instead.

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(reverseString('misc')).toEqual('csim');
    });

  });

});
 
QUESTION 2:
You are to implement a StringSplosion class whose constructor accepts a string argument.
Your class should contain a manipulate() method.
When an instance of this class invokes the manipulate() method, it returns the sploded version of the string argument, based the following pattern:  phone   returns pphphophonphone
ab      returns aab
like    returns lliliklike

describe(" String splosion", function(){

    it("should manipulate the string", function(){
        var stringSplosion = new StringSplosion("Code");
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
    });

    it("should manipulate the string not return the expected result, 1.", function(){
        var stringSplosion = new StringSplosion("Code");
        var functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
        expect(functionString.indexOf('CCoCodCode')).toBe(-1);
    });

    it("should manipulate a second time", function(){
        var stringSplosion = new StringSplosion("abc");
        expect( stringSplosion.manipulate()).toEqual("aababc");
    });

    it("should manipulate a third time", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("aanandandeandelandela");
    });

     it("should manipulate the string not return the expected result, 2.", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect( stringSplosion.manipulate()).toEqual("aanandandeandelandela");
        expect(functionString.indexOf('aanandandeandelandela')).toBe(-1);
    });
});
