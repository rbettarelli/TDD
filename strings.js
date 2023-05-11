
function captalize (string) {
   
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverse (string) {
 
    const captalized = captalize(string)
    return captalized.split('').reverse().join('');
 
}


export {captalize, reverse} 

