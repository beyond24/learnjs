// alert('hello')
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
foo(1);

function bubble_sort(array) {
	for (var i = 0; i < array.length-1; i++) {
		for (var j = 0; j < array.length-1-i; j++) {
			if (array[j] > array[j+1]) {
				var temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	return array;
}
	



var a = [1, 32, 4, 13, 54];
bubble_sort(a);
console.log(a)


function getsum(num1, num2) {
	var sum = 0;
	for (var i=num1; i<=num2; i++) {
		sum += i;
	}
	return sum;
}

console.log(getsum(1, 10));
console.log(getsum(3, 6));
