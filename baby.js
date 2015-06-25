var result = 0;
var numbers = process.argv;

for (x = 2; x < numbers.length; x++){
	result += Number(numbers[x]);
}

console.log(result);
