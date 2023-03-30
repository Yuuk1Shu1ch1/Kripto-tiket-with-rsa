function generateKeys() {
    const p = getRandomPrime();
    const q = getRandomPrime();
    const n = p * q;
    const phi = (p - 1) * (q - 1);
    let e = 2;
    while (gcd(e, phi) !== 1) {
      e++;
    }
    const d = modInverse(e, phi);
    return {
      publicKey: [e, n],
      privateKey: [d, n],
    };
  }
  
  function getRandomPrime(max) {
    let isPrime = false;
  let num;
  
  while (!isPrime) {
    num = Math.floor(Math.random() * max) + 1;
    isPrime = true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
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
  
  function modInverse(a, m) {
    let m0 = m;
    let x0 = 0;
    let x1 = 1;
    let temp;
 
    if (m === 1) {
        return 0;
    }
 
    while (a > 1) {
        // q adalah hasil pembagian a dengan m
        let q = Math.floor(a / m);
        temp = m;
 
        // m adalah sisa pembagian a dengan m
        m = a % m;
        a = temp;
 
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

  function encrypt(message, publicKey) {
    const [e, n] = publicKey;
    const encryptedMessage = message.split('').map(char => {
      const charCode = char.charCodeAt(0);
      const encryptedCharCode = modExp(charCode, e, n);
      return String.fromCharCode(encryptedCharCode);
    }).join('');
    return encryptedMessage;
  }
  
  function decrypt(encryptedMessage, privateKey) {
    const [d, n] = privateKey;
    const decryptedMessage = encryptedMessage.split('').map(char => {
      const charCode = char.charCodeAt(0);
      const decryptedCharCode = modExp(charCode, d, n);
      return String.fromCharCode(decryptedCharCode);
    }).join('');
    return decryptedMessage;
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
  export {
    generateKeys,
    encrypt,
    decrypt,
    gcd,
    getRandomPrime,
    modInverse,
    modExp
  };    