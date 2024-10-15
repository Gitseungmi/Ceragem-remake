document.addEventListener('DOMContentLoaded', function() {
    // 별 생성 함수
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.getElementById('stars-container').appendChild(star);

        star.addEventListener('animationend', () => {
            star.remove();
        });
    }

    // 주기적으로 별 생성
    setInterval(createStar, 100);

    // 로고 애니메이션 (이미 CSS에서 처리됨)

    // 기존 탭 메뉴와 Swiper 슬라이더 코드
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // 탭 기능 구현
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');

            // Swiper 업데이트
            swipers.forEach(swiper => swiper.update());
        });
    });

    // Swiper 초기화
    const swipers = [
        new Swiper('.swiper1', {
            pagination: {
                el: '.swiper-pagination',
            },
        }),
        new Swiper('.swiper2', {
            pagination: {
                el: '.swiper-pagination',
            },
        }),
        new Swiper('.swiper3', {
            pagination: {
                el: '.swiper-pagination',
            },
        })
    ];
});
