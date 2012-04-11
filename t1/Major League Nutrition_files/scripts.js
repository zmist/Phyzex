jQuery(document).ready(function(){
	
       jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
            animationSpeed: 'normal',
            padding: 40,
            opacity: 0.35,
            showTitle: true,
            allowresize: true,
            counter_separator_label: '/',          
            theme: 'facebook' 
        });
		jQuery('#upsell-product-table .product-box .product-name').addClass ('maxheight3');
		jQuery('.cms-home .home-products .products-grid .product-info-box .product-name').addClass ('maxheight2');
		
		  if(navigator.userAgent.indexOf('Opera')!=-1){
			  jQuery('body').addClass('opera-fix');
		  };
         if(navigator.userAgent.indexOf('Firefox')!=-1){
			  jQuery('body').addClass('firefox-fix');
		  };
});

(function(jQuery)
		  {jQuery.fn.equalHeights=function(minHeight,maxHeight)
		  {tallest=(minHeight)?minHeight:0;this.each(function(){if(jQuery(this).height()>tallest){tallest=jQuery(this).height()}});
		  if((maxHeight)&&tallest>maxHeight)tallest=maxHeight;return this.each(function(){jQuery(this).height(tallest)})}})(jQuery)
jQuery(window).load(function(){
	if(jQuery(".maxheight").length){
	jQuery(".maxheight").equalHeights()}
	if(jQuery(".maxheight2").length){
	jQuery(".maxheight2").equalHeights()}
	if(jQuery(".maxheight3").length){
	jQuery(".maxheight3").equalHeights()}
	if(jQuery(".product-info-box-height").length){
	jQuery(".product-info-box-height").equalHeights()}
});
