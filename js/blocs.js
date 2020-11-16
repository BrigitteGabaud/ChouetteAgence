function setUpSpecialNavs() {
    $(".navbar-toggle").click(function (n) {
        var i = $(this).closest("nav"),
            t = i.find("ul.site-navigation"),
            f = t.clone(),
            r,
            u;
        t
            .parent()
            .hasClass("nav-special") && (
                (n.stopPropagation(), $(this).hasClass("selected-nav"))
                    ? (
                        $(".blocsapp-special-menu blocsnav").removeClass("open"),
                        $(".selected-nav").removeClass("selected-nav"),
                        setTimeout(function () {
                            $(".blocsapp-special-menu").remove();
                            $("body").removeClass("lock-scroll");
                            $(".selected-nav").removeClass("selected-nav")
                        }, 300)
                    )
                    : (
                        $(this).addClass("selected-nav"),
                        r = i.attr("class").replace("navbar", "").replace("row", ""),
                        u = t.parent().attr("class").replace("navbar-collapse", "").replace("collapse", ""),
                        ($(".content-tint").length = -1) && $("body").append('<div class="content-tint"><\/div>'),
                        f.insertBefore(".page-container").wrap(
                            '<div class="blocsapp-special-menu ' + r + '"><blocsnav class="' + u + '">'
                        ),
                        $("blocsnav").prepend(
                            '<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><d' +
                            'iv class="close-icon"><\/div><\/a>'
                        ),
                        function () {
                            var n = "fadeInRight",
                                t = 0,
                                i = 60;
                            $(".blocsapp-special-menu blocsnav").hasClass("fullscreen-nav")
                                ? (n = "fadeIn", i = 100)
                                : $(".blocsapp-special-menu").hasClass("nav-invert") && (n = "fadeInLeft");
                            $(".blocsapp-special-menu blocsnav li").each(function () {
                                $(this)
                                    .parent()
                                    .hasClass("dropdown-menu")
                                        ? $(this).addClass("animated fadeIn")
                                        : (t += i, $(this).attr("style", "animation-delay:" + t + "ms").addClass(
                                            "animated " + n
                                        ))
                            })
                        }(),
                        setTimeout(function () {
                            $(".blocsapp-special-menu blocsnav").addClass("open");
                            $(".content-tint").addClass("on");
                            $("body").addClass("lock-scroll")
                        }, 10)
                    )
            )
    });
    $("body")
        .on(
            "mousedown touchstart",
            ".content-tint, .close-special-menu",
            function () {
                $(".content-tint").removeClass("on");
                $(".selected-nav").click();
                setTimeout(function () {
                    $(".content-tint").remove()
                }, 10)
            }
        )
        .on("click", ".blocsapp-special-menu a", function (n) {
            $(n.target)
                .closest(".dropdown-toggle")
                .length || $(".close-special-menu").mousedown()
        })
}
function extraNavFuncs() {
    $(".site-navigation a").click(function (n) {
        $(n.target)
            .closest(".dropdown-toggle")
            .length || $(".navbar-collapse").collapse("hide")
    });
    $("a.dropdown-toggle").click(function () {
        $(this)
            .parent()
            .addClass("target-open-menu");
        $(this)
            .closest(".dropdown-menu")
            .find(".dropdown.open")
            .each(function () {
                $(this).hasClass("target-open-menu") || $(this).removeClass("open")
            });
        $(".target-open-menu").removeClass("target-open-menu")
    })
}
function setFillScreenBlocHeight() {
    $(".bloc-fill-screen").each(function () {
        var n = $(this);
        window.fillBodyHeight = 0;
        $(this)
            .find(".container")
            .each(function () {
                fillPadding = 2 * parseInt($(this).css("padding-top"));
                fillBodyHeight = n.hasClass("bloc-group")
                    ? fillPadding + $(this).outerHeight() + 50
                    : fillBodyHeight + fillPadding + $(this).outerHeight() + 50
            });
        $(this).css("height", getFillHeight() + "px")
    })
}
function getFillHeight() {
    var n = $(window).height();
    return n < fillBodyHeight && (n = fillBodyHeight + 100),
    n
}
function scrollToTarget(n) {
    1 == n
        ? n = 0
        : 2 == n
            ? n = $(document).height()
            : (
                n = $(n).offset().top,
                $(".sticky-nav").length && (n -= $(".sticky-nav .navbar-header").height())
            );
    $("html,body").animate({
        scrollTop: n
    }, "slow");
    $(".navbar-collapse").collapse("hide")
}
function animateWhenVisible() {
    hideAll();
    inViewCheck();
    $(window).scroll(function () {
        inViewCheck();
        scrollToTopView();
        stickyNavToggle()
    })
}
function setUpDropdownSubs() {
    $("ul.dropdown-menu [data-toggle=dropdown]").on("click", function (n) {
        n.preventDefault();
        n.stopPropagation();
        $(this)
            .parent()
            .siblings()
            .removeClass("open");
        $(this)
            .parent()
            .toggleClass("open");
        var t = $(this)
            .parent()
            .children(".dropdown-menu");
        t
            .offset()
            .left + t.width() > $(window).width() && t.addClass("dropmenu-flow-right")
    })
}
function stickyNavToggle() {
    var i = 0,
        n = "sticky",
        t;
    $(".sticky-nav").hasClass("fill-bloc-top-edge") && (
        t = $(".fill-bloc-top-edge.sticky-nav").parent().css("background-color"),
        "rgba(0, 0, 0, 0)" == t && (t = "#FFFFFF"),
        $(".sticky-nav").css("background", t),
        i = $(".sticky-nav").height(),
        n = "sticky animated fadeInDown"
    );
    $(window).scrollTop() > i
        ? (
            $(".sticky-nav").addClass(n),
            "sticky" == n && $(".page-container").css("padding-top", $(".sticky-nav").height())
        )
        : (
            $(".sticky-nav").removeClass(n).removeAttr("style"),
            $(".page-container").removeAttr("style")
        )
}
function hideAll() {
    $(".animated").each(function () {
        $(this)
            .closest(".hero")
            .length || $(this)
            .removeClass("animated")
            .addClass("hideMe")
    })
}
function inViewCheck() {
    $($(".hideMe").get().reverse()).each(function () {
        var n = jQuery(this),
            t = n
                .offset()
                .top + n.height(),
            r = $(window).scrollTop() + $(window).height(),
            i;
        (n.height() > $(window).height() && (t = n.offset().top), t < r) && (
            i = n.attr("class").replace("hideMe", "animated"),
            n.css("visibility", "hidden").removeAttr("class"),
            setTimeout(function () {
                n
                    .attr("class", i)
                    .css("visibility", "visible")
            }, .01)
        )
    })
}
function scrollToTopView() {
    $(window).scrollTop() > $(window).height() / 3
        ? $(".scrollToTop").hasClass("showScrollTop") || $(".scrollToTop").addClass(
            "showScrollTop"
        )
        : $(".scrollToTop").removeClass("showScrollTop")
}
function setUpVisibilityToggle() {
    $(document).on("click", "[data-toggle-visibility]", function (n) {
        function r(n) {
            n.is("img")
                ? n.toggle()
                : n.slideToggle()
        }
        var t,
            i;
        n.preventDefault();
        t = $(this).attr("data-toggle-visibility");
        -1 != t.indexOf(",")
            ? (i = t.split(","), $.each(i, function (n) {
                r($("#" + i[n]))
            }))
            : r($("#" + t))
    })
}
function setUpLightBox() {
    window.targetLightbox;
    $(document)
        .on("click", "[data-lightbox]", function (n) {
            var r,
                e;
            n.preventDefault();
            targetLightbox = $(this);
            var i = targetLightbox.attr("data-lightbox"),
                o = targetLightbox.attr("data-autoplay"),
                u = '<p class="lightbox-caption">' + targetLightbox.attr("data-caption") + "<\/" +
                        "p>",
                t = "no-gallery-set",
                f = targetLightbox.attr("data-frame");
            targetLightbox.attr("data-gallery-id") && (
                t = targetLightbox.attr("data-gallery-id")
            );
            targetLightbox.attr("data-caption") || (u = "");
            r = "";
            1 == o && (r = "autoplay");
            e = $(
                '<div id="lightbox-modal" class="modal fade"><div class="modal-dialog"><div cla' +
                'ss="modal-content ' + f + ' blocs-lb-container"><button id="blocs-lightbox-clo' +
                'se-btn" type="button" class="close-lightbox" data-dismiss="modal" aria-label="' +
                'Close"><span aria-hidden="true">&times;<\/span><\/button><div class="modal-bod' +
                'y"><a href="#" class="prev-lightbox" aria-label="prev"><span class="fa fa-chev' +
                'ron-left"><\/span><\/a><a href="#" class="next-lightbox" aria-label="next"><sp' +
                'an class="fa fa-chevron-right"><\/span><\/a><img id="lightbox-image" class="im' +
                'g-responsive" src="' + i + '"><div id="lightbox-video-container" class="embed-' +
                'responsive embed-responsive-16by9"><video controls ' + r + ' class="embed-resp' +
                'onsive-item"><source id="lightbox-video" src="' + i + '" type="video/mp4"><\/v' +
                'ideo><\/div>' + u + "<\/div><\/div><\/div><\/div>"
            );
            $("body").append(e);
            "fullscreen-lb" == f && (
                $("#lightbox-modal").addClass("fullscreen-modal").append(
                    '<a class="close-full-screen-modal animated fadeIn" style="animation-delay:0.5s' +
                    ';" onclick="$(\'#lightbox-modal\').modal(\'hide\');"><div class="close-icon"><' +
                    '\/div><\/a>'
                ),
                $("#blocs-lightbox-close-btn").remove()
            );
            ".mp4" == i.substring(i.length - 4)
                ? (
                    $("#lightbox-image, .lightbox-caption").hide(),
                    $("#lightbox-video-container").show()
                )
                : (
                    $("#lightbox-image,.lightbox-caption").show(),
                    $("#lightbox-video-container").hide()
                );
            $("#lightbox-modal").modal("show");
            "no-gallery-set" == t
                ? (
                    0 == $("a[data-lightbox]").index(targetLightbox) && $(".prev-lightbox").hide(),
                    $("a[data-lightbox]").index(targetLightbox) == $("a[data-lightbox]").length - 1 && $(".next-lightbox").hide()
                )
                : (
                    0 == $('a[data-gallery-id="' + t + '"]').index(targetLightbox) && $(".prev-lightbox").hide(),
                    $(
                        'a[data-gallery-id="' + t + '"]'
                    ).index(targetLightbox) == $('a[data-gallery-id="' + t + '"]').length - 1 && $(".next-lightbox").hide()
                );
            addLightBoxSwipeSupport()
        })
        .on("hidden.bs.modal", "#lightbox-modal", function () {
            $("#lightbox-modal").remove()
        });
    $(document).on("click", ".next-lightbox, .prev-lightbox", function (n) {
        var u,
            f;
        n.preventDefault();
        var i = "no-gallery-set",
            r = $("a[data-lightbox]").index(targetLightbox),
            t = $("a[data-lightbox]").eq(r + 1);
        targetLightbox.attr("data-gallery-id") && (
            i = targetLightbox.attr("data-gallery-id"),
            r = $(
                'a[data-gallery-id="' + i + '"]'
            ).index(targetLightbox),
            t = $('a[data-gallery-id="' + i + '"]').eq(r + 1)
        );
        $(this).hasClass("prev-lightbox") && (
            t = $('a[data-gallery-id="' + i + '"]').eq(r - 1),
            "no-gallery-set" == i && (t = $("a[data-lightbox]").eq(r - 1))
        );
        u = t.attr("data-lightbox");
        ".mp4" == u.substring(u.length - 4)
            ? (
                f = "",
                1 == t.attr("data-autoplay") && (f = "autoplay"),
                $("#lightbox-image, .lightbox-caption").hide(),
                $("#lightbox-video-container").show().html(
                    "<video controls " + f + ' class="embed-responsive-item"><source id="lightbox-v' +
                    'ideo" src="' + u + '" type="video/mp4"><\/video>'
                )
            )
            : (
                $("#lightbox-image").attr("src", u).show(),
                $(".lightbox-caption").html(t.attr("data-caption")).show(),
                $("#lightbox-video-container").hide()
            );
        targetLightbox = t;
        $(".next-lightbox, .prev-lightbox").hide();
        "no-gallery-set" == i
            ? (
                $("a[data-lightbox]").index(t) != $("a[data-lightbox]").length - 1 && $(".next-lightbox").show(),
                $("a[data-lightbox]").index(t) > 0 && $(".prev-lightbox").show()
            )
            : ($('a[data-gallery-id="' + i + '"]').index(t) != $(
                'a[data-gallery-id="' + i + '"]'
            ).length - 1 && $(".next-lightbox").show(), $(
                'a[data-gallery-id="' + i + '"]'
            ).index(t) > 0 && $(".prev-lightbox").show())
    })
}
function addSwipeSupport() {
    $(".carousel-inner").length && $(".carousel-inner").swipe({
        swipeLeft: function () {
            $(this)
                .parent()
                .carousel("next")
        },
        swipeRight: function () {
            $(this)
                .parent()
                .carousel("prev")
        },
        threshold: 0
    })
}
function addKeyBoardSupport() {
    $(window).keydown(function (n) {
        37 == n.which
            ? $(".prev-lightbox").is(":visible") && $(".prev-lightbox").click()
            : 39 == n.which && $(".next-lightbox").is(":visible") && $(".next-lightbox").click()
    })
}
function addLightBoxSwipeSupport() {
    $("#lightbox-image").length && $("#lightbox-image").swipe({
        swipeLeft: function () {
            $(".next-lightbox").is(":visible") && $(".next-lightbox").click()
        },
        swipeRight: function () {
            $(".prev-lightbox").is(":visible") && $(".prev-lightbox").click()
        },
        threshold: 0
    })
}
$(document).ready(function () {
    $("#scroll-hero").click(function (n) {
        n.preventDefault();
        $("html,body").animate({
            scrollTop: $("#scroll-hero")
                .closest(".bloc")
                .height()
        }, "slow")
    });
    extraNavFuncs();
    setUpSpecialNavs();
    setUpDropdownSubs();
    setUpLightBox();
    setUpVisibilityToggle();
    addSwipeSupport();
    addKeyBoardSupport();
    -1 != navigator
        .userAgent
        .indexOf("Safari") && -1 == navigator
        .userAgent
        .indexOf("Chrome") && $("#page-loading-blocs-notifaction").remove()
});
$(window)
    .load(function () {
        setFillScreenBlocHeight();
        animateWhenVisible();
        $("#page-loading-blocs-notifaction").remove()
    })
    .resize(function () {
        setFillScreenBlocHeight()
    });
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})