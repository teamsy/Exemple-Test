var promise1 = new Promise(function(resolve, reject) {
	resolve('sucess');
});

promise1.then(function(value) {
	console.log(value);
	console.log(this);
});
