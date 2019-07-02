var mainNavigationFunction = (function () {
	if ('.close-nav-btn') {
		$(document).on('click', '.close-nav-btn', function (e) {
			e.preventDefault();
			$('.parent-nav').removeClass('active');
			$('.black-overlay').removeClass('active-body-cover');
		});
	}
	$(window).on('load', function () {
		$('.hamburger').click(function () {
			$('body').toggleClass('body-opa');
			$('.hero-menu').toggleClass('hero-active')
				.animate({
					left: 0
				}, 500);
			$(this).toggleClass('active');
			$('.black-overlay').addClass('active');
		});
		$('.close-hero-menu').click(function () {
			$('.hero-menu').removeClass('hero-active')
				.animate({
					left: -20 + "rem"
				}, 500);
			$('body').removeClass('body-opa');
			$('.black-overlay').removeClass('active');
		});
		$('.black-overlay').click(function () {
			$(this).removeClass('active active-body-cover');
			$('.hamburger').toggleClass('active');
			$('.hero-menu').removeClass('hero-active')
				.animate({
					left: -20 + "rem"
				}, 500);
			$('body').removeClass('body-opa');
			$('.main-navigation .parent-nav').removeClass('active');
			$('.mega-menu-parrent').find('.close-nav-btn').remove();
			$('#header-search').removeClass('active');
			$('.mob-search-icon').removeClass('active');
		});
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if (scroll >= 20) {
				$('.main-navigation').addClass('active');
				$(".header-nav-wrapper").addClass("fixed-nav");
				$('.logo-container-wrapper').addClass('active');
				$('.logo-small').addClass("active-small-logo");
				$('.parent-nav.active').addClass("scrolling");
			} else {
				$('.main-navigation').removeClass('active');
				$(".header-nav-wrapper").removeClass("fixed-nav");
				$('.logo-container-wrapper').removeClass('active');
				$('.logo-small').removeClass("active-small-logo");
				$('.parent-nav.active').removeClass("scrolling");
			}
		});
		/** SIDEBAR MENU START**/
		if ('.menu li .title') {
			$('.menu li .title').click(function (e) {
				e.preventDefault();
				$(this).closest("li").toggleClass('active');
			});
		}
		if (".menu-section") {
			$(".menu-section").click(function (e) {
				let getClassName = $(e.target).siblings().attr('class');
				if (getClassName === 'level-2') {
					$('.menu-section').append('<div class="submenu level-2">Main menu</div>');
					$('.submenu.level-2').click(function () {
						$('.menu').find('li.has-child-level-1').removeClass('active');
						$('.hero-menu').find('.submenu').remove();
					});
				}
				if (getClassName === 'level-3') {
					$('.hero-menu').find('.submenu').remove();
					$('.menu-section').append('<div class="submenu level-3">Back</div>');
					$('.submenu.level-3').click(function () {
						$('.hero-menu').find('.submenu').remove();
						$('.menu-section').append('<div class="submenu level-2">Main menu</div>');
						$('.menu').find('li.has-child-level-2').removeClass('active');
						$('.submenu.level-2').click(function () {
							$('.menu').find('li.has-child-level-1').removeClass('active');
							$('.hero-menu').find('.submenu').remove();
						});
					});
				}
				if (getClassName === 'level-4') {
					$('.hero-menu').find('.submenu').remove();
					$('.menu-section').append('<div class="submenu level-4">Back</div>');
					$('.submenu.level-4').click(function () {
						$('.hero-menu').find('.submenu').remove();
						$('.menu-section').append('<div class="submenu level-3">Back</div>');
						$('.menu').find('li.has-child-level-3').removeClass('active');
						$('.submenu.level-3').click(function () {
							$('.hero-menu').find('.submenu').remove();
							$('.menu-section').append('<div class="submenu level-2">Main menu</div>');
							$('.menu').find('li.has-child-level-2').removeClass('active');
							$('.submenu.level-2').click(function () {
								$('.menu').find('li.has-child-level-1').removeClass('active');
								$('.hero-menu').find('.submenu').remove();
							});
						});
					});
				}
			});
		}
		/** SIDEBAR MENU END**/
		if ('.mob-search-icon') {
			$('.mob-search-icon').click(function () {
				$(this).toggleClass('active');
				$('#header-search').toggleClass('active');
				$('.black-overlay').toggleClass('active-body-cover');
			});
		}
	});
})();
/*Main menu and sidebar menu end*/

function addScript(e) {
	var a = document.createElement("script");
	a.setAttribute("async", ""), a.setAttribute("src", e), document.body.appendChild(a)
}

function addStyle(e) {
	var a = document.createElement("link");
	a.setAttribute("rel", "stylesheet"), a.setAttribute("type", "text/css"), a.setAttribute("href", e), document.head.appendChild(a)
}

function addSugs() {
	jQuery.ajax({
		method: "GET",
		url: "/landing/query/oosMobile.php?ids=" + pId,
		success: function (e) {
			"" !== e && void 0 !== e && (jQuery(".productPage").prepend(e.oosSuggestions), jQuery(e.oosSuggestions).insertBefore('#nosto-product-prod-mobile'), it = 0, jQuery(".showMore").click(function () {
				var e = jQuery(".sonicComboImg");
				jQuery.each(e, function () {
					lazyimg = jQuery(this).attr("data-bg"), jQuery(this).css("background-image", "url(" + lazyimg + ")")
				}), jQuery(this).parent().find(".sonicComboItem.listHidden").removeClass("listHidden"), re = jQuery(this).attr("data-redirect"), nm = jQuery(this).attr("data-name"), jQuery(this).text(nm), 1 == it && (window.location.href = re), it = 1
			}))
		}
	})
}

