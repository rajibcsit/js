	const paymentSuccess = true;
	const marks = 80;

	function enroll(){

		document.getElementById('demo').innerHTML = "Course enrollment is on progress...";

		const promise = new Promise(function( resolve, reject){

			setTimeout(function(){

				if(paymentSuccess){
					resolve();
				} else{
					reject('payment failed..!');
				}

			},2000);

		});

		return promise;
	}

	function progress(){

		document.getElementById('demo_1') .innerHTML = "Course on progress...";

		const promise = new Promise(function(resolve,reject){

			setTimeout(function(){

				if(marks >= 80){
					resolve();
				} else{
					reject('You could not Enough Marks');
				}

			},3000);


		});

		return promise;
	}

	function getCirtificate(){

		document.getElementById('demo_2') .innerHTML = "Preparing your Cirtificate...!";

		const promise = new Promise(function( resolve){

			setTimeout(function(){

				resolve("Congreat! you got a Cirtificate");

			},1000);
		});

		return promise;
	}

enroll()
	.then(progress)

	.then(getCirtificate)

	.then(function(value){
		document.write(value);
	})

	.catch(function(err){
		document.write(err);
	})

	