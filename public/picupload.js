$(document).ready(function() {

    $("#uploaded-image").on("click", function(){
        var data = {}
        var img = $(this)[0].lastChild
        data.image = $(img).attr("value")

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
           var parsedData = JSON.parse(data)
           var img_str = '<img value=' + parsedData + ' src="images/' + parsedData + '">'
           console.log(img_str)
           $("#uploaded-image").append(img_str);

            //data is the file name
            //img src images/file_name
            //append this image to the front page with the class of button
          }
        });
    })

})

