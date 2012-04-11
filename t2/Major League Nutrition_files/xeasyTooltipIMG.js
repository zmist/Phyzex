/*
 * Url preview script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
  
screenshotPreview = function(){	
	/* CONFIG */
		
		xOffset = 10;
		yOffset = 30;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	$("li.current_1 a").hover(function(e){
		$(this).parents(".div_cat_navbar").append("<p id='screenshot'><img src='../../samp2/Major League Nutrition_files/"+ this.rel +"' alt='' /></p>");								 
		$("#screenshot").slideDown(500);
		//	.css("top",(e.pageY - xOffset) + "px")
		//	.css("left",(e.pageX + yOffset) + "px")
									
    },
	function(){
		$(".div_cat_navbar #screenshot").remove();
    });	
	//$("li.current_1 a").mousemove(function(e){
		//$("#screenshot")
		//	.css("top",(e.pageY - xOffset) + "px")
		//	.css("left",(e.pageX + yOffset) + "px");
	//});			
};


// starting the script on page load
$(document).ready(function(){
	screenshotPreview();
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++=
screenshotPreviewCategory = function(){
	
		xOffset = -23;
		yOffset = -9;
	
	$(".list .infoBoxContents ul li .div_2 a").hover(function(e2){
	  var th=$(this)
	  var offset = th.parent("li.htooltip").offset();
		if	(this.rel)	{

	  $("#bodyWrapper").append("<p id='screenshotCategory'><img src='../../samp2/Major League Nutrition_files/"+ this.rel +"' alt='' /></p>");         
	  $("#screenshotCategory").slideDown(500)
	  .css("top",(e2.pageY - offset.top - xOffset) + "px")
	  .css("left",(e2.pageX - offset.left + yOffset) + "px")
		}
	},
	function(){
		$("#bodyWrapper #screenshotCategory").remove();
	});
	
	$(".list .infoBoxContents ul li .div_2 a").mousemove(function(e3){
		   $("#screenshotCategory")
/*		   .css("top",(e3.pageY - offset.top - xOffset) + "px")
		   .css("left",(e3.pageX - offset.left + yOffset) + "px");*/
		   .css("top",(e3.pageY - xOffset) + "px")
		   .css("left",(e3.pageX + yOffset) + "px");
		   
		 });  
};
// starting the script on page load
$(document).ready(function(){
	screenshotPreviewCategory();
});
