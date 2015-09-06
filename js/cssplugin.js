
var inDialog = false;

var justSet = {
    value: "",
    prop: "",
    class: "",
    set: function(v,p,c){
        this.value = v;
        this.prop = p;
        this.class = c;
    }
}


$(document).ready(function(){

 var dialog = $("#LiveCss");


    $("#SetCss").click(function(){

        if($("#currentclass").text() != ""){
            var currentBefore = $("#current").val();

            if(justSet.value == $("#value").prop('value') && justSet.prop == $("#prop").prop('value') && justSet.class == toChange.prop('class')) {
                console.log('You\'ve set the same old value baby!');
            }
            else{
              console.log('setting css prop');
              toChange.css($("#prop").prop('value'),$("#value").prop('value'));
              $("#current").val(toChange.css($("#prop").prop('value')));
              justSet.set($("#value").prop('value'),$("#prop").prop('value'),toChange.prop('class'));

              if(currentBefore == $("#current").val()){
                  $("#error").text("Non acceptable value!");
              }
              else{
                 $("#error").text("");
                 $("#SetCss").prop('disabled','true');
              }
            }
        }
    });
});


$(document).click(function(e){

    if($(e.target).prop('id') != "LiveCssOn"){
        if($(e.target).parents('.ui-dialog').length == 0){

                $("#prop").removeAttr('disabled');
                $("#value").removeAttr('disabled');

                $("#cssclass span").remove();
                $("#cssid span").remove();

                $classToAdd = $( "<span id='currentclass'>" + $(e.target).prop('class')  + "</span>" );
                $idToAdd = $( "<span id='currentid'>" + $(e.target).prop('id')  + "</span>" );

                $("#cssclass").append($classToAdd);   //text($(e.target).prop('class'));
                $("#cssid").append($idToAdd);      //text($(e.target).prop('id'));

                toChange = $(e.target);


                if($("#currentclass").text() != ""){
                        var scelta = $("#currentclass").text();
                        var prop = $('#prop').val();
                        $("#current").val($("." + scelta).css(prop));

                        $("#SetCss").removeAttr('disabled');
                }
            }
    }
});



$("#LiveCssOn").click(function(){

    if(!inDialog){
        $( "#LiveCss" ).dialog({

                                     close : function(){
                                         $("#LiveCssOn").show();
                                     },
                                     closeText: "x"
                                 });

        $("#LiveCssOn").hide();
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
