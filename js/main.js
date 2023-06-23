$(function () {
    //스크롤 헤더 on
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });


    //메인비주얼슬라이드
    // $('.main_slide').on('init afterChange', function (e, s, c) {
    //     let _this = $(this).find('.slick-current');
    //     _this.addClass('on').siblings().removeClass('on');
    //     $('.main_Pnuvisual .num span').text(c ? c + 1 : 1);


    //     $('.main_Pnuvisual .main_slide .slogan').eq(0).addClass('on');
    //     $('.main_Pnuvisual .main_slide .slogan').eq(c).addClass('on').siblings().removeClass('on');
    // });

    $('.main_Pnuvisual .main_slide').slick({
        arrows: false,
        asNavFor: '.main_Pnuvisual .sub_slide .content',
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,

    });
    $('.main_Pnuvisual .sub_slide .content').slick({
        arrows: false,
        asNavFor: '.main_Pnuvisual .main_slide',
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_Pnuvisual .arrow .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_Pnuvisual .arrow .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });


    //pnu news 탭메뉴
    $('.main_Pnunews .bbsNotice>li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.main_Pnunews .bbsNotice>li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.main_Pnunews .bbsContent>li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    //pnu screen 유투브 링크
    $('.main_PnuScreen .screen_slide').slick({
        arrows: false,
        asNavFor: '.main_PnuScreen .screen_list'
    });
    $('.main_PnuScreen .screen_list').slick({
        slidesToShow: 3,
        asNavFor: '.main_PnuScreen .screen_slide',
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        vertical: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                }
            },
        ]
    });
    $('.main_PnuScreen .arrow .left').on('click', function () {
        $('.main_PnuScreen .screen_slide').slick('slickPrev');
    });
    $('.main_PnuScreen .arrow .right').on('click', function () {
        $('.main_PnuScreen .screen_slide').slick('slickNext');
    });


    //pnu user link 탭메뉴
    $('.main_Pnuuserlink .PU_user>li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.main_Pnuuserlink .PU_user>li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.main_Pnuuserlink .PU_content>li').eq(idx).addClass('on').siblings().removeClass('on');
    });


    //pnu 캠퍼스 슬라이드    
    $('.main_Pnucampus .qslide').slick({
        arrows: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    //사이드:top
    $('.top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });


    //모바일
    $('.mobile_menu').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $(window).on('resize', function () {
        $('.gnb').removeAttr('style')
    })

});