$(document).ready(function () {
    // 드롭다운 토글
    $(".relative a").click(function () {
        $(this).siblings(".business-sub-list").slideToggle(200);
    });

    // 드롭다운 외부 클릭시 닫기
    $(document).click(function (event) {
        if (!$(event.target).closest(".relative").length) {
            $(".business-sub-list").slideUp(200);
        }
    });
});
$(document).ready(function () {
    // 햄버거 메뉴 클릭
    $(".hamburger").on("click", function (e) {
        e.preventDefault();
        $(".side-menu, .overlay").addClass("active");
        $("body").addClass("no-scroll");
    });

    // 메뉴 닫기 (닫기 버튼과 오버레이 클릭 시)
    $(".close-btn, .overlay").on("click", function (e) {
        e.preventDefault();
        $(".side-menu, .overlay").removeClass("active");
        $("body").removeClass("no-scroll");
    });

    // 반응형 처리
    $(window).on("resize", function () {
        var windowWidth = $(window).width();
        if (windowWidth > 800) {
            $(".util").hide();
            $(".side-menu, .overlay").removeClass("active");
            $("body").removeClass("no-scroll");
        } else {
            $(".util").show();
        }
    });

    // 초기 로드 시 화면 크기 체크
    $(window).trigger("resize");
});
