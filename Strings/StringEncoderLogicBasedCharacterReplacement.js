function duplicateEncode(word){
  word=word.toLowerCase();
  characterOccurance = {}    
  word.split('').forEach(char => { 
  
    if(characterOccurance[char]){ 
       characterOccurance[char] += 1; 
  
     }else{
       characterOccurance[char] = 1;
     }
  })
  
  
  let output = word.split('').map(
                    char => characterOccurance[char] == 1 ? '(' :')' 
                    ).join('');
 
  return output;

}
