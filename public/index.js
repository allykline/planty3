//document.ready
$(document).ready(function() {
	var data = {};
	data.title = "flower.png";
	data.message = "hello flower";
	
	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:8080/endpoint',						
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
    });

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
