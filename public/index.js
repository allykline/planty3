//document.ready
$(document).ready(function() {
    
<<<<<<< HEAD
	$("button").click(function(){
		var data = {}
		data.image = $(this).val();
		console.log(data)

		$.ajax({
			type: 'POST',
			data: JSON.stringify(data),
	        contentType: 'application/json',
	        url: 'http://localhost:8080/endpoint',						
	        success: function(data) {
	            console.log('success');
	            var parse = (JSON.parse(data));
	            var morgan = (parse.images[0].classifiers[0].classes);	
	            console.log(morgan)
				$("#watson").append(JSON.stringify(morgan));	


	        }
	   
	    });


	})

	





=======
>>>>>>> 5880b1972342f15a72f2e94318d894b414b4e7e9



})


//first iteration: 
//create an object literal with some data
//send the json version of that data to ajax to your endpoint
// on success, console.log the data you receive back
 // $('#select_link').click(function(e){
 //    e.preventDefault();
 //    console.log('select_link clicked');
	// }
	


//second iteration
//make the above work on a specific button click

//third iteration
// pass in a value via button or form to the jquery and catch it and then bundle it up and send it to ajax
