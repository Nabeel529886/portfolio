$(document).ready(function(){
    var typed_string = $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
        strings: typed_string.split(","),
        typeSpeed: 70,
        loop: true,
        backDelay: 700,
        backSpeed: 40,
    })
    
    $('#nav-options').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    })

    $(window).scroll(function(){
        let positionTop = $(document).scrollTop();
        if (positionTop >= 800){
            $(".navbar").css({
                background: "linear-gradient(40deg, #511A5B, #21143F, #59215D)",
            })
        }else{
            $(".navbar").css({
                background: "none",
            })
        }
    })    
})


