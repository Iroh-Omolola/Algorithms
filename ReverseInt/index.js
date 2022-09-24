// Algorithm

// Turn the integer to string
// split the string
// Reverse the string
// join the string

const reverseInt = (n) => {
  const reverseNumber = n.toString().split("").reverse().join("");
  return Math.sign(n) * parseInt(reverseNumber);
};
reverseInt(0);
reverseInt(981);
reverseInt(-15);