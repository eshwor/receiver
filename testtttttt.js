
    /* Violator Mobile */
    globalDiscount = 0;
    function setCookie(e, t, n) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
        var r = "expires=" + o.toUTCString();
        document.cookie = e + "=" + t + "; " + r + "; path=/";
    }
    function getCookie(e) {
        for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
            for (var r = n[o];
                    " " == r.charAt(0); )
                r = r.substring(1);
            if (0 == r.indexOf(t))
                return r.substring(t.length, r.length);
        }
        return "";
    }
    var QueryString = function () {
        for (var e = {}, t = window.location.search.substring(1), n = t.split("&"), o = 0; o < n.length; o++) {
            var r = n[o].split("=");
            if ("undefined" == typeof e[r[0]])
                e[r[0]] = decodeURIComponent(r[1]);
            else if ("string" == typeof e[r[0]]) {
                var i = [e[r[0]], decodeURIComponent(r[1])];
                e[r[0]] = i;
            } else
                e[r[0]].push(decodeURIComponent(r[1]));
        }
        return e;
    }();
    if (typeof brontoCart === "undefined") {
        var brontoCart = {};
        brontoCart.subtotal = 0;
        brontoCart.lineItems = [];
        brontoCart.discountAmount = 0;
    }
    flashdiscount = ['FLSOUND5', 5, 20, 20];
    efl = getCookie('eflash');
    if (QueryString.utm_campaign == 'Flash_Sale' || efl !== '') {
        flashdiscount = ['EFLSOUND10', 10, 30, 30];
        if (efl == '') {
            setCookie('eflash', 1);
        }
    }
    dTit = document.title;
    freeCodes = ['KICK25'];
    cReviewCode = 'HDREVIEW50509';
    utmOffers = {};
    utmOffers['Shopping-Campaign-Promo-Coupon-50OFFBASS'] = ['50OFFBASS', '$50 Off', 50];
    utmOffers['Shopping-Campaign-Promo-Coupon-100OFFBASS'] = ['100OFFBASS', '$100 Off', 100];
    utmOffers['119-car-subwoofer-stealthboxes-vehicle-specific'] = ['SAVESTEALTH', '15% Off', 0.15];
    utmOffers['jl-audio-stealthboxes-coupon'] = ['SAVESTEALTH', '15% Off', 0.15];
    paidOffer = utmOffers[QueryString.utm_campaign];
