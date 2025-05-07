function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

const result1 = formatString("Ahmod"); // Output: "HELLO"
const result2 = formatString("Ahmod", true); // Output: "HELLO"
const result3 = formatString("Ahmod", false); // Output: "hello"
console.log({ result1, result2, result3 });
