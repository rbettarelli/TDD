const alphabet = "abcdefghijklmnopqrstuvwxyz ";
const shuffled = "fsmnhrtvqiyacuzgpxbkjwolde*";


const isUpperCase = (char) => {
    if (typeof char === 'string' && char === char.toUpperCase() && char !== char.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  };

const singleLowerCipher = (char) => {
  const index = alphabet.indexOf(char);
  let suffered = shuffled[index];

  return suffered;
};

function caesarCipher  (string)  {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
     if (isUpperCase(string[i])) {
        newString += singleLowerCipher(string[i].toLowerCase())
      
    } else {
      newString += singleLowerCipher(string[i]);
    }
  }
  return newString;
}



export default caesarCipher;
