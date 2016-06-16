console.log("hello from clientapp");
var operation ="add";
$('document').ready(function() {

  $('#calculateButton').on('click',function(){
    var x = $('#xInput').val();
    var y = $('#yInput').val();
    var calculateObject = {
      "x":x,
      "y":y,
      "operation":operation
    };//end calculateObject
  });//end calculateButton function


    $('#addItUp').on('click', function(){
    console.log("I added it up");
      operation="add";
    });
    $('#takeItOut').on('click', function(){
      console.log("I took it away");
      operation="subtract";
    });
    $('#timesIt').on('click', function(){
      console.log("HOW MANY TIMES??");
      operation="multiply";
    });
    $('#tearUsApart').on('click', function(){
      console.log('Joy Division');
      operation="divide";
    });//end Fancy button actions


var theBigAnswer = function(answer){
  console.log("in the BIG ANSWER" + answer);
  var putAnswerHere = document.createElement('p');
  $('.answer').append(putAnswerHere);
};//end theBigAnswer

var sweetAjaxWonder = function(sendAnswer){
  console.log('in sweet ajax - ' + sendAnswer.operation);

  $.ajax({
      url: "/pathPost",
      type: "POST",
      data: sendAnswer,//?????
      success: function( data ){
        console.log("You are a success!!!" + data);
      },// success is OVER.no more success for you.
      error: function(){
        console.log('this is very disappointing');
      }//end error
    }); // end ajax request
  };//end sweetAjaxWonder
});//end document ready
