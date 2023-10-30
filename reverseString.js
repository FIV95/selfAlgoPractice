// given a string reverse a string

function reverseStr(string){
      let newstring = ''
      let endpoint = string.length;
      for (let i = 0; i <endpoint;i++){
            let storedcharacter = string.slice(-1)
            string = string.slice(0, -1)
            newstring += storedcharacter
      } return newstring
}
console.log(reverseStr('beso'))

// function reverseStr(string) {
//       const characters = string.split(''); // Convert the string into an array of characters
//       const reversedArray = characters.reverse(); // Reverse the array
//       const reversedString = reversedArray.join(''); // Join the array back into a string
//       return reversedString;
//     }