function addsearchSugs() {
	jQuery('<div class="nosto_element" id="searchpage-nosto-1-copy"></div>').insertAfter(".content-category")
}

function checkPage() {
	var e = new RegExp(/filter|page|cat_f|\?ls|price_max/g).test(currurl);
	return /2267.10032/i.test(currurl) && (e = !1), e
}

function includeBrands(e) {
	return new RegExp(/Wet Sounds/g).test(e)
}

function randomExpiration() {
	var e = new Date;
	e.setDate(e.getDate() + 1);
	var a = e.getDate(),
		t = e.getMonth();
	return (t += 1) + "/" + a
}

function toTitleCase(e) {
	return e.replace(/\w\S*/g, function (e) {
		return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
	})
}

function getCatId() {
	var e = new RegExp(/\d+(?=_)/g).exec(currurl);
	return e || (e = [""]), e[0]
}

function excludedBrands(e) {
	return new RegExp(/Open Box|Damaged|Refurbished|(Open Box)|UPGRADE|FREE|Rebate|JVC|Hifonics/g).test(e)
}

function NightCheck() {
	var e = fld.getHours(),
		a = fld.getDay();
	return e > 19 || 6 > e ? "night" : (6 == a || 5 == a || 0 == a) && "weekend"
}

function flashConditions(e, a) {
	return inclMapBrands = includeBrands(e), !!(inclMapBrands && a > 150) || !!(/NVX/g.test(e) && a > 200) || !!(/Rockford/g.test(e) && a > 399) || void 0
}

function organicTraffic(e) {
	return new RegExp(/google|bing|yahoo/g).test(e)
}

function socialTraffic(e) {
	return new RegExp(/instagram|forum|club|meade|youtube/g).test(e)
}

function nth(e) {
	if (e > 3 && 21 > e) return "th";
	switch (e % 10) {
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th"
	}
}

function CheckShipping(e) {
	return ret = "", monthPat = new RegExp(/\w+(?=.?\s\d+)/g), dayPat = new RegExp(/\d+/g), monthval = monthPat.exec(e), dayval = dayPat.exec(e), dayval += nth(dayval[0]), [monthval[0].substring(0, 3) + '.', dayval]
}

function getEta(e) {
	var a = fld.getUTCFullYear(),
		t = fld.getUTCMonth(),
		r = fld.getDay(),
		i = fld.getUTCDate(),
		s = fld.getUTCHours(),
		o = fld.getUTCMinutes();
	0 > (s -= 4) && (i -= 1, s = 24 + s);
	var n = new Date(a, t, i, 10),
		c = new Date(a, t, i, s, o);
	return 5 > e && (4 == r || 5 == r || 6 == r ? e += 2 : 0 == r && e++, c > n && e++), dat = new Date(c), etatimeStamp = dat.addDays(e), etaMonth = monthArr[etatimeStamp.getMonth()], etaDay = etatimeStamp.getDate(), etaMonth + " " + etaDay + nth(etaDay)
}

function freeGoods() {
	if (pos = "left", promofree = "", promoSavings = [], promoAmt = 0, bundle = document.getElementsByClassName("bundledSavings"), bundle.length > 0) {
		if (bundles = bundle[0].getElementsByClassName("slide"), bundles.length > 5) return !1;
		if (bundles.length > 0)
			for (var e = bundles.length - 1; e >= 0; e--) promofree = bundles[e].getElementsByClassName("name")[0].innerHTML, (promofree.indexOf("FREE") > -1 || promofree.indexOf("Free") > -1 || promofree.indexOf("50%") > -1) && (pricingp = bundles[e].getElementsByClassName("itemInformation")[0].getElementsByTagName("p"), 3 == pricingp.length && (pricepres = /\d+.\d{2}/.exec(pricingp[2].innerHTML), promoSavings.push([e, Number(pricepres[0])])));
		if (promoSavings.length > 0) return promoSavings.sort(function (e, a) {
			return a[1] - e[1]
		}), promoAmt = Math.round(promoSavings[0][1]), !(promoAmt < 14) && (slideoffset = 100 * promoSavings[0][0] * -1, 1)
	}
	return !1
}

