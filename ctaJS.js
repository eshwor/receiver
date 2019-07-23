//Fresh Function 
//This function includes :
(function(){
    //todo
})();


function initZipBtns() {
	i = 0;
	jQuery('.ctaCoupon').click(function () {
		if (i == 0) {
			dis = jQuery(this).attr('data-dis');
			coup = jQuery(this).attr('data-coupon');
			console.log(dis);
			if (Number(dis) > 1) {
				oPrice = pPrice - dis
			} else {
				oPrice = pPrice * (1 - dis)
			};
			priceTicker(oPrice, "", "", "", "flash");
		
		}
		i++
	}), jQuery("#freeTag").click(function () {
		window.scroll({
			top: bundle[0].offsetTop - 50,
			left: 0,
			behavior: "smooth"
		}), jQuery(".slidesRail").css("left", slideoffset + "%")
	}), jQuery(".zipTrigger").click(function () {
		jQuery(".estDelivery").toggleClass("on").removeClass("hasZip")
	}), jQuery("#zipSubmit").click(function () {
		return jQuery(".esttime").html('<img id="estLoader" src="/images/loading16.gif">'), zip = jQuery("#zipInput").val(), /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip) ? void jQuery.ajax({
			method: "GET",
			url: "https://www.sonicelectronix.com/shipping/getCheapestUSShippingDetails?zip=" + zip + "&product_id=" + pId,
			success: function (e) {
				1 == e.success && (jQuery("#estLoader").remove(), jQuery(".estDelivery").removeClass("on").addClass("hasZip"), jQuery(".esttime").html('Est. Delivery ' + e.month.substring(0, 3) + ". " + e.date), jQuery('.estLabel').html('to ' + zip + ' <small class="changeZip">(change)</small>'), ga("send", "event", "Product", "Top Price Section", "Submit Zip Code"))
			}
		}) : (jQuery("input#zipInput").css("border-color", "#f44336"), jQuery("#estLoader").remove(), !1)
	})
}

function redoCtaSection() {
	if (zipActive = " hasZip", sonicZipHtml = "", jQuery(".productAvailability").length > 0 && (avail = jQuery(".productAvailability").css("display", "none")), ctaObj = {}, ctaObj.eta = "", ctaObj.shipping = "", ctaObj.vip = "", ctaObj.condition = "Brand New", isOpenBox && (ctaObj.condition = "Open Box"), ctaObj.pair = "", ctaObj.acs = "", color = "", pPrice >= 49 && (ctaObj.shipping = '<div class="fShip">+ FREE Shipping</div>'), pStatus += jQuery('.product_discontinued').text(), /Out of Stock|Discontinued/g.test(pStatus)) color = " red_text";
	else {
		var e = jQuery(".eta"),
			a = jQuery(".shippingEstimate p").text(),
			changezip = '<small class="changeZip">(change)</small>',
			t = "";
		if (sonicZip !== '') {
			changezip = 'to ' + sonicZip + ' ' + changezip
		}
		e.length > 0 ? (t = CheckShipping(e.text()), etaTime = t.join(" ")) : /free 2-day/g.test(a) ? (ctaObj.shipping = '<div class="fShip">+ FREE 2-Day Shipping</div>', changezip = '', sonicZipHtml = "") : a.indexOf("Special") > -1 ? (sonicZipHtml = "") : a.indexOf("Available") > -1 ? etaTime = getEta(30) : (zipActive = "", etaTime = "", sonicZipHtml = '<div class="zipCta zipTrigger"><div>Get Delivery ETA</div><div>Enter Zip Code</div></div>'), getZip = '<div class="zipInputWrapper"><div class="zipContainer"><div class="zipInputC"><input id="zipInput" type="number" placeholder="Zip Code" value="' + sonicZip + '"></div><div id="zipSubmit" class="fa fa-search"></div></div></div>', ctaObj.eta = '<div class="estDelivery' + zipActive + '">' + sonicZipHtml + getZip + '<div class="estDeliveryContainer zipTrigger"><div class="esttime">Est. Delivery ' + etaTime + '</div><div class="estLabel">' + changezip + '</div></div></div>'
	}
	jQuery(".apair").length > 0 && (ctaObj.pair = '<div class="apair">A PAIR</div>');
	paidOffer !== undefined ? (discount = paidOffer[2], coupon = paidOffer[0], offer = paidOffer[1], ctaObj.vip = '<div class="ctaCoupon" data-dis="' + discount + '" data-coupon="' + coupon + '"><i class="fa fa-tags" ></i><span class="offer">' + offer + '</br>' + coupon + '</span></div>') : jQuery(".mobileVip").length > 0 ? (rewardAmt = Math.round(.1 * pPrice), rewardAmt = "$" + rewardAmt + " Rewards", ctaObj.vip = '<a class="fancyB fancybox.ajax mobileVip" href="/landing/vippopup.html"><img src="/landing/vipoffer.png"><span>' + rewardAmt + "</span></a>") : jQuery(".bundledSavingsWrap").length > 0 && (ctaObj.acs = '<a data-role="none" href="/landing/freeinstall2.html" class="fancyB fancybox.ajax freeinstallpr"><div class="fa fa-wrench"></div> FREE Installation Accessories Included - up to $30</a>'), jQuery(".price_row").html('<div class="wrapperCta"><div class="priceShipping">' + ctaObj.vip + '<div class="pRice">$' + pPrice + "</div>" + ctaObj.pair + ctaObj.shipping + '</div><div class="stockNDelivery"><div class="stockDelivery"><div class="stockInfo' + color + '">' + pStatus + '</div><div class="stockCondition">' + ctaObj.condition + "</div></div>" + ctaObj.eta + '</div></div><div class="promoInfo">' + ctaObj.acs + "</div></div>"), initZipBtns()
}

