$(document).ready(function() {

    // var bannerImage = document.getElementById('bannerImg');
    // var result = document.getElementById('res');
    // var img = document.getElementById('tableBanner');

    // bannerImage.addEventListener('change', function() {
    //     var file = this.files[0];
    //     if (file.type.indexOf('image') < 0) {
    //         res.innerHTML = 'invalid type';
    //         return;
    //     }
    //     var fReader = new FileReader();
    //     fReader.onload = function() {
    //         img.src = fReader.result;
    //         localStorage.setItem("imgData", getBase64Image(img));
    //     };
        
    //     fReader.readAsDataURL(file);
    // });

    // function getBase64Image(img) {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;
        
    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0);
        
    //     var dataURL = canvas.toDataURL("image/png");
        
    //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // }

    // function fetchimage () {
    //     var dataImage = localStorage.getItem('imgData');
    //     img.src = "data:image/png;base64," + dataImage;
    // }

    // Call fetch to get image from localStorage.
    // fetchimage();
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
                var parse = (JSON.parse(data));
                var morgan = (parse.images[0].classifiers[0].classes);  
                console.log(morgan);
                for (var i = 0; i < morgan.length; i++) {
                    var current = morgan[i];
                    //{class: "something", score: "something", type_hierarchy: "something"}
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
       
        });
    })

})

