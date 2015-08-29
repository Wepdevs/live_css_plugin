
var inDialog = false;

$(document).ready(function(){

var dialog = $("#LiveCss");


});







$(document).click(function(e){

    if($(e.target).prop('id') != "LiveCssOn"){
        if($(e.target).parents('#LiveCss').length == 0){

                $("#cssclass span").remove();
                $("#cssid span").remove();

                $classToAdd = $( "<span>" + $(e.target).prop('class')  + "</span>" );
                $idToAdd = $( "<span>" + $(e.target).prop('id')  + "</span>" );

                $("#cssclass").append($classToAdd);   //text($(e.target).prop('class'));
                $("#cssid").append($idToAdd);      //text($(e.target).prop('id'));

                toChange = $(e.target);
            }
    }


    $("#SetCss").click(function(){

            console.log('setting css prop');

            toChange.css($("#prop").prop('value'),$("#value").prop('value'))


    });

});



$("#LiveCssOn").click(function(){

    if(!inDialog){
        $( "#LiveCss" ).dialog();
    }
});




$(function() {

    $( "#LiveCss" ).html("<div id=\"cssclass\">Class: </div>"+
                                      "<div id=\"cssid\">Id: </div>"+
                                  "<div id=\"dialogForm\">"+
                                    "  <form>"+
                                     "    <div class=\"formDiv\">"+
                                      "       <label>Property</label>"+
                                        "     <input type=\"text\" id=\"prop\" name=\"prop\">"+
                                        " </div>"+
                                         " <div class=\"formDiv\">"+
                                          "    <label>Value</label>"+
                                           "   <input type=\"text\" id=\"value\" name=\"value\">"+
                                         " </div>"+
                                         " <div class=\"formDiv\">"+
                                          "    <input id=\"SetCss\" type=\"button\" value=\"Set\">"+
                                         " </div>"+
                                      "</form>"+
                              "</div>");
  });


