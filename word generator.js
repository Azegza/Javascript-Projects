// this simple app will generate a word from an array of letters using nested loopes
// first declare a variable and assign an array of letters to it 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// define  the function that will generate the word 
function wordGenerator () {
  // inside the function, the word length needed to declared  by Math.random * 7=> this will generate words with max caracters of  7 char
 // in other words, the wordLength defines the number of iteration untill a condition is met
  // math.random generates a random decimal number between 0=<num<1 so the range of the word will be 0 char => 7 char, to avoid generating words with only 1or 2 letters, we will add +3 to the wordLength variable
  //Math.floor rounds down the number to nearest integer
  const wordLength = Math.floor(Math.random() * 10) + 3;
   // now, we declare a variable the will store the generated word
  let word = ''; // the empty string for storing the word after the iterations
// 
  for (let i =0 ; i < wordLength; i++){ // this outer loop will iterate wordLength times to generate each character of the word
    // now after the number of the char in word is set, the char itself needed to be  brougt from the array to word variable in each iteration
    // to do that we need to declare a variable and assign a random letter for the array using index
    const randomLetter = Math.floor(Math.random() * letters.length);
    // math.random generates  random decimal between 0 and 1, * letter.length will make the value in the range of 0 and the lenght of letters 
  //Math.floor rounds down the number to nearest integer
    word += letters[randomLetter];
  }
  return word;
}
   // to generate the word and output it, call the function and assign it to variable so that it can be log
  const generatedWord = wordGenerator ();
  console.log(generatedWord);

    

    
  }  
  


}