function orangeCoupon(coupon) {
	orangeadd = jQuery(".orangeButton"), orangepop = jQuery(".addToCartAccessoryRecommendationLink"), accTrigger = jQuery(".addProductToCard"), orangeadd.length > 0 && (orangepop.length > 0 ? (orangepop.html("Add to Cart <small>w/ Coupon</small>"), orangeadd.click(function () {
		addextraCode(coupon)
	})) : (accTrigger.text(" Add to Cart w/ Coupon"), accTrigger.attr("href", "/cart/add/item/" + pId + "?redeem_coupon=" + coupon)))
}

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
			orangeCoupon(coup)
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
				1 == e.success && (jQuery("#estLoader").remove(), jQuery(".estDelivery").removeClass("on").addClass("hasZip"), jQuery(".esttime").html('Est. Delivery ' + e.month.substring(0, 3) + ". " + e.date + nth(e.date)), jQuery('.estLabel').html('to ' + zip + ' <small class="changeZip">(change)</small>'), _gaq.push(["_trackEvent", "Product", "Top Price Section", "Submit Zip Code"]))
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
		e.length > 0 ? (t = CheckShipping(e.text()), etaTime = t.join(" ")) : /free 2-day/g.test(a) ? (ctaObj.shipping = '<div class="fShip">+ FREE 2-Day Shipping</div>', changezip = '', etaTime = getEta(2), sonicZipHtml = "") : a.indexOf("Special") > -1 ? (etaTime = getEta(30), sonicZipHtml = "") : a.indexOf("Available") > -1 ? etaTime = getEta(30) : (zipActive = "", etaTime = "", sonicZipHtml = '<div class="zipCta zipTrigger"><div>Get Delivery ETA</div><div>Enter Zip Code</div></div>'), getZip = '<div class="zipInputWrapper"><div class="zipContainer"><div class="zipInputC"><input id="zipInput" type="number" placeholder="Zip Code" value="' + sonicZip + '"></div><div id="zipSubmit" class="fa fa-search"></div></div></div>', ctaObj.eta = '<div class="estDelivery' + zipActive + '">' + sonicZipHtml + getZip + '<div class="estDeliveryContainer zipTrigger"><div class="esttime">Est. Delivery ' + etaTime + '</div><div class="estLabel">' + changezip + '</div></div></div>'
	}
	jQuery(".apair").length > 0 && (ctaObj.pair = '<div class="apair">A PAIR</div>');
	paidOffer !== undefined ? (discount = paidOffer[2], coupon = paidOffer[0], offer = paidOffer[1], ctaObj.vip = '<div class="ctaCoupon" data-dis="' + discount + '" data-coupon="' + coupon + '"><i class="fa fa-tags" ></i><span class="offer">' + offer + '</br>' + coupon + '</span></div>') : jQuery(".mobileVip").length > 0 ? (rewardAmt = Math.round(.1 * pPrice), rewardAmt = "$" + rewardAmt + " Rewards", ctaObj.vip = '<a class="fancyB fancybox.ajax mobileVip" href="/landing/vippopup.html"><img src="/landing/vipoffer.png"><span>' + rewardAmt + "</span></a>") : jQuery(".bundledSavingsWrap").length > 0 && (freeGood = freeGoods(), freeGood && (ctaObj.vip = '<a id="freeTag" class="freeTag" href="javascript:;"><div class="hangTag freeVersion"></div><div class="freeText">View Special<br/>Bundles</div></a>')), jQuery("#freeInstallationAccessories").length > 0 && (ctaObj.acs = '<a data-role="none" href="/landing/freeinstall2.html" class="fancyB fancybox.ajax freeinstallpr"><div class="fa fa-wrench"></div> FREE Installation Accessories Included - up to $30</a>'), jQuery(".price_row").html('<div class="wrapperCta"><div class="priceShipping">' + ctaObj.vip + '<div class="pRice">$' + pPrice + "</div>" + ctaObj.pair + ctaObj.shipping + '</div><div class="stockNDelivery"><div class="stockDelivery"><div class="stockInfo' + color + '">' + pStatus + '</div><div class="stockCondition">' + ctaObj.condition + "</div></div>" + ctaObj.eta + '</div></div><div class="promoInfo">' + ctaObj.acs + "</div></div>"), initZipBtns()
}

function prodPageActions(e, a, t, r, i) {
	/Open Box|Damaged|Refurbished|(Open Box)/g.test(t) && (isOpenBox = !0, addScript("/landing/scripts/obcondrating2.js")), redoCtaSection(), addScript("/landing/mobile-scripts/mbProd162.js"), comboProd.length > 0 && jQuery(".top-firstcon").prepend('<div class="exclusivelogo"><img src="/img/violator/Desktop_20170428_105116.png"></div>'), (/Out of Stock|Discontinued/g.test(r) || trafsource || socialTraffic || jQuery(".product_discontinued").length > 0) && addSugs(r), t.indexOf("Mechman") > -1 && i.indexOf("High Output") > -1 && addScript("/landing/scripts/mech2.js"), (i.indexOf("Amplifiers") > -1 || i.indexOf("Amps") > -1) && (subtitlestr = jQuery(".top-firstcon p").eq(0).text(), wattpt = new RegExp(/\d+(?= W RMS)|\d+(?=W RMS)|\d+(?= Watt RMS)/g), wattNm = wattpt.exec(subtitlestr), null !== wattNm && void 0 !== wattNm && wattNm[0] >= 2e3 && addScript("/landing/scripts/ampwarning2.js")), jQuery(".addToCartAccessoryRecommendationLink").click(function () {
		if (0 == cartC) {
			acsImg = jQuery("#acessoryGrid .imageContainer a");
			for (var e = acsImg.length - 1; e >= 0; e--) dataSrc = jQuery(acsImg[e]).attr("data-img"), jQuery(acsImg[e]).find("img").attr("src", dataSrc);
			addScript("/landing/mobile-scripts/mobileac10.js"), cartC++
		}
	}), dynamicpriceCooke && (flashHistory = JSON.parse(dynamicpriceCooke), void 0 !== flashHistory[e] && (thisexp = new Date(flashHistory[e].exp)));
	var s = excludedBrands(t),
		o = NightCheck();
	flashCriteria = flashConditions(t, a, i), (flashCriteria && globalDiscount < 1 && /In Stock|Available|Special/g.test(r) && !s && o || thisexp > fld) && (noflash++, "" !== dynamicpriceCooke ? checkFlashHistory(dynamicpriceCooke) : (flashHTML(), flashInfo("new"))), paypalbtn = jQuery(".buyWithPaypal"), paypalbtn.length > 0 && a > 500 && 0 == noflash && (monthly = Math.round(a / 6), jQuery(".add-to-cart").append('<br>or<a href="/landing/paypalFinancing.html" class="fancyB fancybox.ajax paypalFinanceBtn" data-role="none"><span class="txt">As low as <span style="color:#f15722">$' + monthly + "/Month</span></span></a>"), jQuery("a.paypalFinanceBtn").click(function () {
		_gaq.push(["_trackEvent", "Product", "Top Price Section", "Buy Now With Paypal Financing - Click - " + t])
	})), keepShopping = jQuery(".continueLink"), keepShopping.length > 0 && keepShopping.click(function () {
		jQuery("#nav"), jQuery("#mobile-menu-button").addClass("on"), jQuery("#navigation-menu").addClass("open")
	}), viewSpeakersFit = jQuery("#viewSpeakersFit"), void 0 !== viewSpeakersFit && null !== viewSpeakersFit && (viewSpeakersFit.attr({
		href: "/landing/query/specinfo.php",
		"data-url": "#"
	}), viewSpeakersFit.addClass("fancyB fancybox.ajax")), jQuery(".top-firstcon h2").click(function (e) {
		jQuery(this).css({
			display: "block"
		})
	})
}