function prodPageActions(e, a, t, r, i) {
	/Open Box|Damaged|Refurbished|(Open Box)/g.test(t) && (isOpenBox = !0, addScript("/landing/scripts/obcondrating2.js")), redoCtaSection(), addScript("/landing/mobile-scripts/mbProd162.js"), comboProd.length > 0 && jQuery(".top-firstcon").prepend('<div class="exclusivelogo"><img src="/img/violator/Desktop_20170428_105116.png"></div>'), (/Out of Stock|Discontinued/g.test(r) || trafsource || jQuery(".product_discontinued").length > 0) && i.indexOf("High Output") > -1 && addScript("/landing/scripts/mech2.js"), (i.indexOf("Amplifiers") > -1 || i.indexOf("Amps") > -1) && (subtitlestr = jQuery(".top-firstcon p").eq(0).text(), wattpt = new RegExp(/\d+(?= W RMS)|\d+(?=W RMS)|\d+(?= Watt RMS)/g), wattNm = wattpt.exec(subtitlestr), null !== wattNm && void 0 !== wattNm && wattNm[0] >= 2e3 && addScript("/landing/scripts/ampwarning2.js")), jQuery(".addToCartAccessoryRecommendationLink").click(function () {
		if (0 == cartC) {
			acsImg = jQuery("#acessoryGrid .imageContainer a");
			for (var e = acsImg.length - 1; e >= 0; e--) dataSrc = jQuery(acsImg[e]).attr("data-img"), jQuery(acsImg[e]).find("img").attr("src", dataSrc);
			addScript("/landing/mobile-scripts/mobileac10.js"), cartC++
		}
	}), dynamicpriceCooke && (flashHistory = JSON.parse(dynamicpriceCooke), void 0 !== flashHistory[e] && (thisexp = new Date(flashHistory[e].exp)));
        viewSpeakersFit = jQuery("#viewSpeakersFit"), void 0 !== viewSpeakersFit && null !== viewSpeakersFit && (viewSpeakersFit.attr({
		href: "/landing/query/specinfo.php",
		"data-url": "#"
	}), viewSpeakersFit.addClass("fancyB fancybox.ajax")), jQuery(".top-firstcon h2").click(function (e) {
		jQuery(this).css({
			display: "block"
		})
	})
}

