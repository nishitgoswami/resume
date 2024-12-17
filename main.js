const mobile = document.querySelector('.menu-toogle');
const mobilelink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
})

mobilelink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobilelink.classList.toggle("active");
    }
})

var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlights-wrapper").animate({
        scrollLeft: "-=" + step + "px" 
    });
});

$(".forward").bind("click", function(e){
    e.preventDefault();
    $(".highlights-wrapper").animate({
        scrollLeft: "+=" + step + "px" 
    })
})

$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        screenLeft: "-=" + stepFilter + "px"
    })
});

$(".forward-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        screenLeft: "+=" + stepFilter + "px"
    })
})