function flashEnd() {
	window.location.href = currurl
}

function CountDownTimer(e, a) {
	var t, r = new Date(e);
	t = setInterval(function () {
		var e = new Date,
			i = r - e;
		if (0 > i) return clearInterval(t), void flashEnd();
		var s = '<div class="timeWrap"><div class="timeContainer">' + (Math.floor(i / 864e5), Math.floor(i % 864e5 / 36e5), Math.floor(i % 36e5 / 6e4)) + '</div><div class="timeLabel">Minutes</div></div><div class="timeWrap"><div class="timeContainer">' + Math.floor(i % 6e4 / 1e3) + '</div><div class="timeLabel">Seconds</div></div>';
		if (document.getElementsByClassName(a)[0]) {
			document.getElementsByClassName(a)[0].innerHTML = s;
		}
	}, 1e3)
}

function addMinutes(e, a) {
	return new Date(e.getTime() + 6e4 * a)
}

function priceTicker(e, a, t, r, i) {
	"flash" == i && (jQuery(".dynamicPrice").css({
		'pointer-events': 'none',
		'opacity': '0.5'
	}).addClass("inProgress"), dealamt = Math.round(pPrice - e), dealamt = "$" + dealamt, flashprice = e.toFixed(2), jQuery(".dynamicPrice .txt").text("Flash Sale in Progress")), jQuery(".pRice").html('<div class="oldprice inline">$' + pPrice + '</div><div class="priceTicker inline">$' + pPrice + "</div>");
	var s = jQuery(".priceTicker"),
		o = {
			price: pPrice
		},
		n = {
			price: e
		};
	jQuery(o).animate(n, {
		duration: 1e3,
		step: function () {
			s.text("$" + Math.round(100 * this.price) / 100)
		},
		complete: function () {
			nPr = Math.round(100 * n.price) / 100, nPr = nPr.toFixed(2), Number(s.text()) !== n.price && s.text("$" + nPr), "coupon" == i ? (jQuery("a.redeemCouponBtn").find("span.fa").removeClass("fa-spinner fa-pulse fa-fw").addClass("fa-check").html('<style type="text/css">.flyerHtml{display:none}</style>'), setTimeout(function () {
				jQuery(".fixedCtaContainer").css("bottom", "-200px")
			}, 1e3)) : (jQuery("#addProductForm .orangeButton").text("Add to Cart w/ Savings"), jQuery(".pRice").eq(1).html('<div class="oldprice inline">$' + pPrice + '</div><div class="inline">$' + nPr + "</div>"), jQuery(".price_row").prepend('<div class="flsDeal flsRunning"><div class="imgheight"></div><div class="flashInfo"><div class="svamt">You Save ' + dealamt + '</div><div class="countdown"></div></div></div>'), jQuery(".flsDeal").click(function () {
				c = confirm("Would you like to cancel the flash sale? Once cancelled, the deal will end."), 1 == c && (jQuery(".flsDeal").css("display", "none"), document.cookie = "sonic_price_offerer='';expires=Thu, 18 Dec 2013 12:00:00 UTC", document.cookie = "dynamicpriceCooke='';expires=Thu, 18 Dec 2013 12:00:00 UTC")
			}))
		}
	})
}

function adjustFlashCookie(e) {
	expirationDate = addMinutes(new Date, 60), flashHistory[pId] = {
		price: e,
		exp: expirationDate
	}, setCookie("dynamicpriceCooke", JSON.stringify(flashHistory), 360), priceTicker(e, '', '', '', "flash"), CountDownTimer(expirationDate, "countdown")
}

function calldynPrice(e, a) {
	jQuery.ajax({
		method: "GET",
		url: "/landing/query/dynamicprice.php?ids=" + e,
		success: function (e) {
			_gaq.push(["_trackEvent", "Product", "Flash Sale", pName + " for $" + e.offerprice]), "update" == a ? adjustFlashCookie(e.offerprice) : checkFlashHistory(e.offerprice)
		}
	})
}

function flashHTML() {
	"night" == NightCheck() ? jQuery(".add-to-cart").append('<br>or <a class="dynamicPrice flsDeal nightly" href="javascript:;" data-role="none"><span class="txt"><span class="fa fa-flash"></span> LATE-NIGHT DEAL</span></a>') : jQuery(".add-to-cart").append('<br>or <a class="dynamicPrice flsDeal weekend" href="javascript:;"><span class="txt"><span class="fa fa-flash"></span>  Weekend Special </span></a>')
}

function flashInfo(e) {
	jQuery(".dynamicPrice").click(function () {
		"new" == e || "update" == e ? 1 == confirm("Are you sure that you want to begin the flash sale on the " + pName + "? You will get a discount from 5-50% off this item for 1 hour. This offer cannot be combined with other discounts, bundles, etc. Simply click ok and then add to cart.") && calldynPrice(pId, e) : alert("Add this item to cart to receive the savings. Cannot be combined with other offers.")
	})
}

