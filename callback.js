const paymentSuccess = true;

const marks = 82;

		function enroll(callback){
			document.getElementById('demo') .innerHTML = "Course enrollment is on progress..";

			setTimeout(function(){

				if (paymentSuccess){

					callback();

				} else {
					document.getElementById('demo_1'). innerHTML = "Payment Failed!";
				}


			},2000);
		}

		function progress(callback){

			document.getElementById('demo_2') .innerHTML = "Course progress on..!";

			setTimeout(function(){

				if( marks >=80){
					callback();
				} else{
					document.getElementById('demo_3').innerHTML = "You could not Enough Marks";
				}

			} , 3000);
		}

		function getCartificate(){

			document.getElementById('demo_4') .innerHTML = "Preparing your Cirtificate...!";

			setTimeout(function(){

				document.getElementById('demo_5') .innerHTML = "Congreat! you got a Cirtificate";

			},1000);
		}
		
		enroll(function(){

			progress(getCartificate);

		});