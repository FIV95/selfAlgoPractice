// Write a program that returns a list of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “Fizz Buzz”.

// EXAMPLE: fizz buzz(9) ➞ [1, 2, “Fizz”, 4, “Buzz”, “Fizz”, 7, 8, “Fizz”]

// returning list
// in that list return numbers counting up to target number // if numbers are multiples of 3 or 5 replace words with buzz
// if number is a multiple of both 3 and 5 print Fizz Buzz
// were spitting out numbers until we hit a number thats a multiple of 3 or 5
// we also wanna check if that number is then a multiple of 3 and 5

function fizzbuz(target) {
	let results = [];
	for (let i = 1; i <= target; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			results.push("fizzbuzz");
		} else if (i % 3 === 0) {
			results.push("fizz");
		} else if (i % 5 === 0) {
			results.push("buzz");
		} else {
			results.push(i)
		}
	}
	return results;
}
console.log(fizzbuz(33));


