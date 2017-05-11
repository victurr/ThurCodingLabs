function reverseString(aString) {
  if(aString == ''){return null;}
  var anArray = aString.split(""),
  result = [];
  for(var i = anArray.length; i > 0; i--){
    result.push(anArray[i-1]);
  }
  result = result.join("");
  if(result == aString){return true;}
  return result;
}
