$(document).ready(function() {

$(".tabs-controls li").click(function() {
    if (!$(this).hasClass("active")) {

        var currentIndex = $(this).index();

        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        $(this).parent().siblings(".tabs-items").find("li").fadeOut(0);
        $(this).parent().siblings(".tabs-items").find("li").eq(currentIndex).fadeIn(0);

    }
});
	

});