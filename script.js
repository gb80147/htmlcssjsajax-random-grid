
function generateSquare(){

  var box = $(".box");

  $.ajax({

    url: "https://www.boolean.careers/api/random/int",
    method: "GET",
    success: function(data, state){

      if (data.success == true && box.length < 36 ) {

        var rnd = data.response;

        var data = {
          testo: rnd
        }

        if (rnd >= 5) {
          data.class = "yellow";
        }else{
          data.class = "green";
        }

        var template = $("#template").html();
        var compiled = Handlebars.compile(template);
        var finalHTML = compiled(data);

        var boxCont = $(".boxContainer");
        boxCont.append(finalHTML);
      }
    },
  })
}

function init(){

$("#btn").click(generateSquare);
}

$(document).ready(init);
