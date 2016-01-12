$(document).ready(function() {

  var number = "";
  var displayDiv = $("#display");
  displayDiv.text("0");
  var operators = ['+', '-', '*', '/'];

  //click listener for numbers
  $(".numb").click(function() {
    number += $(this).text();
    displayDiv.text(number);
  });

  //click listener for operators
  //
  $('.operator').click(function() {
    number += $(this).text();
    displayDiv.text(number);
  });
  
  //click listener for clear
  $('.clear').click(function() {
    displayDiv.text("0");
    number="";
  })

  //perform operation
  $('.equals').click(function() {
    number = eval(number);
    displayDiv.text(number);               
  });

});