function checkFlashHistory(e) {
	if (void 0 == dynamicpriceCooke || "" == dynamicpriceCooke) expirationDate = addMinutes(new Date, 60), flashHistory[pId] = {
		price: e,
		exp: expirationDate
	}, setCookie("dynamicpriceCooke", JSON.stringify(flashHistory), 360), flashInfo(), priceTicker(e, "", "", "", "flash"), CountDownTimer(expirationDate, "countdown");
	else {
		if (flashHistory = JSON.parse(dynamicpriceCooke), void 0 === flashHistory[pId]) return flashHTML(), flashInfo("update"), !1;
		if (e = flashHistory[pId].price, !(thisexp > fld)) return !1;
		expirationDate = thisexp, flashInfo(), priceTicker(e, "", "", "", "flash"), CountDownTimer(expirationDate, "countdown")
	}
}

function RunFlashOffer() {
	if (_gaq.push(["_trackEvent", "Global", "Footer", "Mobile Flash Sale Popup"]), !confirm("Are you sure you want to start the Flash Sale? Get a " + flashdiscount[1] + "% discount on orders over $" + flashdiscount[3] + " order with a maximum $" + flashdiscount[2] + " discount. Offer can't be combined with other running promotions. Manufacturer exclusions apply. Redeem the savings on cart page.")) return !1;
	var e = addMinutes(new Date, 60);
	setCookie("flashSaleEnd", e, 2), jQuery(".offerCartCoupon").css("opacity", 0), setTimeout(function () {
		globalOffers(flashdiscount[0], "flash", '<div class="offerCode offerInfo">' + flashdiscount[0] + '</div><div class="globalCountdown offerInfo"></div><div class="offerMsg offerInfo">The Clock is Ticking. Make it count!</div>', flashprint, "flash"), CountDownTimer(e, "globalCountdown")
	}, 1e3)
}

function globalOffers(e, a, t, r, i) {
	return content = '<div id="offerCartCoupon" class="offerCartCoupon"><div class="offerCartContents"><a data-role="none" href="javascript:;" class="offerClose"><span class="fa fa-close"></span></a>' + t + '<div class="offerCartIcon offerInfo"><span class="fa fa-' + i + '"></span></div></div><div id="details" class="offerCartDetails">' + r + "</div></div>", jQuery("#globalPromo").html(content), globalDiscount = 1, jQuery(".offerInfo").click(function () {
		jQuery("#details").toggleClass("on")
	}), jQuery(".offerClose").click(function () {
		jQuery("#offerCartCoupon").css("display", "none"), setCookie("globalPromo", 1)
	}), "flash" != a && "flashCart" != a || CountDownTimer(flashexp, "globalCountdown"), "cart" != a && "flashCart" != a && "cartCloserCartInit" != a && "cartCloserOnCart" != a || jQuery(document).ready(function () {
		jQuery("#coupons-basic").val(e), jQuery("#show-promo").css("display", "none"), jQuery("#promo-box").css("display", "block"), jQuery(".offerAdd").click(function () {
			jQuery("#cart_form").submit()
		})
	}), "flashTrig" == a ? (flashTrig = document.getElementById("offerbtn"), void flashTrig.addEventListener("click", RunFlashOffer)) : void 0
}

function globalOffersInit(e) {
	if (conflict = conflictingOffer(), exclB = excludedBrands(pageT), flashexp > fld || "Flash_Sale" == QueryString.utm_campaign && "" == flashEndTime || "facebook" == QueryString.utm_source && "cpc" == QueryString.utm_medium && !conflict && !exclB || socialTraffic && "" == flashEndTime && !conflict && !exclB)
		if (flashexp > fld)
			if ("cart" == e) {
				var a = "The promo code " + flashdiscount[0] + " has been added to your cart";
				cpstr = jQuery(".promo-applied").text(), cpstr.indexOf(flashdiscount[0]) < 0 && (a = "<b>Hit the redeem button below</b>"), globalOffers(flashdiscount[0], "flashCart", '<style>.offerClose{display:none}</style><div class="offerCode offerInfo">' + flashdiscount[0] + '</div><div class="globalCountdown offerInfo"></div><div class="offerMsg offerInfo">' + a + "</div>", flashprint, "check")
			} else "" == globalPromo && globalOffers(flashdiscount[0], "flash", '<div class="offerCode offerInfo">' + flashdiscount[0] + '</div><div class="globalCountdown offerInfo"></div><div class="offerMsg offerInfo"><b>' + flashdiscount[1] + "% Off Flash Sale</b></div>", flashprint, "flash");
	else globalOffers(flashdiscount[0], "flashTrig", '<a href="javascript:;" id="offerbtn" class="offerAdd" data-role="none">Start Sale</a><div class="offerMsg offerInfo"><b>' + flashdiscount[1] + "% Off Flash Sale</b> - 1 Hour of shopping for great sound</div>", flashprint, "flash");
	"Company_Review_Reward" == QueryString.utm_campaign && globalOffers(cReviewCode, "companyReview", '<div class="offerCode offerInfo">' + cReviewCode + '</div><div class="offerMsg offerInfo"><b>Your $5 Gift Code</b> Eligible with any purchase</span></div>', "Thank you for reviewing our company online. As a token of appreciation here is $5 promotional code for you to enjoy savings on your audio purchase", "money")
}

