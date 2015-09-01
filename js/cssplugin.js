
var inDialog = false;

$(document).ready(function(){

 var dialog = $("#LiveCss");


    $("#SetCss").click(function(){

        if($("#currentclass").text() != ""){
             var currentBefore = $("#current").val();

            console.log('setting css prop');
            toChange.css($("#prop").prop('value'),$("#value").prop('value'));
            $("#current").val(toChange.css($("#prop").prop('value')));

            if(currentBefore == $("#current").val()){
                $("#error").text("Value not acceptable!");
            }
            else{
               $("#error").text("");
               $("#SetCss").prop('disabled','true');
            }
        }
    });
});


$(document).click(function(e){

    if($(e.target).prop('id') != "LiveCssOn"){
        if($(e.target).parents('.ui-dialog').length == 0){

                $("#cssclass span").remove();
                $("#cssid span").remove();

                $classToAdd = $( "<span id='currentclass'>" + $(e.target).prop('class')  + "</span>" );
                $idToAdd = $( "<span id='currentid'>" + $(e.target).prop('id')  + "</span>" );

                $("#cssclass").append($classToAdd);   //text($(e.target).prop('class'));
                $("#cssid").append($idToAdd);      //text($(e.target).prop('id'));

                toChange = $(e.target);
            }
    }
});



$("#LiveCssOn").click(function(){

    if(!inDialog){
        $( "#LiveCss" ).dialog();
    }
});


$( "#LiveCss" ).bind('keyup', function() {

    if($("#currentclass").text() != ""){
        var scelta = $("#currentclass").text();
        var prop = $('#prop').val();
        $("#current").val($("." + scelta).css(prop));


        $("#SetCss").removeAttr('disabled');
    }
});



/*
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

*/
