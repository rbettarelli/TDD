const analyzeArray = (array) => {
    if(!validArray(array)){
        console.log('is not array')
        return 'is not array'
        
    }else{
        const sum = array.reduce((current, previous) => {
            return current + previous;
          }, 0);
        
          const min = array.reduce((current, previous) => {
            return Math.min(current, previous);
          });
        
          const max = array.reduce((current, previous) => {
            return Math.max(current, previous);
          });
        
          const length = array.length;
        
          const average = sum / array.length;
        
          const analizedArray = {
            average: average,
            min: min,
            max: max,
            length: length,
          };
          
          return analizedArray;
     
    }

    
  
};

const validArray = (array) => {
  if (Array.isArray(array)) {
    for (let item of array) {
      if (typeof item !== "number") {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


export default analyzeArray