function afgFallback(e) {
	jQuery('<div class="clearfix afgCustomMsg"><span class="noFitMsg">' + e + '</span></div><a data-role="none" href="' + window.location.pathname + '?afg=remove" class="shopAllFit">Shop All</a>').insertAfter(".afg-selector-mobile-general .links"), thumbs = document.getElementsByClassName("bg-white");
	for (var a = thumbs.length - 1; a >= 0; a--) {
		thumbsA = thumbs[a].getElementsByTagName("a");
		for (var t = thumbsA.length - 1; t >= 0; t--) thumbsA[t].href += "?afg=remove"
	}
}

function CategoryFunctions(e) {
	cImg = jQuery(".category-img img");
	for (var a = cImg.length - 1; a >= 0; a--) src = cImg[a].src, cImg[a].src = src.replace("thumbnail", "small");
	if (filterCheck = checkPage(), catLeafPromos = jQuery(".catLeafBanner"), catLeafPromos.length > 0 && filterCheck && catLeafPromos.css("display", "none"), catPromos = jQuery("#promoCollection"), catPromos.length > 0 ? (catPromos.parent().css({
			background: "#f3faff"
		}), promoItems = catPromos.find(".promoItem"), promoItems.length > 1 && promoItems.css({
			width: "80%",
			"margin-right": "10px"
		})) : jQuery("#buyingGuide").parent().css({
			background: "#f3faff"
		}), jQuery(".expertSnippet").click(function () {
			jQuery(this).addClass("open")
		}), spkoptions = document.getElementById("displayFitSpecs"), fitErrors = document.getElementsByClassName("afg-selector-mobile-general"), ispsk = /Speaker|Tweeter/g.test(e), void 0 !== spkoptions && null !== spkoptions && 0 == fitErrors.length) {
		spklocaobj = {}, filters = spkoptions.getElementsByTagName("a");
		for (var t = 0; t < filters.length; t++) linkTxt = filters[t].innerText, lineTxt = filters[t].parentNode.innerText, locstr = lineTxt.replace(linkTxt, "").replace(":", ""), linkhref = filters[t].href, onclass = "", '8"' == linkTxt && (linkhref = "https://www.sonicelectronix.com/cat_i1118_8-speakers.html"), ispsk ? void 0 !== spklocaobj[locstr] ? (locarr = spklocaobj[locstr], locarr = locarr.push([linkhref, linkTxt]), spklocaobj[locstr] = spkarr) : (spkarr = [], spkarr.push([linkhref, linkTxt]), spklocaobj[locstr] = spkarr) : (urlpat = new RegExp(linkhref), urlpat.test(currurl) && (onclass = " current"), filters[t].parentNode.innerHTML = '<a href="' + linkhref + '" class="' + onclass + '" data-role="none">' + linkTxt + "</a>");
		if (ispsk) {
			var r = "",
				i = "";
			for (a = {
					32: "/images/cats/32-1490829363.jpg",
					31: "/images/cats/31-1490829365.jpg",
					33: "/images/cats/33-1490829366.jpg",
					34: "/images/cats/34-1490829370.jpg",
					35: "/images/cats/35-1490829382.jpg",
					78: "/images/cats/78-1490829376.jpg",
					47: "/images/cats/47-1490829380.jpg",
					1118: "/images/cats/1118-1490829384.jpg",
					36: "/images/cats/36-1490829386.jpg",
					37: "/images/cats/37-1490829392.jpg",
					30: "/images/cats/30-1490829396.jpg",
					38: "/images/cats/38-1490829394.jpg",
					40: "/landing/speakerIcons/ten.png"
				}, spklocarr = Object.keys(spklocaobj), t = spklocarr.length - 1; t >= 0; t--) {
				spklocid = spklocarr[t].replace(/\s/g, "-"), i += '<div class="LocationComponents" id="' + spklocid + '" style="display:none">', onclass = "";
				for (var s = spklocaobj[spklocarr[t]].length - 1; s >= 0; s--) catsizelink = spklocaobj[spklocarr[t]][s][0], catsizeid = /\i(\d+)/g.exec(catsizelink), urlpat = new RegExp(catsizelink), urlpat.test(currurl) && (onclass = " current"), i += '<a href="' + catsizelink + '" data-role="none"><img data-src="' + a[catsizeid[1]] + '"> <span>Shop ' + spklocaobj[spklocarr[t]][s][1] + "</span></a>";
				i += "</div>", r += '<li><a href="javascript:;" class="spkLoc' + onclass + '" data-id="' + spklocid + '" data-role="none">' + spklocarr[t] + "</a></li>"
			}
			oldclass = "", document.getElementById("displayFitSpecs").innerHTML = r, sizeElem = document.createElement("div"), sizeElem.setAttribute("id", "sizesContainer"), sizeElem.innerHTML = i, document.getElementById("displayFitSpecs").parentNode.insertBefore(sizeElem, document.getElementById("displayFitSpecs").nextSibling), spklocs = document.getElementsByClassName("spkLoc");
			for (var o = spklocs.length - 1; o >= 0; o--) spklocs[o].addEventListener("click", function () {
				idtarget = this.getAttribute("data-id"), catimgs = document.getElementById(idtarget).getElementsByTagName("img");
				for (var e = catimgs.length - 1; e >= 0; e--) datasrc = catimgs[e].getAttribute("data-src"), catimgs[e].setAttribute("src", datasrc);
				"" !== oldclass && (document.getElementById(oldclass).style.display = "none", document.querySelector('a[data-id="' + oldclass + '"]').className = "spkLoc"), oldclass !== idtarget ? (this.className += " on", document.getElementById(idtarget).style.display = "block", oldclass = idtarget) : oldclass = ""
			})
		}
	} else(void 0 !== spkoptions || null !== spkoptions) && ispsk && fitErrors.length > 0 ? afgFallback('<span class="fa fa-info-circle"></span> Your vehicle speaker sizes have not been researched. We recommend that you confirm your speaker sizes.') : fitErrors.length > 0 && !ispsk && (void 0 == spkoptions || null !== spkoptions) && /stereo/g.test(pageUrl) && afgFallback('<span class="fa fa-info-circle"></span> Your vehicle DIN size has not been researched. We recommend that you confirm the din size.')
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

function runCart() {
	var e = brontoCart.subtotal,
		a = brontoCart.lineItems,
		t = (JSON.stringify(a), 0),
		r = jQuery(".vip_banner");
	if (addScript("/landing/mobile-scripts/mbcart61.js"), jQuery('<div id="topCheckoutWrapper" style="text-align:center;padding:10px"><a id="topCartCheckout" href="/checkout/express" data-ajax="false" data-role="none" class="orangeButton extendedButton">Proceed to checkout</a></div>').insertBefore(".step1UL"), e > 500 && (monthly = Math.round(e / 6), jQuery('<div style="clear:both"> </div><span class="paymentSeparator padding-vertical-7">or</span><a data-role="none" href="/cart/index/action/paypal_express" class="paypalFinanceBtn"><span> As low as $' + monthly + "/Month</span></a>").insertBefore("div.check-arrow-cf"), jQuery("a.paypalFinanceBtn").click(function () {
			_gaq.push(["_trackEvent", "Cart", "Body", "Checkout Button (Paypal Financing) - click"])
		})), r.length > 0) {
		for (var i = a.length - 1; i >= 0; i--) vipshippinginfo = jQuery("h2 a[href*=" + a[i].sku + "]").parent().next().find(".shipping_warning_green").text(), vipshippinginfo.indexOf("US48.") > 0 && (t += .1 * a[i].totalPrice);
		t > 0 && (t = Math.round(t), r.prepend('Your cart qualifies for <a href="/landing/vippopup.html" style="color: #f15722;" class="fancyB fancybox.ajax" data-role="none">$' + t + " Rewards!</a>"))
	}
	"exp" == QueryString.msg && (dexp = randomExpiration(), globalOffers("", "cartmsg", '<div class="offerMsg offerInfo">Savings Redeemed! Complete your order before this offer ends.</div>', "Offer expires: " + dexp + " at 11:59 pst. Offer is cannot be combined with other promotions and is subject to exclusions", "redeemed")), jQuery(".saving-price").length > 0 && (saveAmt = jQuery(".saving-price").text(), jQuery(".subtotalAmt").html('<span style="display:block;"><span style="color:#303030;">Savings: </span>' + saveAmt + "</span>")), cpstr = jQuery(".promo-applied").text(), passcode = QueryString.fillsave;
	if (passcode !== undefined) {
		if (passcode == "") {
			passcode = '5SAVER'
		};
		10 == cpstr.length && globalOffers(passcode, "cart", '<style>.offerClose{display:none}</style><div class="offerMsg offerInfo">Hit the redeem below to receive your savings!</div>', "Offer cannot be combined with other promotions")
	};
	se = jQuery(".shippingEstimate"), se.length > 0 && (sestr = se.html().replace("All items arrive", "Estimated Arrival"), se.html(sestr))
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
			"category" != a && "brand" != a || CategoryFunctions(t, a), "vehicleLandingPage" == a && ("" !== year && "" !== make && "" !== model && (loopImgArr(), jQuery('<a data-role="none" href="/landing/freeinstall2.html" class="fancyB fancybox.ajax freeInstallBanner on"><i class="fa fa-wrench"></i><b>FREE KIT & HARNESS</b> for your ' + displayMake + " " + displayModel + "</a>").insertBefore(".afg-specs-selector-stereo-inner")), videoGuide()), "category" == a && t.indexOf("Car") < 0 && t.indexOf("Marine") < 0 && addScript("/landing/scripts/vsban.js"), "search" == a && addsearchSugs(), "AddCarSpecificAccessories" == a && addScript("/landing/mobile-scripts/mbStereoAccessories9.js"), false && "cart" == a && "undefined" != typeof brontoCart && runCart()
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
		e.preventDefault(), thiselem = jQuery(this), coupon = thiselem.attr("data-code"), savings = thiselem.attr("data-savings"), thiselem.html("Saving $" + savings + ' to cart <span class="fa fa-spinner fa-pulse fa-fw"></span>'), orangeCoupon(coupon);
		salePrice = pPrice - savings, priceTicker(salePrice, "", thiselem, coupon, "coupon")
	}))
}

