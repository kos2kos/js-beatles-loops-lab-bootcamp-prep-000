function theBeatlesPlay(musicians, instruments){
  var temp = [];
  for (var i = 0; i < musicians.length; i++){
   temp[i] = `${musicians[i]} plays ${instruments[i]}`
  }return temp
}
function johnLennonFacts(arg){
  var i = 0
  while(i < arg.length){
    arg[i] = arg[i] + "!!!"
    i++
  }
}