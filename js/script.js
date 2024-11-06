$(() => {
    const topSlider = new Swiper(".top-slider", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoplay: true,
        speed: 1000, //기본:300
        effect: "slide", //slide, fade,cube, flip, coverflow

        slidesPerView: 1, // 보여질 슬라이드 개수
        spaceBetween: 20, //슬라이드 간격 20px
        // If we need pagination
        // pagination: {
        //     el: ".swiper-pagination",
        // },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
    const secondSlider = new Swiper(".second-slider", {
        loop: true,
        autoplay: true,
        speed: 700,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
    const reviewSlider = new Swiper(".review-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: true,
        speed: 700,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
    });

    const businessBottomSlider = new Swiper(".business-bottom-slider", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const businessTopSlider = new Swiper(".business-top-slider", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: ".business-bottom-slider",
        },
    });
});

$(document).ready(function () {
    // 햄버거 메뉴 클릭
    $(".hamburger").on("click", function (e) {
        e.preventDefault();
        $(".side-menu").addClass("active");
    });

    // 닫기 버튼 클릭
    $(".close-btn").on("click", function (e) {
        e.preventDefault();
        $(".side-menu").removeClass("active");
    });

    // 반응형 처리
    $(window).on("resize", function () {
        var windowWidth = $(window).width();
        if (windowWidth > 800) {
            $(".util").hide();
            $(".side-menu").removeClass("active");
        } else {
            $(".util").show();
        }
    });

    // 초기 로드 시 화면 크기 체크
    $(window).trigger("resize");
});