function ProductOffer() {
	pPrice > 30 && /In Stock|Available|Special/g.test(pStatus) && -1 == pName.indexOf("Open Box") && jQuery.ajax({
		method: "GET",
		url: "/landing/query/productapi3.php?ids=" + pId + "&type=product",
		success: function (e) {
			co = conflictingOffer(), exclB = excludedBrands(pageT), e.makeOffer > 0 && e.makeOfferShow > 0 && 0 == addcode && !co ? insertMakeOffer(e.makeOfferHtml) : "" != e.coupHtml && 0 == addcode && !co & !exclB && addDynCoup(e.coupHtml), "" != e.combos && jQuery(e.combos).insertBefore("#nosto-product-prod-mobile"), "" != e.catContent && jQuery(e.catContent).insertAfter("#nosto-product-prod-mobile"), "" != e.recentlyViewed && jQuery(".productPage").append(e.recentlyViewed)
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
			this.href.indexOf("youtube") > -1 ? (_gaq.push(["_trackEvent", "YoutubeVideos", "Open", "Mobile - " + e + " - " + this.href]), this.width = .9 * a, this.height = .9 * a * .563) : (this.maxWidth = 600, this.maxHeight = 600)
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
	_gaq.push(["_trackEvent", "Global", "Mobile Navigation Categories", e])
});
var trafsource = organicTraffic(ref),
	socialTraffic = socialTraffic(ref),
	monthArr = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
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
	13 == e.which && (e.preventDefault(), inp = jQuery(this), q = inp.val(), capsQ = toTitleCase(q), redirectHref = redirects[q], redirectHref1 = redirects[capsQ], void 0 !== redirectHref ? window.location.href = redirectHref : void 0 !== redirectHref1 ? window.location.href = redirectHref1 : (redirectHref = cleanQuery(q), window.location.href = redirectHref[1]))
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
}), !0 !== bot && (pageInfo = getPageInfo(), false && (cartPromo = triggerCartUrg(pageInfo)), false && (cartPromo || globalOffersInit(pageInfo)), globalFancy(pageInfo))
// Function to determine whether we are on the home page
function isHomePage() {
	var pageID = $('.ui-page-active').attr('id');
	return pageID == 'public_home' || pageID == 'public_search';
}

