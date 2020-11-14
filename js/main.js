$(document).ready(function(){
 
    
 var mixer = mixitup('.container');
    


$("nav ul li a").click(function(){
	$("nav ul li a").removeClass("active");
	$(this).addClass("active");
});

$(".js-service-section").waypoint(function(direction){

if(direction == "down"){
	$("nav").addClass("sticky");

}else{
$("nav").removeClass("sticky");

}



});

//SMOOTH SCROLL FOR IE/EDGE/SAFARI

$("a").on('click', function(event){
  
  if (this.hash !== "") {

  	event.preventDefault();

  	var hash = this.hash;

  	$('html, body').animate({
  		scrollTop: $(hash).offset().top
  	}, 800, function(){
  		window.location.hash = hash;
  	});
  }



});
  //SMOOTH SCROLL FOR IE/EDGE/SAFARI 

 });

$(function(){

$.fatNav();



});