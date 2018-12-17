
export function reverseString(string) {
  if (typeof string !== "string") throw new Error('Please submit a String');

  let reversedString = "";

  for (let i = string.length; i > 0; i--) {
    reversedString += string[i - 1];
  }

  return reversedString
}