$(".scrollfix").live('pageshow', function () {
	$('#stopMobileLink').click(function () {
		var date = new Date();
		date.setTime(date.getTime() + (5 * 60 * 1000));
		document.cookie = escape('sonic_stop_mobile') + "=" + escape('1') + "; expires=" + date.toGMTString() + "; path=/";
	});

	// Toggle category list box with the listIcon button
	$('#mobile-menu-button').click(function (e) {
		// Hide all stubs
		e.preventDefault();
		e.stopPropagation();

		// Close search
		$('.searchbox').removeClass('overlay');
		$('#header').height(44);

		$('.skip-content.skip-active, .skip-link.skip-active').removeClass('skip-active');
		if (!$(this).hasClass('on')) {
			$(this).addClass('on');
			//$('.navigationIn').addClass('overlay');
			$('#navigation-menu').addClass('open');
		} else {
			$(this).removeClass('on');
			$('#navigation-menu').removeClass('open');
			//$('.navigationIn').removeClass('overlay');
		}
	});
	$('.navigationIn').click(function (e) {
		if ($(this).hasClass('overlay')) {
			$(this).removeClass('overlay');
			$('#navigation-menu').removeClass('open');
			$('#mobile-menu-button').removeClass('on');
		}
	});
	$('#navigation-menu').click(function (e) {
		e.stopPropagation();
	});

	var navList = $('#navigation-menu');
	var navOpener = '<span class="open-child"></span>';

	// navList.find('li:has(ul), li:has(h3.has-child)', this).each(function() {
	//     $(this).prepend(navOpener);
	// });
	navList.find('li.parent-has-child', this).each(function () {
		$(this).prepend(navOpener);
	});

	navList.find('.level0 a, .open-child').on('click', function (e) {
		e.stopPropagation();
		// $(this).css({"background": "#115ea7"});
		// $(this).find('.category-name').css({"color": "white"});
		$(this).parent().toggleClass('over').find('>> .menu-wrapper > ul, + .menu-wrapper > ul').slideToggle(200);
	});

	$('.skip-search').click(function (event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		if (!$('.searchbox').hasClass('overlay')) {
			$('.headerListBox').css('display', 'none');
			$('.searchbox').addClass('overlay');
			$('#header').height('auto');
			$(this).addClass('skip-active');
			$('#searchField').focus();
		} else {
			$('.searchbox').removeClass('overlay');
			$('#header').height(44);
			$(this).removeClass('skip-active');
			$('#searchField').blur();
		}
	});
	$('.searchContainer').click(function (e) {
		e.stopPropagation();
	});
	// search box close icon
	$(".hasclear").keyup(function () {
		var input = $(this);
		input.next('span').toggle(Boolean(input.val()));
	});

	$(".clearer").hide($(this).prev('input').val());

	$(".clearer").click(function () {
		$(this).prev('input').val('').focus();
		$(this).hide();
	});
});

$("#headerWrapper").data("shipEta");

/*Cookie Functionality @author :: Ishwor ~~ Please do not remove this code:::: use setupCookie() to setup the cookie, readCookie() to read the cookie, eraseCookie() to erase the cookie */
function setupCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString()
	} else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/"
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
	}
	return null
}

function eraseCookie(name) {
	setupsCookie(name, "", -1)
}
/*Cookie Functionality End **/

/*Subscription Script Code Start*/
let subscriptionPopup = document.querySelector('.subscription-popup');
let subscriptionClose = document.querySelector('.close-subscription-popup');
if (subscriptionPopup) {
	subscriptionClose.addEventListener('click', function () {
		setupCookie("subSCookie", "~~~subActive__", 7);
		subscriptionPopup.classList.remove('active');
	});
	let readCookieSubscription = readCookie("subSCookie");
	if (readCookieSubscription !== "~~~subActive__") {
		subscriptionPopup.classList.add('active');
	}
}
/*Subscription Script Code End*/

/*NEW VIOLATOR SCRIPT CODE TO MAKE POPUP */
let cpXcl = document.querySelector('#exclusions');
if (cpXcl) {
	cpXcl.addEventListener('click', function () {
		document.querySelector('.violator-popup').classList.toggle('active-violator');
		document.querySelector('.close-violator').addEventListener('click', function () {
			document.querySelector('.violator-popup').classList.remove('active-violator');
		});
	});
}
/*NEW VIOLATOR SCRIPT CODE TO MAKE POPUP END HERE */