/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("body").ready(init);

function init(){
   
}

   function buttonColorChange(param){
	  var colour = $("#colour")[0].value;
	  $(param).css("background-color",colour);
      $(param).css("opacity","1");
}

 function resetColorChange(){
	  $(".btn").css("background-color","#ffffff");
      $(".btn").css("opacity","1");
}
