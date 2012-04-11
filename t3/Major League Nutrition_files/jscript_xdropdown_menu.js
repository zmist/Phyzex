//script added by Get Em Fast Web Designs
var isAnimating = false;
$(function () {
$('#dropMenu .level1 .submenu.submenu').hover(function() {
if (!isAnimating) {
$(this).find('ul.level2').stop(true, true).slideUp(500);
$(this).find('ul.level2').stop(true, true).slideDown(100);
isAnimating = true;
}
}, function() {
$(this).find('ul.level2').stop(true, true).slideDown(500);
$(this).find('ul.level2').stop(true, true).slideUp(100);
isAnimating = false;
});}); 