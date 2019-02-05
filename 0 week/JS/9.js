let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

// storyWords.forEach(word => console.log(word.length));

const betterWords = storyWords.filter(word => {
   if(unnecessaryWords.some(bad => bad === word)){
       return false;
   } else{
     return true;
   }
});

/*console.log(betterWords.every(word => 
  word !== 'extremely' && word !== 'literally' && word !== 'actually'));*/

const sum = overusedWords.forEach(word => {
    /* let count = 0;
     storyWords.forEach(word1 => (word === word1) ? count++ : word)
    console.log(count);*/
    const arr = storyWords.filter(word1 => word === word1)
    console.log(arr.length);
});

let sumSentences = 0;

storyWords.forEach(element => {
  if(element[element.length - 1] == '.' || element[element.length - 1] == '!')
    sumSentences++;
});

console.log(sumSentences);

const str1 = betterWords.reduce((first, second) => first + ' '  + second);

console.log(str1);