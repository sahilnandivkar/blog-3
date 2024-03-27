$(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }

    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});

function redirectToGeekForGeek() {
    window.location.href = "https://www.geeksforgeeks.org/html-tags-a-to-z-list/";
}
