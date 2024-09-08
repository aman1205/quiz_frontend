export const generatePassword = () => {
  const length = 10;
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChar = "@"; 

  let password =
    upperCase.charAt(Math.floor(Math.random() * upperCase.length)) +
    lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)) + 
    specialChar + // Special character '@'
    numbers.charAt(Math.floor(Math.random() * numbers.length)); 

  const remainingChars = lowerCase + upperCase + numbers;
  for (let i = 4; i < length; i++) {
    password += remainingChars.charAt(Math.floor(Math.random() * remainingChars.length));
  }

  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