function getPageInfo() {
	for (var e = 0; e < dataLayer.length; e++)
		if (dataLayer[e].id && (pId = dataLayer[e].id, pPrice = dataLayer[e + 1].price, pName = dataLayer[e + 1].name, pCategory = dataLayer[e + 1].pageCategory, a = dataLayer[e + 1].pageType, pStatus = jQuery(".status p").text(), prodPageActions(pId, pPrice, pName, pStatus, pCategory, a)), dataLayer[e].pageType) {
			var a = dataLayer[e].pageType,
				t = dataLayer[e].pageCategory;
			"category" != a && "brand" != a || CategoryFunctions(t, a), "vehicleLandingPage" == a && ("" !== year && "" !== make && "" !== model && (jQuery('<a data-role="none" href="/landing/freeinstall2.html" class="fancyB fancybox.ajax freeInstallBanner on"><i class="fa fa-wrench"></i><b>FREE KIT & HARNESS</b> for your ' + displayMake + " " + displayModel + "</a>").insertBefore(".afg-specs-selector-stereo-inner"))), "category" == a && t.indexOf("Car") < 0 && t.indexOf("Marine") < 0 && addScript("/landing/scripts/vsban.js"), "search" == a && addScript("/landing/mobile-scripts/mbStereoAccessories9.js"), false && "cart" == a && "undefined" != typeof brontoCart
		}
	return a
}

function addextraCode(e) {
	setTimeout(function () {
		jQuery.ajax({
			url: "/cart/update",
			type: "POST",
			dataType: "json",
			data: [{
				name: "coupons",
				value: e
			}],
			success: function () {}
		})
	}, 1800)
}

function addDynCoup(e) {
	return "popup" == e ? flashexp > fld ? void globalOffers(flashdiscount[0], "flash", '<div class="offerCode offerInfo">flashdiscount[0]</div><div class="globalCountdown offerInfo"></div><div class="offerMsg offerInfo"><b>' + flashdiscount[1] + " Off Flash Sale</b></div>", flashprint, "flash") : void globalOffers(flashdiscount[0], "flashTrig", '<a href="javascript:;" id="offerbtn" class="offerAdd" data-role="none">Start Sale</a><div class="offerMsg offerInfo"><b>' + flashdiscount[1] + " Off Flash Sale</b> - 1 Hour of shopping for great sound</div>", flashprint, "flash") : (jQuery(".page").append('<div class="dynCoupWrapper">' + e + "</div>"), void jQuery("a.redeemCouponBtn").click(function (e) {
		e.preventDefault(), thiselem = jQuery(this), coupon = thiselem.attr("data-code"), savings = thiselem.attr("data-savings"), thiselem.html("Saving $" + savings + ' to cart <span class="fa fa-spinner fa-pulse fa-fw"></span>');
		salePrice = pPrice - savings, priceTicker(salePrice, "", thiselem, coupon, "coupon")
	}))
}

function cleanQuery(e) {
	return suggstrip = e.replace(/<b>|<\/b>/g, "").replace(":_all", ""), repIn = /\din/.exec(suggstrip), repIn && (sizeRep = repIn[0].replace(/in/g, "%22"), suggstrip = suggstrip.replace(repIn[0], sizeRep)), suggsname = e.replace(":_all", "").replace(":", " "), sStr = "/search?keyword=" + encodeURIComponent(suggstrip), squery = suggstrip.toLowerCase(), [suggsname, sStr, squery]
}

var bot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent),
	sonicZipHtml = "";

var monthArr = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
Date.prototype.addDays = function (e) {
	var a = new Date(this.valueOf());
	return a.setDate(a.getDate() + e), a
},!0 !== bot && (pageInfo = getPageInfo(), false && (cartPromo))
