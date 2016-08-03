//document.ready
$(document).ready(function() {
    
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

<<<<<<< HEAD
	$("#upload-image").submit(function(){

		$.ajax()
	})

=======
	$("#upload").submit(function(event){
		event.preventDefault();
		var fd = new FormData();    
		fd.append( 'image', $('#image')[0].files[0] );


		$.ajax({
		  url: 'http://localhost:8080/upload',
		  data: fd,
		  processData: false,
		  contentType: false,
		  enctype: 'multipart/form-data',
		  type: 'POST',
		  success: function(data){
		   console.log(data);
		   var img_str = "<img src='images/data'>"
		   $("index.html").append("img_str");

		    //data is the file name
		    //img src images/file_name
		    //append this image to the front page with the class of button
		  }
		});
	})



>>>>>>> f41b3b7decf332aeddbffc379c8f1877fc721391





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
