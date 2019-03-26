var inputNum = parseInt(process.argv[2]);
var sum = 0;

for (var i = 6; i <= inputNum ; i += 6){
	sum += i;
}

console.log(sum);