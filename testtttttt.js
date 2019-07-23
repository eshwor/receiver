
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

    flashdiscount = [];
    efl = getCookie('eflash');
    if (QueryString.utm_campaign == 'Flash_Sale' || efl !== '') {
        flashdiscount = [];
        if (efl == '') {
            setCookie('eflash', 1);
        }
    }
    dTit = document.title;
    freeCodes = [];
    cReviewCode = '';
    utmOffers = {};
    paidOffer = utmOffers[QueryString.utm_campaign];
