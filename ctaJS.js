//Fresh Function 
//This function includes :
(function(){
    //todo
})();


function initZipBtns() {
	itt = 0;
	jQuery('.ctaCoupon').click(function () {
		if (itt == 0) {
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
		itt++
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



function conflictingOffer() {
	return count = 0, count += jQuery(".flsDeal").length, count += jQuery("#promoEmail").length, count += globalDiscount, freeGood && count++, count > 0 && count
}

function addCouponCode(val) {
	var salePrice = pPrice - val.discount;
	var max = val.max;
	if (max > 0) {
		dmax = ' • Max: $' + max;
	} else {
		dmax = '';
	}
	var discountOff = val.discount;
	var cdiscountOff = '$' + val.discount + ' off';
	if (val.discount < 1) {
		salePrice = pPrice * val.discount;
		discountOff = Math.round((1 - val.discount) * 100);
		cdiscountOff = discountOff + '% off';
	}
	var nprice = salePrice.toFixed(2);
	if (nprice > 0 && jQuery('.backorder').length == 0) {
		jQuery(".price_row .yprice").html('<div style="font-size:11px;font-weight:400;">Copy Code</div><div style="display: inline-block;vertical-align:middle;position:relative"><div class="mCouponCode">' + val.code + '</div><div style="position:absolute;width:100%;font-size:11px;line-height:1.5;left:0">' + cdiscountOff + dmax + '</div></div><span style="font-size: 15px;text-decoration: line-through;color: #303030;">$' + pPrice + '</span><div class="breaker"></div><span>$' + nprice + '</span>');
	}
	addcode++;
}



function videoGuide() {
	jQuery(".row.afg-specs-mobile").prepend('<div id="moreBelow"><span class="fa fa-level-down"></span> More Items Below</div><a class="fancyB fancybox.iframe clearfix ymmBuyingGuide" href="https://www.youtube.com/embed/9o6IJ98Q-vs?rel=0&showinfo=0&theme=light&iv_load_policy=3" data-ajax="false"><span style="float:left;margin-right:10px;" class="fa fa-info-circle fa-2x"></span><div style="display: block;overflow: hidden;font-size: 14px;">Need help choosing a stereo?</div></a>'), onet = 0, jQuery(window).scroll(function () {
		0 == onet && jQuery(window).scrollTop() > 30 && (jQuery("#moreBelow").css("display", "none").fadeOut("slow"), onet = 1)
	})
}

function InsertImg(e, a) {
	jQuery(e).prepend('<img style="position:absolute;bottom:-15px;right:10px;border-radius:3px;height:50px;" src="' + a + '">')
}

function loopImgArr() {
	jQuery.getJSON("https://spreadsheets.google.com/feeds/list/1SBjNkU_KtHrU04gT0YpAGaXqKLhxW2FVXwHHE0KhoDk/1/public/values?alt=json", function (e) {
		rmake = make.replace(/\+/g, " "), rmodel = model.replace(/\+/g, " "), colArr = e.feed.entry;
		for (var a = colArr.length - 1; a >= 0; a--)
			if (colArr[a].gsx$make.$t == make && colArr[a].gsx$model.$t == rmodel && colArr[a].gsx$year.$t == year) return InsertImg(".breadcrumb", colArr[a].gsx$urlsmall.$t), !1
	})
}

function getPageInfo() {
	for (var e = 0; e < dataLayer.length; e++)
		if (dataLayer[e].id && (pId = dataLayer[e].id, pPrice = dataLayer[e + 1].price, pName = dataLayer[e + 1].name, pCategory = dataLayer[e + 1].pageCategory, a = dataLayer[e + 1].pageType, pStatus = jQuery(".status p").text(), prodPageActions(pId, pPrice, pName, pStatus, pCategory, a)), dataLayer[e].pageType) {
			var a = dataLayer[e].pageType,
				t = dataLayer[e].pageCategory;
			"category" != a && "brand" != a || CategoryFunctions(t, a), "vehicleLandingPage" == a && ("" !== year && "" !== make && "" !== model && (loopImgArr(), jQuery('<a data-role="none" href="/landing/freeinstall2.html" class="fancyB fancybox.ajax freeInstallBanner on"><i class="fa fa-wrench"></i><b>FREE KIT & HARNESS</b> for your ' + displayMake + " " + displayModel + "</a>").insertBefore(".afg-specs-selector-stereo-inner")), videoGuide()), "category" == a && t.indexOf("Car") < 0 && t.indexOf("Marine") < 0 && addScript("/landing/scripts/vsban.js"), "search" == a && addScript("/landing/mobile-scripts/mbStereoAccessories9.js"), false && "cart" == a && "undefined" != typeof brontoCart
		}
	return a
}

function insertMakeOffer(e) {
	jQuery("#header").append(e)
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

function ProductOffer() {
	pPrice > 30 && /In Stock|Available|Special/g.test(pStatus) && -1 == pName.indexOf("Open Box") && jQuery.ajax({
		method: "GET",
		url: "/landing/query/productapi3.php?ids=" + pId + "&type=product",
		success: function (e) {
			co = conflictingOffer(),e.makeOffer > 0 && e.makeOfferShow > 0 && 0 == addcode && !co ? insertMakeOffer(e.makeOfferHtml) : "" != e.coupHtml && 0 == addcode && !co & !exclB && addDynCoup(e.coupHtml), "" != e.combos && jQuery(e.combos).insertBefore("#nosto-product-prod-mobile"), "" != e.catContent && jQuery(e.catContent).insertAfter("#nosto-product-prod-mobile"), "" != e.recentlyViewed && jQuery(".productPage").append(e.recentlyViewed)
		}
	})
}

function cleanQuery(e) {
	return suggstrip = e.replace(/<b>|<\/b>/g, "").replace(":_all", ""), repIn = /\din/.exec(suggstrip), repIn && (sizeRep = repIn[0].replace(/in/g, "%22"), suggstrip = suggstrip.replace(repIn[0], sizeRep)), suggsname = e.replace(":_all", "").replace(":", " "), sStr = "/search?keyword=" + encodeURIComponent(suggstrip), squery = suggstrip.toLowerCase(), [suggsname, sStr, squery]
}

function fetchItems(e) {
	jQuery.ajax({
		method: "GET",
		url: "https://eucs2.klevu.com/cloud-search/n-search/search?ticket=klevu-14612696479213421&term=" + e + "&autoComplete=true&paginationStartsFrom=0&sortPrice=false&ipAddress=undefined&analyticsApiKey=klevu-14612696479213421&klevuShowOutOfStockProducts=false&typeOfSuggestions=cms&klevuFetchPopularTerms=false&noOfResultsAC=6&autoCompleteFilters=category&noOfResults=0&klevuSort=rel&responseType=json&resultForZero=1",
		success: function (e) {
			if (res = "", suggs = e.autoComplete, prods = e.result, suggs.length > 0) {
				res += '<div class="suggestionsContainer">';
				for (var a = 0; a < suggs.length; a++) suggstrip = suggs[a].replace(/<b>|<\/b>/g, "").replace(":_all", ""), quRes = cleanQuery(suggs[a]), sRedirect = redirects[quRes[2]], redStr = quRes[1], void 0 !== sRedirect && (redStr = sRedirect), /:_all:/g.test(suggs[a]) || (res += '<a href="' + redStr + '" class="sSuggestion">' + quRes[0] + "</a>");
				res += "</div>"
			}
			if (prods.length > 0) {
				for (res += "<div>", a = 0; a < prods.length; a++) {
					if (prods[a].category == 'vehicles') {
						ppstr = '<div class="searchSuggestItemPrice cms">Shop Vehicle</div>';
						psugimg = '/landing/home-page/AFG_Icon.png'
					} else if (/knowledge/.test(prods[a].id)) {
						ppstr = '<div class="searchSuggestItemPrice cms">Read Article</div>';
						psugimg = ''
					} else {
						ppstr = '<div class="searchSuggestItemPrice">$' + prods[a].salePrice + '</div>';
						psugimg = prods[a].image
					}
					res += '<div class="searchSuggestItem"><a href="' + prods[a].url + '" class="searchSuggestItemThumbnail"><div class="searchSuggestItemImg"><img src="' + psugimg + '"></div><div class="searchSuggestItemInfo"><div class="searchSuggestItemName">' + prods[a].name + '</div>' + ppstr + '</div></a></div>'
				}
				res += "</div>"
			}
			jQuery("#searchShelf").html('<div id="autoSuggestions" dir="auto">' + res + "</div>")
		}
	})
}

function cartOfferFromEvent(e, a, t) {
	setTimeout(function () {
		"makeOffer" == t && ProductOffer()
	}, a)
}

function triggerCartUrg(e) {
	"product" == pageInfo && cartOfferFromEvent(e, 5e3, "makeOffer")
}

function get_viewport_width() {
	return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
}

function globalFancy(e) {
	var a = get_viewport_width();
	$(".fancyB").fancybox({
		padding: 0,
		beforeShow: function () {
			this.href.indexOf("youtube") > -1 ? (ga("send", "event", "YoutubeVideos", "Open", "Mobile - " + e + " - " + this.href), this.width = .9 * a, this.height = .9 * a * .563) : (this.maxWidth = 600, this.maxHeight = 600)
		}
	})
}

function isTouchDevice() {
	return "ontouchstart" in window || "onmsgesturechange" in window
}
var bot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent),
	sonicZipHtml = "";
freeGood = !1, sonicZip = getCookie("sonic_zip"), year = getCookie("car_afg_year"), make = getCookie("car_afg_make"), model = getCookie("car_afg_model"), urlMake = make.replace(/\+/g, "-").replace(/%26/g, "&").replace(/\s+/g, "-"), urlModel = model.replace(/\+/g, "-").replace(/%26/g, "&").replace(/\s+/g, "-"), displayMake = make.replace(/\+/g, " "), displayModel = model.replace(/\+/g, " ").replace(/%26/g, "and"), addcode = 0, pOffer = 0, trigC = 0, isOpenBox = !1, fld = new Date, pageT = document.title, currurl = window.location.href, ref = document.referrer, sonic_cart = getCookie("sonic_cart_id"), pType = "", pageUrl = document.location.href, thisurl = document.location.pathname, comboProd = jQuery(".comboProduct"), otherCond = jQuery(".other-condition-products"), disPrice = jQuery("#addProductForm .mainInput"), disvehicleSpecific = jQuery("#addProductForm .addProductToCard"), outOfStockMatches = '<div class="nosto_element" id="productpage-nosto-3"></div>', shstr = '<span class="fa fa-truck"></span> <span>', valHtml = "", hideprice = 0, c = 0, cartC = 0, pflash = 0, alrOff = 0, flashHistory = {}, thisexp = "", dynamicpriceCooke = getCookie("dynamicpriceCooke"), valueAdd = "", wattNm = "", cleanres = "", dataHtml = "", reviewhtml = "", noflash = 0, redirects = {}, jquerySubmit = '<style>.offerClose{display:none}</style><a data-role="none" href="javascript:;" class="offerAdd">Redeem</a><div class="offerMsg offerInfo">Claim your additional savings!</div>', flashEndTime = getCookie("flashSaleEnd"), flashexp = new Date(flashEndTime), emailSpecial = getCookie("emailSpecial"), globalPromo = getCookie("globalPromo"), flashprint = "Minimum " + flashdiscount[3] + " order. Max " + flashdiscount[2] + " Discount. Offer can't be combined with other promotions. One time use per customer. Save this promo code to your cart for usage at a later date.", "" !== year && "" !== model && "" !== make && (document.getElementById("myVehicle").innerHTML = '<a data-ajax="false" href="/afg/' + urlMake + "/" + urlModel + "/" + year + '" data-level="L4" style="padding: 0;font-weight: 400;color: #000000;"><span>Your vehicle [<small style="text-transform:capitalize">' + displayMake + " " + displayModel + "</small>]</span></a>"), /review-write/g.test(pageUrl) && addScript("/landing/reviewSimplify5.js"), jQuery("#navigation-menu a").click(function () {
	var e = (jQuery(this).html() + " - click - " + jQuery(this).data("level")).replace(/(<([^>]+)>)/gi, "").replace(/&/g, "&");
	ga("send", "event", "Global", "Mobile Navigation Categories", e)
});
var monthArr = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
Date.prototype.addDays = function (e) {
	var a = new Date(this.valueOf());
	return a.setDate(a.getDate() + e), a
}, jQuery("#searchField").keyup(function () {
	inp = jQuery(this), q = inp.val(), fetchItems(q), width = inp.parent().width(), left = inp.position().left, jQuery("#searchShelf").css({
		width: width + "px",
		top: "-10px",
		display: "block",
		left: left + "px"
	})
}).keydown(function (e) {
	13 == e.which && (e.preventDefault(), inp = jQuery(this), q = inp.val(), redirectHref = redirects[q], redirectHref1 = redirects[capsQ], void 0 !== redirectHref ? window.location.href = redirectHref : void 0 !== redirectHref1 ? window.location.href = redirectHref1 : (redirectHref = cleanQuery(q), window.location.href = redirectHref[1]))
}), jQuery("#searchField").focus(function () {
	0 == c && jQuery.ajax({
		method: "GET",
		dataType: "text",
		url: "/landing/redirects11.js",
		success: function (e) {
			redirects = JSON.parse(e), c++
		}
	})
}), jQuery("#searchField").blur(function () {
	setTimeout(function () {
		jQuery("#searchShelf").css({
			display: "none"
		})
	}, 500)
}), !0 !== bot && (pageInfo = getPageInfo(), false && (cartPromo = triggerCartUrg(pageInfo)), false && (cartPromo), globalFancy(pageInfo))
// Function to determine whether we are on the home page
function isHomePage() {
	var pageID = $('.ui-page-active').attr('id');
	return pageID == 'public_home' || pageID == 'public_search';
}
