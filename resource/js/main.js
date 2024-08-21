/*Moblile-menu*/
function OpenNavbar(){
    document.getElementById("ShowNav").style.width = "100%";
}
function collapseNav(){
    document.getElementById("ShowNav").style.width = "0%";
}
$(document).ready(function(){
	$(".js-sticky").waypoint(function(direction){
		if(direction=="down"){
			$("nav").addClass("sticky");
		}
		else{
			$("nav").removeClass("sticky");
		}
	});
   // MIXIT UP (Portfolio)
   var mixer = mixitup(".filter");
});

//3D scrolling
