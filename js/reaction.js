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
