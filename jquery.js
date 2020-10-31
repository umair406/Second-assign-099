$(document).ready(function(){
  $("#calculate").on("click", function(){
  //calculate carbohydrate
  
  var milk = parseInt($("#sel1 option:selected").val());
  var beans = parseInt($("#sel2 option:selected").val());
  var fruits = parseInt($("#sel3 option:selected").val());
  var vegetables = parseInt($("#sel4 option:selected").val());
  var grains = parseInt($("#sel5 option:selected").val());

  var calcar = milk+beans+fruits+vegetables+grains;
  
  //calculate calories
  var m = $("#sel1 option:selected").data("cal");
  var b = $("#sel2 option:selected").data("cal");
  var f = $("#sel3 option:selected").data("cal");
  var v = $("#sel4 option:selected").data("cal");
  var g = $("#sel5 option:selected").data("cal");

  var calcal = m+b+f+v+g;

  $("#carbo-div").removeClass("d-none");
  $("#carbo").html(calcar);
  $("#carbo2").html(calcal);
  });
});