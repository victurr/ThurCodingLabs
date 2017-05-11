function StringSplosion(aString) {
    this.aString = aString;
  }
  StringSplosion.prototype.manipulate = function(){
    var anArray = [],
    str = this.aString.slice(),
    result = [];
    anArray.push(str);

    for(var i = 0; i <= str.length +3; i++){
        str = str.slice(0, -1);
        anArray.push(str);
    }

    for(var i = anArray.length; i > -1; i--){
      result.push(anArray[i]);
    }
    
    str = result.join('');
    return str;
  }
