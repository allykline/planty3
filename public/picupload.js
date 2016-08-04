$(document).ready(function() {

    $("button").click(function(){
        var data = {}
        data.image = $(this).val();
        console.log(data)
        $("#watson").show();

        
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:8080/endpoint',                      
            success: function(data) {
                console.log('success');
                var parse = JSON.parse(data);
                var morgan = (parse.images[0].classifiers[0].classes);  
                console.log(morgan);
                for (var i = 0; i < morgan.length; i++) {
                    var current = morgan[i];
                    var clas = current.class;
                    var type;
                    if ("type_hierarchy" in current) {
                        type = current.type_hierarchy;
                    }
                    //.show to show the watson div
                    $("#giffy").hide();
                    $("#watson").append("<div>" + "<b>" + clas  + "</b>" + ": " + type + "</div>"); 
                }
                //to iterate through morgan through all the objects
                //  get the value from the key class of the object that you are currently on and save it to a variable
                //  check if type_hierarchy exists (you will have to look up how to check if a key in an object literal exists)
                //      if it exists, get the value and save to a variable
                //  use the two variables to append in whatever format you want       
                }
            })
        })






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
                $("#watson-upload").append(JSON.stringify(morgan));   
                //to iterate through morgan through all the objects
                //  get the value from the key class of the object that you are currently on and save it to a variable
                //  check if type_hierarchy exists (you will have to look up how to check if a key in an object literal exists)
                //      if it exists, get the value and save to a variable
                //  use the two variables to append in whatever format you want
                 
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
           var img_str = '<img value=' + data + ' src="images/' + data + '">'
           console.log(img_str)
           $("#uploaded-image").append(img_str);

            //data is the file name
            //img src images/file_name
            //append this image to the front page with the class of button
          }
        });
    })

})

