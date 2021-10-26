$(function () {
    $('.profile').css("transform", "translateX(0vh)");
    $('.profile').css("opacity", "1");
    setTimeout(function () {
        $('.profile-hello').css("transform", "translateX(1vw)");
    }, 1500);
    setTimeout(function () {
        $('.profile-hello').css("transform", "translateX(0)");
    }, 1700);
    setTimeout(function () {
        $('.profile-tag').css("transform", "translateX(1vw)");
    }, 1900);
    setTimeout(function () {
        $('.profile-tag').css("transform", "translateX(0)");
    }, 2100);
    setTimeout(function () {
        $('.profile-icons-container').css("transform", "translateX(1vw)");
    }, 2300);
    setTimeout(function () {
        $('.profile-icons-container').css("transform", "translateX(0)");
    }, 2500);
    // transform: rotateY(.5turn);

    $('.card').on("click", function () {
        console.log($(this).children().css("transform"));
        if ($(this).children().css("transform") == "matrix3d(-1, 0, -1.22465e-16, 0, 0, 1, 0, 0, 1.22465e-16, 0, -1, 0, 0, 0, 0, 1)") {
            $(this).children().css("transform", "rotateY(0turn)");
        } else {
            $(this).children().css("transform", "rotateY(.5turn)");
        }
    })


    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        var timer = {
            value: 0
        };
        if (scrollY > 450) {
            $('.card').css("opacity", "1");
        }
    })
})