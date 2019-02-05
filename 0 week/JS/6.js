const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let output = '';

for(let i = 0; i < input.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if(input[i].toLowerCase() === vowels[j]){
      output += vowels[j].toUpperCase();
      if(vowels[j] === 'u' || vowels[j] === 'e'){
       output += vowels[j].toUpperCase();
      }
      break;
    }
  }
}

console.log(output);
