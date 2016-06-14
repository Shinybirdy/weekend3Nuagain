console.log("hello from clientapp");

$(document).ready(function() {
  $('#doTheMath').on('click', function(){
    console.log("CLICK!!!");
  });
  $('#calculateButton').on('click',function(){
    var x = $('#xInput').val();
    var y = $('#yInput').val();
    var inputObject = {
      "x":x,
      "y":y,
      "operation":operation
    };
    var operation ="add";
    $('#addItUp').on('click', function(){
      operation="addItUp";
    });
    $('#takeItOut').on('click', function(){
      operation="takeItOut";
    });
    $('#timesIt').on('click', function(){
      operation="timesIt";
    });
    $('#tearUsApart').on('click', function(){
      operation="tearUsApart";
    });
  });
});
//      $.ajax({
//        url: "/calculateModule",
//        type: "POST",
//        data: inputObject,//?????
//        success: function( data ){
//          $('#button').click(function(){
//            console.log( 'in createProject success' );
//           // console.log( response );
//           // $('#clickProjectButton').empty(calculateModule);
//           // $('#clickProjectButton').append(calculateModule);
//           // $('#clickProjectButton').append('<br><button id="assignStaff">Assign Staff</button>');
//           //
//           //
//           //
//           }); // end click function
//         }, // end success function
//        statusCode: {
//           404: function(){
//              alert( 'error connecting to server' );
//           } // end 404
//          } // end statusCode
//        }); // end ajax request
// });//end document ready$( function() {
//   console.log("HEY, it's clienytapp - Ajax!");
//
//
//   $(document).ready(function(){
//
// $('#clear').on('click', clearCalc);
// $('#add').on('click', function(event){
//  event.preventDefault();
//  var x = $('#x').val();
//  var y = $('#y').val();
//
//  var data = {
//    x: x,
//    y: y,
//    type: $(this).attr("id")
//  };
// calculate(data);
// });
// });
//
// function calculate(data){
// $.ajax({
//   type: 'POST',
//   url: '/calculate',
//   data: data,
//   success: function(response){
//     //put some stuff here update DOM with response.
//   }
// });
// }
// //$('#clear').on('click', clearCalc);
//
// $('#calc-form').on('submit', function(event) {
//   console.log('form');
//   event.preventDefault();
//   var values = {};
//
//   var fields = $(this).serializeArray();
//   fields.forEach(function(field, i) {
//     values[field.name] = field.value;
//   });
//
//   if(values.x === '' || values.y === ''){
//     alert("Please enter two numbers!");
//   } else {
//     sendCalc(values);
//   }
//
// });
//
// function sendCalc(val) {
//   // $.ajax({
//   //   type: 'POST',
//   //   url: '/calc/' + val.op,
//   //   data: val,
//   //   success: updateDOM
//   // });
//
//   // shorthand version
//   $.post('/calc/' + val.op, val, updateDOM);
// }
//
// function updateDOM(result) {
//   // convert to number
//   var answerNum = parseInt(result.answer);
//   if(answerNum < 0) {
//     $('#answer').addClass('negative');
//   } else {
//     $('#answer').removeClass('negative');
//   }
//   // use formatted string (with commas) from server
//   $('#answer').text(result.answer);
// }
//
// function clearCalc() {
//   $('#calc-form').find('input[type=number]').val(0);
//   $('#answer').empty();
// }
//
// });
