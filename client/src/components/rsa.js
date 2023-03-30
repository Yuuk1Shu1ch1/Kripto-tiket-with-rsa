  function isPrime(num){
    if(num <= 1){
      return false
    }
    else if(num === 2 || num === 3){
      return true;
    }
    else if(num % 2 === 0 || num % 3 === 0){
      return false;
    }
    else{
      for(let i = 4; i < Math.sqrt(num); i++){
        if(num % i === 0){
          return false;
        }
      }
    }
    return true;    
  }
  
  function getRandomPrime() {
    let num;
    num = Math.floor(Math.random() * 16) + 1;
  
    while (!isPrime(num)) {
        num = Math.floor(Math.random() * 16) + 1;
    }
    return num;
    // generate random prime number
  }
  
  function gcd(a, b) {
    if (b === 0) {
        return a;
      } else {
        return gcd(b, a % b);
      }
    // calculate greatest common divisor
  }
  
  function modInverse(e, phi) { //a, m
    let m0 = phi;
    let x0 = 0;
    let x1 = 1;
    let temp;
 
    if (phi === 1) {
        return 0;
    }
 
    while (e > 1) {
        // q adalah hasil pembagian a dengan m
        let q = Math.floor(e / phi);
        temp = phi;
 
        // m adalah sisa pembagian a dengan m
        phi = e % phi;
        e = temp;
 
        temp = x0;
        x0 = x1 - q * x0;
        x1 = temp;
      }
 
      if (x1 < 0) {
        x1 += m0;
      }
 
      return x1;
        // calculate modular inverse
  }

  function modExp(a, b, n) {
    if (n === 1) {
        return 0;
      }
      
      let result = 1;
      a = a % n;
      
      while (b > 0) {
        if (b % 2 === 1) {
          result = (result * a) % n;
        }
        
        b = Math.floor(b / 2);
        a = (a * a) % n;
      }
      
      return result;
    // calculate modular exponentiation
  }

  function encrypt(message, publicKey) {
    const [e, n] = publicKey;
    let encryptedMessage = message.split('').map(char => {
      let charCode = parseInt(char);
      let encryptedCharCode = modExp(charCode, e, n);
      return encryptedCharCode.toString();
    }).join('');
    return encryptedMessage;
  }
  
  function decrypt(encryptedMessage, privateKey) {
    const [d, n] = privateKey;
    let decryptedMessage = encryptedMessage.split('').map(char => {
      let charCode = parseInt(char);
      let decryptedCharCode = modExp(charCode, d, n);
      return decryptedCharCode.toString();
    }).join('');
    return decryptedMessage;
  }
  
  export {
    encrypt,
    decrypt,
    gcd,
    getRandomPrime,
    modInverse,
    modExp
  };    