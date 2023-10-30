// Remove any non-alphanumeric characters and convert the string to lowercase to make the comparison case-insensitive.
// Use two pointers, one starting from the beginning of the string and the other from the end.
// Compare the characters at these two pointers. If they are equal, move the pointers toward each other. If they are not equal, the string is not a palindrome.
// Repeat this process until the two pointers meet in the middle, or until you find a mismatch.

function palCheck(test) {
	test = test.toLowerCase();
	for (let i = 0; i <= test.length; i++) {
	let start = test[i];
	let end = test.slice(-1);{
		if (start === end) {
			return "is palindrome";
		}
      }
	}
}
console.log(palCheck("I AM DONE"));
