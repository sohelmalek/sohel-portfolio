let header = document.getElementById("header"),
    header_height = header.clientHeight,
    banner = document.getElementById("banner"),
    scroll_up = window.pageYOffset,
    css_mt_height = `margin-top: ${header_height}px;`;

function add_class_on_scroll() { header.classList.add("demo", "header_scroll") }
let html = document.getElementById("html");

function remove_class_on_scroll() { header.classList.remove("demo", "header_scroll") }
window.addEventListener("scroll", function() {
    (scroll_up = window.scrollY) > `${header_height}` ? add_class_on_scroll(): remove_class_on_scroll()
}), window.ityped.init(document.querySelector(".ityped"), { strings: ["Designer", "Developer"], loop: !0, cursorChar: " " }), window.ityped.init(document.querySelector(".ityped1"), { strings: ["Designer", "Developer"], loop: !0, cursorChar: " " });
let body = document.querySelector("body");

function classToggle() { body.classList.toggle("dark") }
let mouseCursor = document.querySelector(".cursor"),
    links = document.querySelectorAll("a"),
    buttons = document.querySelectorAll("button");

function cursor(e) { gsap.to(mouseCursor, .4, { x: e.clientX, y: e.clientY }) }

function parallaxIt(e, t, o) {
    var r = $("#about_main"),
        n = e.pageX - r.offset().left,
        a = e.pageY - r.offset().top;
    TweenMax.to(t, 1, { x: (n - r.width() / 2) / r.width() * o, y: (a - r.height() / 2) / r.height() * o })
}
window.addEventListener("mousemove", cursor), buttons.forEach(e => { e.addEventListener("mouseleave", () => { mouseCursor.classList.remove("link-grow"), gsap.to(mouseCursor, .4, { scale: 1 }) }), e.addEventListener("mouseover", () => { mouseCursor.classList.add("link-grow"), gsap.to(mouseCursor, .4, { scale: 1.3 }) }) }), links.forEach(e => { e.addEventListener("mouseleave", () => { mouseCursor.classList.remove("link-grow"), gsap.to(mouseCursor, .4, { scale: 1 }) }), e.addEventListener("mouseover", () => { mouseCursor.classList.add("link-grow"), gsap.to(mouseCursor, .4, { scale: 1.3 }) }) }), $("#main").mousemove(function(e) { parallaxIt(e, ".one", -20), parallaxIt(e, ".two", -50) });
var counted = 0;
$(window).scroll(function() {
        var e = $("#counter").offset().top - window.innerHeight;
        0 == counted && $(window).scrollTop() > e && ($(".count").each(function() {
            var e = $(this),
                t = e.attr("data-count");
            $({ countNum: e.text() }).animate({ countNum: t }, { duration: 2e3, easing: "swing", step: function() { e.text(Math.floor(this.countNum)) }, complete: function() { e.text(this.countNum) } })
        }), counted = 1)
    }),
    function() {
        var e, t, o, r, n, a, c, s = !0;

        function l(e) {
            var t = posy = 0;
            e.pageX || e.pageY ? (t = e.pageX, posy = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), c.x = t, c.y = posy
        }

        function d() { s = !(document.body.scrollTop > t) }

        function u() { e = window.innerWidth, t = window.innerHeight, o.style.height = t + "px", r.width = e, r.height = t }

        function m(e) { TweenLite.to(e, 1 + 1 * Math.random(), { x: e.originX - 50 + 100 * Math.random(), y: e.originY - 50 + 100 * Math.random(), ease: Circ.easeInOut, onComplete: function() { m(e) } }) }

        function p(e) {
            if (e.active)
                for (var t in e.closest) n.beginPath(), n.moveTo(e.x, e.y), n.lineTo(e.closest[t].x, e.closest[t].y), n.strokeStyle = "rgba(156,217,249," + e.active + ")", n.stroke()
        }

        function v(e, t, o) {
            var r = this;
            r.pos = e || null, r.radius = t || null, r.color = o || null, this.draw = function() { r.active && (n.beginPath(), n.arc(r.pos.x, r.pos.y, r.radius, 0, 2 * Math.PI, !1), n.fillStyle = "rgba(156,217,249," + r.active + ")", n.fill()) }
        }

        function h(e, t) { return Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2) }(function s() {
            c = { x: (e = window.innerWidth) / 2, y: (t = window.innerHeight) / 2 }, (o = document.getElementById("banner")).style.height = t + "px", (r = document.getElementById("demo-canvas")).width = e, r.height = t, n = r.getContext("2d"), a = [];
            for (var l = 0; l < e; l += e / 20)
                for (var d = 0; d < t; d += t / 20) {
                    var u = l + Math.random() * e / 20,
                        m = d + Math.random() * t / 20,
                        p = { x: u, originX: u, y: m, originY: m };
                    a.push(p)
                }
            for (var f = 0; f < a.length; f++) {
                for (var g = [], y = a[f], _ = 0; _ < a.length; _++) { var x = a[_]; if (y != x) { for (var b = !1, w = 0; w < 5; w++) b || void 0 != g[w] || (g[w] = x, b = !0); for (var w = 0; w < 5; w++) !b && h(y, x) < h(y, g[w]) && (g[w] = x, b = !0) } }
                y.closest = g
            }
            for (var f in a) {
                var E = new v(a[f], 2 + 2 * Math.random(), "rgba(255,255,255,0.3)");
                a[f].circle = E
            }
        })(),
        function o() {
            for (var r in function o() {
                    if (s)
                        for (var r in n.clearRect(0, 0, e, t), a) 4e3 > Math.abs(h(c, a[r])) ? (a[r].active = .3, a[r].circle.active = .6) : 2e4 > Math.abs(h(c, a[r])) ? (a[r].active = .1, a[r].circle.active = .3) : 4e4 > Math.abs(h(c, a[r])) ? (a[r].active = .02, a[r].circle.active = .1) : (a[r].active = 0, a[r].circle.active = 0), p(a[r]), a[r].circle.draw();
                    requestAnimationFrame(o)
                }(), a) m(a[r])
        }(), "ontouchstart" in window || window.addEventListener("mousemove", l), window.addEventListener("scroll", d), window.addEventListener("resize", u)
    }(), $(document).ready(function(e) { e(window).bind("load", function() { e("#preloader, body").addClass("loaded"), e("#body, body").removeClass("no_scroll"), setTimeout(function() { e("#preloader").css({ opacity: "0", visibility: "hidden", transition: ".3s" }) }, 500) }), setTimeout(function() { e("#preloader, body").addClass("loaded") }, 6e4) });