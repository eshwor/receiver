/*Cookie Functionality @author :: Ishwor ~~ Please do not remove this code:::: use setupCookie() to setup the cookie, readCookie() to read the cookie, eraseCookie() to erase the cookie */
function setupCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString()}
else var expires="";document.cookie=name+"="+value+expires+"; path=/"}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}
return null}
function eraseCookie(name){setupsCookie(name,"",-1)}
/*Cookie Functionality End **/

/*Subscription Script Code Start*/
let subscriptionPopup = document.querySelector('.subscription-popup');
let subscriptionClose  = document.querySelector('.close-subscription-popup');
let urlafg = window.location.href;
if(urlafg.indexOf('/afg') > -1){
    subscriptionPopup.classList.add('disable-sub-popup');
}
if(subscriptionPopup){
    subscriptionClose.addEventListener('click', function(){
    setupCookie("subSCookie", "~~~subActive__", 7);
    subscriptionPopup.classList.remove('active');
});
let readCookieSubscription = readCookie("subSCookie");
if(readCookieSubscription !== "~~~subActive__"){
    subscriptionPopup.classList.add('active');
}
}
/*Subscription Script Code End*/

/*Main menu and sidebar menu start*/
(function ($) {
    if('.close-nav-btn'){
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
				.animate({left: 0}, 500);
			$(this).toggleClass('active');
			$('.black-overlay').addClass('active');
		});
		$('.close-hero-menu').click(function () {
			$('.hero-menu').removeClass('hero-active')
				.animate({left: -30 + "rem"}, 500);
			$('body').removeClass('body-opa');
			$('.black-overlay').removeClass('active');
		});
		$('.black-overlay').click(function () {
			$(this).removeClass('active active-body-cover');
			$('.hamburger').toggleClass('active');
			$('.hero-menu').removeClass('hero-active')
				.animate({left: -30 + "rem"}, 500);
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
              	$("body").addClass("scroll-active");
				$('.logo-container-wrapper').addClass('active');
				$('.logo-small').addClass("active-small-logo");
				$('.parent-nav.active').addClass("scrolling");
			} else {
				$('.main-navigation').removeClass('active');
				$(".header-nav-wrapper").removeClass("fixed-nav");
                $("body").removeClass("scroll-active");
				$('.logo-container-wrapper').removeClass('active');
				$('.logo-small').removeClass("active-small-logo");
				$('.parent-nav.active').removeClass("scrolling");
			}
        });
        
        /** SIDEBAR MENU START**/
        if('.menu li .menu-title'){
            $('.menu li .menu-title').click(function (e) {
                e.preventDefault();
                $(this).closest("li").toggleClass('active');
            });
        }

        if(".menu-section"){
            $( ".menu-section" ).click(function(e) {
                let getClassName = $(e.target).siblings().attr('class');
                if(getClassName === 'level-2'){
                    $('.menu-section').append('<div class="submenu level-2 small">Main menu</div>');
                    $('.submenu.level-2').click(function(){
                        $('.menu').find('li.has-child-level-1').removeClass('active');
                        $('.hero-menu').find('.submenu').remove();
                    });
                } 
                if (getClassName === 'level-3') {
                    $('.hero-menu').find('.submenu').remove();
                    $('.menu-section').append('<div class="submenu level-3 small">Back</div>');
                    $('.submenu.level-3').click(function(){
                        $('.hero-menu').find('.submenu').remove();
                        $('.menu-section').append('<div class="submenu level-2 small">Main menu</div>');
                        $('.menu').find('li.has-child-level-2').removeClass('active');
                        $('.submenu.level-2').click(function(){
                            $('.menu').find('li.has-child-level-1').removeClass('active');
                            $('.hero-menu').find('.submenu').remove();
                        });
                    });
                }
    
                if (getClassName === 'level-4') {
                    $('.hero-menu').find('.submenu').remove();
                    $('.menu-section').append('<div class="submenu level-4 small">Back</div>');
                    $('.submenu.level-4').click(function(){
                        $('.hero-menu').find('.submenu').remove();
                        $('.menu-section').append('<div class="submenu level-3 small">Back</div>');
                        $('.menu').find('li.has-child-level-3').removeClass('active');
                        $('.submenu.level-3').click(function(){
                            $('.hero-menu').find('.submenu').remove();
                            $('.menu-section').append('<div class="submenu level-2 small">Main menu</div>');
                            $('.menu').find('li.has-child-level-2').removeClass('active');
                            $('.submenu.level-2').click(function(){
                                $('.menu').find('li.has-child-level-1').removeClass('active');
                                $('.hero-menu').find('.submenu').remove();
                            });
                        });
                    });
                }
              });
        }

        /** SIDEBAR MENU END**/
        if('.mob-search-icon'){
            $('.mob-search-icon').click(function () {
                $(this).toggleClass('active');
                $('#header-search').toggleClass('active');
                $('.black-overlay').toggleClass('active-body-cover');
            });
        }
	});
})(jQuery);
/*Main menu and sidebar menu end*/

/*Reduce the fonts*/
function dynamicNavText() {
  let width = $(window).width();
if(width < 1180) {
   document.querySelector('.dynamic-car-text').innerHTML = " Car & Auto ";
   document.querySelector('.dynamic-home-office').innerHTML = "Office";
   document.querySelector('.dynamic-utv-text').innerHTML = "UTV";
} else {
  	document.querySelector('.dynamic-car-text').innerHTML = " Car &amp; Automotive ";
    document.querySelector('.dynamic-home-office').innerHTML = "Home &amp; Office";
 	document.querySelector('.dynamic-utv-text').innerHTML = "UTV &amp; ATV";
}
}
jQuery(window).resize(dynamicNavText);
jQuery(window).on('load', dynamicNavText);

function trim(e){return e.replace(/^\s+/,"").replace(/\s+$/,"")}
function addClass(e,t){hasClass(e,t)||(e.className=trim(e.className+" "+t))}
function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(^| )"+t+"($| )");e.className=trim(e.className.replace(a," "))}}
function toTitleCase(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}
function hasClass(e,t){var a;if("undefined"!=typeof e.className){var n=new RegExp("(^| )"+t+"($| )");a=n.test(e.className)}else a=!1;return a}
function get_viewport_height(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}
function get_viewport_width(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}
function get_scroll_offset(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}
function get_position_y(e){for(position=0;null!=e;)position+=e.offsetTop,e=e.offsetParent;return position}
function get_position_x(e){for(position=0;null!=e;)position+=e.offsetLeft,e=e.offsetParent;return position}
function newsletterQuickSignupFocus(e){"E-mail address"==e.value&&(e.value=""),addClass(e,"hasInput")}
function newsletterQuickSignupBlur(e){""==trim(e.value)&&(e.value="E-mail address",removeClass(e,"hasInput"))}
function getQueryParams(e){"undefined"!=typeof e||(e=!1);var t=e?{}:[],a="string"==typeof window.location.search?window.location.search:"";if(a.length>=1){"?"==a.charAt(0)&&(a=a.substr(1));for(var n=a.split("&"),i=0;i<n.length;++i){var r=n[i].split("=");e?t[r[0]]=r[1]:t.push({name:r[0],value:r[1]})}}
return t}
function isTouchDevice(){return"ontouchstart" in window||"onmsgesturechange" in window}
function createAccessoryShelf(){if(void 0===ac||null===ac)return!1;acpanes=ac.getElementsByClassName("pane");for(var e=dataLayer.length-1;e>=0;e--)
if(void 0!==dataLayer[e].brontoCart){cartObj=dataLayer[e].brontoCart,cartitems=cartObj.lineItems;for(var t=cartitems.length-1;t>=0;t--)acitemsarr.push(cartitems[t].sku)}
if(acpanes.length>0){for(e=0;e<acpanes.length;e++)3>aclimit&&(acitem=acpanes[e].getElementsByClassName("item"),itemlimit=0,ctaClass="",ctaCopy="Add to Cart",acitemcount=acitem.length,acitemcount>0&&(acitemindex=acitemcount-1,rando=Math.round(Math.random()*acitemindex),imageContents=acitem[rando].getElementsByTagName("img")[0].src,titleContents=acitem[rando].getElementsByClassName("title")[0].innerHTML,acid=/\d+(?=_)/g.exec(titleContents),acitemsarr.indexOf(acid[0])>-1&&(ctaClass=" added",ctaCopy="Added!"),acitemsarr.push(acid[0]),pricecontents=acitem[rando].getElementsByClassName("price")[0].innerHTML,pricestr=/\$\d+\.\d{2}/g.exec(pricecontents),newpanelitems+='<div class="acitem"><div class="acitemContainer"><a class="imgContainer" href="/viewitem.php?id='+acid[0]+'"><img src="'+imageContents+'"></a><span class="acContent"><span class="acTitle">'+titleContents+'</span><span class="acPrice">'+pricestr+'</span><span class="acBtns"><a href="#" class="ajaxAdd'+ctaClass+'" data-id="'+acid+'">'+ctaCopy+"</a></span></span></div></div>")),aclimit++;for(newacpanelContainer+=newpanelitems,newacpanelContainer+="</div>"+vehicleSection+"</div>",newacel=document.createElement("DIV"),newacel.innerHTML=newacpanelContainer,document.getElementsByClassName("productInformation")[0].parentNode.insertBefore(newacel,document.getElementsByClassName("productInformation")[0].nextSibling),document.getElementById("viewall").addEventListener("click",function(){pos=document.getElementById("productTabbedContainer").offsetTop,window.scrollTo(0,pos),jQuery('div[tabname="Accessories"] a').trigger("click")}),acitemsadd=document.getElementsByClassName("ajaxAdd"),e=acitemsadd.length-1;e>=0;e--)initAjaxBtns(acitemsadd[e])}}
function initAjaxBtns(e){e.addEventListener("click",function(e){e.preventDefault(),jQuery(this).hasClass("added")?ajaxRemove(jQuery(this).attr("data-id")):ajaxAdd(jQuery(this).attr("data-id"),jQuery(this))})}
function ajaxAdd(e,t){jQuery.ajax({url:"/cart/addMultiple",type:"POST",dataType:"json",data:{format:"json",products:[e]},success:function(a){jQuery.each([e],function(){acadded[e]=a.products[e].cartItemID}),jQuery(t).text("Added!").addClass("added"),_gaq.push(["_trackEvent","Product","Accessories","Added to Cart - "+e])}})}
function ajaxRemove(e,t){event.preventDefault(),jQuery.ajax({url:"/cart/update",type:"POST",dataType:"json",data:{format:"json",remove_selected:!0,"delete":[acadded[e]]},success:function(){jQuery(t).text("Add to Cart").removeClass("added")}})}
function addSugs(e,t){jQuery.ajax({method:"GET",url:"/landing/query/oosMobile.php?ids="+t,success:function(t){""!==t&&void 0!==t&&(jQuery(t.oosSuggestions).insertBefore(e),it=0,jQuery(".showMore").click(function(){var e=jQuery(".sonicComboImg");jQuery.each(e,function(){lazyimg=jQuery(this).attr("data-bg"),jQuery(this).css("background-image","url("+lazyimg+")")}),jQuery(this).parent().find(".sonicComboItem.listHidden").removeClass("listHidden"),re=jQuery(this).attr("data-redirect"),nm=jQuery(this).attr("data-name"),jQuery(this).text(nm),1==it&&(window.location.href=re),it=1}))}})}
function getPlaceholderCompatibility(){jQuery.support.placeholder=function(){var e=document.createElement("input");return"placeholder" in e}()}
function organicTraffic(e){var t=new RegExp(/google|bing|yahoo|instagram/g),a=t.test(e);return a}
function socialTraffic(e){var t=new RegExp(/instagram|forum|club/g),a=t.test(e);return a}
function accountMenuOn(){}
function accountMenuOff(){}
function insertAfter(e,t){e.parentNode.insertBefore(t,e.nextSibling)}
function CountDownTimer(e,t){function a(){var e=new Date,a=i-e;if(0>a)return void clearInterval(n);var l=(Math.floor(a/c),Math.floor(a%c/o),Math.floor(a%o/s)),d=Math.floor(a%s/r),u='<span class="timeWrap"><span class="timeContainer">'+l+'</span><span class="timeLabel">M</span></span><span class="timeWrap"><span class="timeContainer">'+d+'</span><span class="timeLabel">S</span></span>';document.getElementsByClassName(t)[0].innerHTML=u}
var n,i=new Date(e),r=1e3,s=60*r,o=60*s,c=24*o;n=setInterval(a,1e3)}
function addMinutes(e,t){return new Date(e.getTime()+6e4*t)}
function priceTicker(e,t,a,n,i){"flash"==i&&(jQuery(".dynamicPrice").css("pointer-events","none").addClass("inProgress"),dealamt=Math.round(pPrice-e),dealamt="$"+dealamt,flashprice=e.toFixed(2),jQuery(".dynamicPrice .txt").text("Flash Sale in Progress")),jQuery(".price h3").html('$<span class="priceTicker">'+pPrice+"</span>");var r=jQuery(".priceTicker"),s={price:pPrice},o={price:e};jQuery(s).animate(o,{duration:1e3,step:function(){r.text(Math.round(100*this.price)/100)},complete:function(){nPr=Math.round(100*o.price)/100,nPr=nPr.toFixed(2),Number(r.text())!==o.price&&r.text(nPr),jQuery("#thePrice").html("$"+nPr),"coupon"==i?(jQuery("#redeemCouponBtn span").removeClass("fa-spinner fa-pulse fa-fw").addClass("fa-check").html('<style type="text/css">.flyerHTML{display:none}</style>'),setTimeout(function(){jQuery(".dynCoupWrapper").css("bottom","-200px")},1e3),jQuery("#thePrice").html("$"+nPr+' <span class="couponCode">'+n+"</span>")):(jQuery(".addToCartAccessoryRecommendationLink").val("Add to Cart w/ Savings"),jQuery(".sideInformation").html('<span class="flsDeal"><span class="timerLabel">Save '+dealamt+'</span><span class="flashcdown"><span class="fa fa-bolt"></span><span class="cTarg"></span></span></span>'),document.getElementsByClassName("flsDeal")[0].addEventListener("click",function(){c=confirm("Would you like to cancel the flash sale? Once cancelled, the deal will end."),1==c&&(jQuery(".flsDeal").css("display","none"),document.cookie="sonic_price_offerer='';expires=Thu, 18 Dec 2013 12:00:00 UTC",document.cookie="dynamicpriceCooke='';expires=Thu, 18 Dec 2013 12:00:00 UTC",jQuery(".price h3").html('$<span class="priceTicker">'+pPrice+"</span>"))}))}})}
function adjustFlashCookie(e){expirationDate=addMinutes(new Date,60),flashHistory[pId]={price:e,exp:expirationDate},setCookie("dynamicpriceCooke",JSON.stringify(flashHistory),360),priceTicker(e,"","","","flash"),CountDownTimer(expirationDate,"cTarg")}
function calldynPrice(e,t){jQuery.ajax({method:"GET",url:"/landing/query/dynamicprice.php?ids="+e,success:function(e){_gaq.push(["_trackEvent","Product","Flash Sale",pName+" for $"+e.offerprice]),"update"==t?adjustFlashCookie(e.offerprice):checkFlashHistory(e.offerprice)}})}
function flashHTML(){jQuery("head").append('<style type="text/css">.toWishlist{display:none!important}</style>');var e=NightCheck();cl="weekend",tx='Weekend Special',"night"==e&&(cl="night",tx=" Late-Night Deal"),flashBtn='<a class="dynamicPrice flsDeal '+cl+'" href="javascript:;"><span class="txt"><span class="fa fa-flash"></span>  '+tx+"</a>",jQuery(".addProductActions").append('<div class="flashWrapper">'+flashBtn+"</div>")}
function flashInfo(e){jQuery(".dynamicPrice").click(function(){if("new"==e||"update"==e){var t=confirm("Are you sure that you want to begin the flash sale on the "+pName+"? This offer cannot be combined with other discounts and expires in an hour. Simply click ok and then add to cart.");1==t&&calldynPrice(pId,e)}else alert("Add this item to cart to receive the savings. Cannot be combined with other offers.")})}
function checkFlashHistory(e){if(dynamicpriceCooke){if(flashHistory=JSON.parse(dynamicpriceCooke),void 0===flashHistory[pId])return flashHTML(),flashInfo("update"),!1;if(e=flashHistory[pId].price,!(thisexp>fld))return!1;expirationDate=thisexp,flashInfo(),priceTicker(e,"","","","flash"),CountDownTimer(expirationDate,"cTarg")}else expirationDate=addMinutes(new Date,60),flashHistory[pId]={price:e,exp:expirationDate},setCookie("dynamicpriceCooke",JSON.stringify(flashHistory),360),flashInfo(),priceTicker(e,"","","","flash"),CountDownTimer(expirationDate,"cTarg")}
function addBuyersGuides(e){var t=document.createElement("DIV");t.className="videoGuide",videArr=[],e.indexOf("Car Stereo")>-1||e.indexOf("In-Dash")>-1?videArr.push("https://www.youtube.com/embed/9o6IJ98Q-vs?rel=0&showinfo=0&theme=light",'<img src="/img/violator/Desktop_20170815_160648.png" style="max-height:50px;margin-right:10px"><span>Car Stereo Buying Guide</span>'):e.indexOf("Big 3 Upgrade")>-1?videArr.push("https://www.youtube.com/embed/gnmXKjm3tZE?rel=0&showinfo=0&theme=light",'<span style="color:#00579d;font-weight:500;">How to Big 3 Upgrade</span> <span style="text-decoration:underline;font-weight:600">Watch Video</span>'):videArr=[],videArr.length>1&&(t.innerHTML='<a rel="nofollow" class="fancyB fancybox.iframe" href="'+videArr[0]+'">'+videArr[1]+"</a>",document.getElementsByClassName("belowTheFold")[0].parentNode.insertBefore(t,document.getElementsByClassName("belowTheFold")[0]))}
function addScript(e){var t=document.createElement("script");t.setAttribute("async",""),t.setAttribute("src",e),document.body.appendChild(t)}
function clearroto(){clearInterval(rotateslider)}
function startroto(){rotateslider=setInterval("nextSlide()",4500)}
function nextSlide(){curentSlide=slideWrapper.getElementsByClassName("on")[0],void 0!==curentSlide.nextElementSibling&&null!==curentSlide.nextElementSibling?curentSlide.nextElementSibling.className+=" on":slideWrapper.children[0].className+=" on",curentSlide.className="sliderWrapper"}
function powerWarning(e){e.indexOf("Amplifiers")>-1&&(subtitlestr=document.getElementsByTagName("h2")[0].innerHTML,wattpt=new RegExp(/\d+(?= W RMS)|\d+(?=W RMS)|\d+(?= Watt RMS)/g),wattNm=wattpt.exec(subtitlestr),null!==wattNm&&void 0!==wattNm&&wattNm[0]>=2e3&&addScript("/landing/scripts/ampwarning2.js"))}
function excludedBrandsStrict(e){var t=new RegExp(/Open Box|Damaged|Refurbished|(Open Box)|UPGRADE|FREE|Rebate|JVC/g),a=t.test(e);return a}
function NightCheck(){var e=fld.getHours(),t=fld.getDay();return e>=18||6>e?"night":6==t||0==t?"weekend":!1}
function includeBrands(e){var t=new RegExp(/Klipsch/g),a=t.test(e);return a}
function addextraCode(e){setTimeout(function(){jQuery.ajax({url:"/cart/update",type:"POST",dataType:"json",data:[{name:"coupons",value:e}],success:function(){}})},1800)}
function addDynCoup(e){return"popup"==e?'':(jQuery(".page").append('<div class="dynCoupWrapper">'+e+"</div>"),void jQuery("a#redeemCouponBtn").click(function(e){e.preventDefault(),thiselem=jQuery(this),coupon=thiselem.attr("data-code"),savings=thiselem.attr("data-savings"),thiselem.html("Saving $"+savings+' to cart <span class="fa fa-spinner fa-pulse fa-fw"></span>'),orangeadd=jQuery(".addProductToCard"),accTrigger=jQuery(".addToCartAccessoryRecommendationLink"),orangeadd.length>0&&(salePrice=pPrice-savings,priceTicker(salePrice,"#redeemCouponBtn",thiselem,coupon,"coupon"),accTrigger.length>0?(orangeadd.val("Add to Cart w/ Coupon"),orangeadd.click(function(){addextraCode(coupon)})):(orangeadd.val("Add to Cart w/ Coupon"),inputElem=document.createElement("INPUT"),inputElem.setAttribute("value",coupon),inputElem.setAttribute("name","redeem_coupon"),inputElem.setAttribute("type","hidden"),document.getElementById("toCart").parentNode.insertBefore(inputElem,document.getElementById("toCart"))))}))}
function productPageActions(e,t,a){productQueryData='';if(inclMapBrands=includeBrands(pageTitle),paypalBtn=document.getElementsByClassName("buyWithPaypal"),paypalBtn.length>0&&pPrice>500&&(monthly=Math.round(pPrice/6),paypalfinanceHtml='<a href="/landing/paypalFinancing.html" class="fancyB fancybox.ajax paypalFinancing"><span> As low as <span style="color:#f15722">$'+monthly+"/Month</span></span></a>",elem=document.createElement("DIV"),elem.className="paypalFinanceContainer",elem.innerHTML=paypalfinanceHtml,document.getElementsByClassName("toWishlist")[0].parentNode.insertBefore(elem,document.getElementsByClassName("toWishlist")[0].nextSibling),elem.addEventListener("click",function(){_gaq.push(["_trackEvent","Product","Top Price Section","Buy Now With Paypal Financing - Click - "+e])})),transit=document.getElementsByClassName("timeInTransit"),topstatus.length>0&&(statuses=topstatus[0].innerHTML),isdisco=statuses.indexOf("Discontinued"),isooos=statuses.indexOf("Out of Stock"),noRecc=!1,((isooos>-1||isdisco>-1)&&null!==maininfo||!/In Stock/g.test(statuses)&&null!==maininfo&&!/Sonic/g.test(ref)&&""!==ref)&&(addSugs(document.getElementById("content_wrapper"),t),noRecc=!0),orangeAccess=document.getElementsByClassName("addToCartAccessoryRecommendationLink"),orangeAccess.length>0){orangeAccess[0].addEventListener("click",function(){addScript("/landing/desktop-scripts/desktopAc2.js")}),acsImg=jQuery("#acessoryGrid .imageContainer a");for(var n=acsImg.length-1;n>=0;n--)dataSrc=jQuery(acsImg[n]).attr("data-img"),jQuery(acsImg[n]).find("img").attr("src",dataSrc)}
powerWarning(a),0!=combo.length||noRecc||createAccessoryShelf(),customerac=document.getElementsByClassName("userFirstName"),e.indexOf("Open Box")>-1&&addScript("/landing/scripts/obcon1.js"),e.indexOf("Mechman")>-1&&a.indexOf("High Output")>-1&&addScript("/landing/scripts/mech2.js"),checkfit.length>0&&(checkfit[0].className+=" on"),null!==freeKit&&void 0!==freeKit&&(freeKit.className="on",freeKit.getElementsByTagName("a")[0].href="/landing/freeinstall2.html"),addBuyersGuides(a),nightFlashBtn=document.getElementsByClassName("dynamicPrice"),exclB=excludedBrandsStrict(pageTitle+e),-1==isooos&&-1==isdisco&&-1==e.indexOf("Open Box")&&pPrice>30&&setTimeout(function(){jQuery.ajax({method:"GET",url:"/landing/query/desktopProdApi.php?ids="+t,success:function(e){productQueryData=e;itemType=e.type,comboHtml=e.combos,coupHtml=e.coupHtml,seriesOptions=e.series,""!==comboHtml&&(relatedSearches=document.getElementsByClassName("relatedSearches")[0],comboElem=document.createElement("DIV"),comboElem.innerHTML=comboHtml,relatedSearches.parentNode.insertBefore(comboElem,relatedSearches)),categoryHtml=e.catContent,""!==categoryHtml&&(adSenseContainer=document.getElementsByClassName("adSenseContainer")[1],categoryElem=document.createElement("DIV"),categoryElem.innerHTML=categoryHtml,adSenseContainer.parentNode.insertBefore(categoryElem,adSenseContainer.nextSibling)),""!==seriesOptions&&(productDescription=document.getElementsByClassName("description")[0],seriesContainer=document.createElement("DIV"),seriesContainer.innerHTML=seriesOptions,seriesContainer.className="viewSeries",productDescription.parentNode.insertBefore(seriesContainer,productDescription.nextSibling)),""===coupHtml||0!=priceHidden.length||0!=nightFlashBtn.length||0!=makeOffer.length||exclB||addDynCoup(coupHtml)
var trignow=new Date;hours=trignow.getUTCHours();calihours=hours-7;if(calihours>14){addScript('/landing/desktop-scripts/pAbandonement1.js')}}})},4500),dynamicpriceCooke&&(flashHistory=JSON.parse(dynamicpriceCooke),void 0!==flashHistory[t]&&(thisexp=new Date(flashHistory[t].exp))),ntime=NightCheck(),(inclMapBrands&&pPrice>150&&statuses.indexOf("Out of Stock")<0&&0==makeOffer.length&&0==priceHidden.length&&!exclB&&ntime||thisexp>fld)&&(void 0!==dynamicpriceCooke?checkFlashHistory(dynamicpriceCooke):(flashHTML(),flashInfo("new"))),viewSpeakersFit=document.getElementById("viewSpeakersFit"),void 0!==viewSpeakersFit&&null!==viewSpeakersFit&&(viewSpeakersFit.href="/landing/query/specinfo.php",viewSpeakersFit.className="fancyB fancybox.ajax",viewSpeakersFit.setAttribute("data-url","#")),reviewCta=document.getElementsByClassName("averageAttributionRating"),reviewCta.length>0&&(reviewCta[0].innerHTML='<style type="text/css">span.giftCardReview { display: inline-block; padding: 10px; border-radius: 6px;}span.cardText { display: block; font-size: 14px; color: #00579d; margin: 0 0 10px;}span.cardImg { display: inline-block; margin-right: 15px;}span.reviewGifts { display: inline-block; vertical-align: top;}span.cardTitle { font-weight: 500; font-size: 18px; display: block; margin: 0 0 10px;}.cardImg img { max-height: 90px;}</style><span class="giftCardReview"><span class="cardImg"><img src="/themes/transitional/images/footer/moneySavings.png"></span><span class="reviewGifts"><span class="cardTitle">Each review gets you:</span><span class="cardText">$100 Store Gift Giveaway Entry</span><span class="cardText">$1 SonicBux</span><span class="cardText"><a href="/review-write?product_id='+t+'" class="orangeButton">Review this product</a></span></span></span>')}
function couponTrig(){function e(){0==a?(t.getElementsByTagName("tr")[1].style.display="table-row",a=1):(t.getElementsByTagName("tr")[1].style.display="none",a=0)}
var t=document.querySelectorAll("table[style|=margin]")[1],a=0;if(void 0!==t){t.getElementsByTagName("tr")[1].style.display="none";var n=t.getElementsByTagName("tr")[0];n.className="couponTrig",n.addEventListener("click",e)}}
function initNosto(){var name="nostojs";window[name]=window[name]||function(cb){(window[name].q=window[name].q||[]).push(cb)};nostojs.init("sonicnew");(function(){})();nostojs(function(api){var request=api.createRecommendationRequest();request.addElements(["live-copy-1"]);request.loadRecommendations()})}
function cartFunctions(){var e=[],t=0,a=0,n=document.getElementsByClassName("vip_banner");eta=document.getElementsByClassName("eta"),eta.length>0&&(etaa=eta[0].parentNode.innerHTML,etaar=etaa.replace("All items arrive","Estimated arrival"),eta[0].parentNode.innerHTML=etaar);for(var i=dataLayer.length-1;i>=0;i--)"cart"==dataLayer[i].pageType&&(e=dataLayer[i].cartItems);if(e.length>0){for(var i=e.length-1;i>=0;i--)t+=e[i].price*e[i].quantity,vipshippinginfo=document.querySelectorAll('a[href^="/item_'+e[i].id+'"]')[0].parentNode.parentNode.nextElementSibling,void 0!==vipshippinginfo&&null!==vipshippinginfo&&(vipTxt=vipshippinginfo.innerText,vipTxt.indexOf("US48.")>0&&(a+=e[i].price*e[i].quantity*.1));pBtn=document.getElementsByClassName("check-out-with-paypal-btn"),cBtn=document.getElementsByClassName("checkoutBtn"),monthly=Math.round(t/6),paypalfinanceHtml='<a href="/cart/index/action/paypal_express" class="paypalFinancing"><span> As low as $'+monthly+"/Month</span></a>",pBtn.length>0&&cBtn.length>0&&t>500&&(from=qs.from,elem=document.createElement("DIV"),elem1=document.createElement("DIV"),elem.className="cartPaypalFinanceContainer",elem1.innerHTML=paypalfinanceHtml,elem1.className="cartPaypalFinanceContainer","popup"==from&&(elem1.setAttribute("id","paypalCreditBtn"),cBtn[0].parentNode.insertBefore(elem1,cBtn[0]),elem1.addEventListener("click",function(){_gaq.push(["_trackEvent","Cart","Body","Checkout Button (Paypal Financing) - click"])})),elem.innerHTML="<span>or</span>"+paypalfinanceHtml,pBtn[0].parentNode.insertBefore(elem,pBtn[0].nextSibling),elem.addEventListener("click",function(){_gaq.push(["_trackEvent","Cart","Body","Checkout Button (Paypal Financing) - click"])})),couponTrig();document.getElementsByClassName("error");document.querySelectorAll('a[href^="/cart/update/removeCoupon/"]').length>0&&4==document.getElementsByClassName("subtotal_rows").length&&document.getElementsByClassName("subtotal_rows")[1].getElementsByTagName("td")[1].setAttribute("style","color:#f15722;font-weight:600"),a>0&&n.length>0&&(a=Math.round(a),ht='Your order qualifies for <a href="/landing/vippopup.html" class="fancyB fancybox.ajax vipCart" data-role="none">$'+a+" Rewards!</a> ",htm=n[0].innerHTML,n[0].innerHTML=ht+htm),addScript("/landing/desktop-scripts/desktopCart53.js")}else{jQuery('<div class="nosto_element" id="live-copy-1"> </div>').insertAfter('#shopping_cart_page');initNosto()}}
function afgFallback(e,t){e.innerHTML='<div class="clearfix afgCustomMsg"><a href="'+window.location.pathname+'?afg=remove" class="shopAllFit">Shop All</a><span class="noFitMsg">'+t+"</span></div>",thumbs=document.getElementsByClassName("catThumbCell");for(var a=thumbs.length-1;a>=0;a--){thumbsA=thumbs[a].getElementsByTagName("a");for(var n=thumbsA.length-1;n>=0;n--)thumbsA[n].href+="?afg=remove"}}
function speakerFilters(e){if(spkoptions=document.getElementsByClassName("vsSpeakerOptions"),fitErrors=document.getElementsByClassName("vsError"),fitDefault=document.getElementsByClassName("defaultMessage"),spkoptions.length>0&&0==fitErrors.length&&0==fitDefault.length){spklocaobj={},ispsk=/Speaker|Tweeter/g.test(e),filters=spkoptions[0].getElementsByTagName("a");for(var t=0;t<filters.length;t++)onclass="",linkTxt=filters[t].innerText,lineTxt=filters[t].parentNode.innerText,locstr=lineTxt.replace(linkTxt,"").replace(":",""),linkhref=filters[t].href,'8"'==linkTxt&&(linkhref="https://www.sonicelectronix.com/cat_i1118_8-speakers.html"),ispsk?void 0!==spklocaobj[locstr]?(locarr=spklocaobj[locstr],locarr=locarr.push([linkhref,linkTxt]),spklocaobj[locstr]=spkarr):(spkarr=[],spkarr.push([linkhref,linkTxt]),spklocaobj[locstr]=spkarr):(urlpat=new RegExp(linkhref),urlpat.test(pageUrl)&&(onclass=" current"),filters[t].parentNode.innerHTML='<a href="'+linkhref+'" class="'+onclass+'">'+linkTxt+"</a>");if(ispsk){locGroups="",sizeshtml="",sizeimgarray={},sizeimgarray[32]="/landing/speakerIcons/tweeter.png",sizeimgarray[31]="/landing/speakerIcons/threefive.png",sizeimgarray[33]="/landing/speakerIcons/four.png",sizeimgarray[34]="/landing/speakerIcons/fivetwofive.png",sizeimgarray[35]="/landing/speakerIcons/sixsevenfive.png",sizeimgarray[78]="/landing/speakerIcons/six.png",sizeimgarray[47]="/landing/speakerIcons/sixfive.png",sizeimgarray[1118]="/landing/speakerIcons/eight.png",sizeimgarray[36]="/landing/speakerIcons/foursix.png",sizeimgarray[37]="/landing/speakerIcons/fiveseven.png",sizeimgarray[30]="/landing/speakerIcons/sixnine.png",sizeimgarray[40]="/landing/speakerIcons/ten.png",sizeimgarray[38]="/landing/speakerIcons/sixeight.png",spklocarr=Object.keys(spklocaobj);for(var t=spklocarr.length-1;t>=0;t--){spklocid=spklocarr[t].replace(/\s/g,"-"),sizeshtml+='<div class="LocationComponents" id="'+spklocid+'" style="display:none">',catlinkstr="",onclass="";for(var a=spklocaobj[spklocarr[t]].length-1;a>=0;a--)coaxialind=-1,catsizelink=spklocaobj[spklocarr[t]][a][0],catsizeid=/\i(\d+)/g.exec(catsizelink),urlpat=new RegExp(catsizelink),urlpat.test(pageUrl)&&(onclass=" current"),sizeshtml+='<a href="'+catsizelink+'"><img data-src="'+sizeimgarray[catsizeid[1]]+'"> <span>Shop '+spklocaobj[spklocarr[t]][a][1]+"</span></a>";sizeshtml+="</div>",locGroups+='<li><a href="javascript:;" class="spkLoc'+onclass+'" data-id="'+spklocid+'">'+spklocarr[t]+"</a></li>"}
oldclass="",document.getElementsByClassName("vsSpeakerOptions")[0].innerHTML="<ul>"+locGroups+'</ul><div style="clear:both;"></div><div id="sizesContainer">'+sizeshtml+"</div>",spklocs=document.getElementsByClassName("spkLoc");for(var n=spklocs.length-1;n>=0;n--)spklocs[n].addEventListener("click",function(){idtarget=this.getAttribute("data-id"),catimgs=document.getElementById(idtarget).getElementsByTagName("img");for(var e=catimgs.length-1;e>=0;e--)datasrc=catimgs[e].getAttribute("data-src"),catimgs[e].setAttribute("src",datasrc);""!==oldclass&&(document.getElementById(oldclass).style.display="none",document.querySelector('a[data-id="'+oldclass+'"]').className="spkLoc"),oldclass!==idtarget?(this.className+=" on",document.getElementById(idtarget).style.display="block",oldclass=idtarget):oldclass=""})}}else spkoptions.length>0&&fitErrors.length>0?afgFallback(fitErrors[0],'<span class="fa fa-info-circle"></span> Your vehicle speaker sizes have not been researched. We recommend that you confirm your speaker sizes.'):fitDefault.length>0&&spkoptions.length>0&&afgFallback(fitDefault[0],'<span class="fa fa-info-circle"></span> Your vehicle DIN size has not been researched. We recommend that you confirm the din size.')}
function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}
function InsertImg(e,t){jQuery(e).css({background:"#eef7fe url("+t+") no-repeat left",padding:"0 10px 0 120px",position:"relative",top:"0"}).find("h1").css({margin:"0","line-height":"65px",padding:"0px"})}
function loopImgArr(e,t){void 0!==t&&null!==t&&(make=capitalizeFirstLetter(t[2]),model=capitalizeFirstLetter(t[3])),rmake=make.replace(/\+/g," "),rmodel=model.replace(/\+/g," "),jQuery.getJSON("https://spreadsheets.google.com/feeds/list/1SBjNkU_KtHrU04gT0YpAGaXqKLhxW2FVXwHHE0KhoDk/1/public/values?alt=json",function(t){if(colArr=t.feed.entry,"ym"==e){for(var a=colArr.length-1;a>=0;a--)
if(colArr[a].gsx$make.$t==rmake&&colArr[a].gsx$model.$t==rmodel)return InsertImg(".vehicle-page-heading",colArr[a].gsx$urlsmall.$t),!1}else for(var a=colArr.length-1;a>=0;a--)
if(colArr[a].gsx$make.$t==rmake&&colArr[a].gsx$model.$t==rmodel&&colArr[a].gsx$year.$t==year)return InsertImg(".vehicle-heading",colArr[a].gsx$urlsmall.$t),!1})}
function getPageLocation(){for(var e=0;e<dataLayer.length;e++)dataLayer[e].id&&(pId=dataLayer[e].id,pName=dataLayer[e+1].name,pCategory=dataLayer[e+1].pageCategory,pPrice=dataLayer[e+1].price,false&&productPageActions(pName,pId,pCategory)),dataLayer[e].pageType&&(pType=dataLayer[e].pageType,"vehicleLandingPage"==pType&&void 0!==cyear&&void 0!==cmake&&void 0!==cmodel&&(loopImgArr(),freetg=document.getElementsByClassName("afg-specs-selector-header-inner2"),freetg.length>0&&(el=document.createElement("A"),el.href="/landing/freeinstall2.html",el.className="fancyB fancybox.ajax freeInstallBanner on",el.innerHTML='<b><span class="fa fa-wrench"></span> FREE KIT AND HARNESS </b> for your '+cdisplayMake+" "+cdisplayModel,freetg[0].parentNode.insertBefore(el,freetg[0]),freetg[0].parentNode.style.padding="35px 0 15px 0")),"vehicle"==pType&&(afgPath=window.location.pathname,afgPath=afgPath.split("/"),4==afgPath.length&&loopImgArr("ym",afgPath),h1=document.getElementsByClassName("vehicle-page-heading")[0].getElementsByTagName("h1")[0],/(s|S)peaker/g.test(pageUrl)?(newh1=h1.innerHTML.replace("Audio &amp; Upgrades","Speaker Upgrades"),h1.innerHTML=newh1):/(r|R)adio|(s|S)tereo|(d|D)ash|(h|H)ead/g.test(pageUrl)&&(newh1=h1.innerHTML.replace("Audio &amp; Upgrades","Stereo Upgrades"),h1.innerHTML=newh1)),"AddCarSpecificAccessories"==pType&&qs.cart_item_id>0&&addScript("/landing/desktop-scripts/stereoAccessories53.js"),"cart"==pType&&false&&cartFunctions(),"category"!=pType&&"brand"!=pType||speakerFilters(dataLayer[e].pageCategory))}
function removeWhiteSpace(e){for(var t=e.childNodes,a=t.length-1;a>=0;a--){var n=t[a];3==n.nodeType&&e.removeChild(n)}}
function bindFixedNavigation(){function e(){var e=i.scrollTop();e>c?a():t()}
function t(){s.removeClass("fixedState")}
function a(){s.addClass("fixedState")}
var n=jQuery,i=n(window),r=document.body,s=n(r),o=n(".header-language-background"),c=o.height();n(document.getElementById("mainWrapper"));i.scroll(e)}
function touchDeviceCheck(){return"ontouchstart" in document.documentElement&&!win8TouchDetection()}
function win8TouchDetection(){var e=navigator.userAgent,t=e.indexOf("Windows NT 6.2"),a=e.indexOf("ARM"),n=e.indexOf("Chrome"),i=e.indexOf("Firefox");return t>-1&&(n>-1||i>-1)&&-1==a?!0:!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}
function backToTopController(){function e(e){e.preventDefault(),i.scrollY(0,1600,void 0)}
var t=jQuery,a=document.getElementById("backToTop"),n=t(a),i=new Animate(window);n.click(e)}
function loadYoutubeThumbnail(e,t){return t||(t="default"),"//img.youtube.com/vi/"+e+"/"+t+".jpg"}
function processYoutubeVideoArray(e){for(var t=[],a=0,n=e,i=n.length;i>a;a++){var r=n[a];$(r.divID);r.placeholderImage=loadYoutubeThumbnail(r.videoID,"hqdefault"),r.element=document.getElementById(r.divID),t.push(r)}
return t}
function insertYoutubeScript(){var e="//www.youtube.com/iframe_api",t=document.createElement("script"),a=document.head||document.getElementsByTagName("head")[0];t.src=e,a.appendChild(t)}
function insertYoutubeImages(e){for(var t=jQuery,a=0,n=e,i=n.length;i>a;a++){var r=n[a],s=n[a].element,o=t(s),c=document.createElement("img");c.src=r.placeholderImage,s.appendChild(c),o.click(function(e){return function(){createYoutubeVideo(e)}}(r))}}
function createYoutubeVideo(e){new YouTubeVideo(e)}
function loadFnIinitialization(){for(var e=0,t=loadFnArray.length;t>e;e++){var a=loadFnArray[e],n=window[a];n&&"function"==typeof n&&n()}}
function scrollToLocation(e,t){var a=getScrollLocation(e,t);window.scrollTo(0,a)}
function getScrollLocation(e,t){var a=document.getElementById(e),n=a.offsetTop-(t+8);return n}
function getDocumentOffset(e,t){function a(e,t,n){var i=e[t],r=e.offsetParent;return isNaN(i)||(n+=i),r?a(r,t,n):n}
"Top"==t&&"Left"==t||(t="Top");var n=0,i="offset"+t;return a(e,i,n)}
function gEvent(e,t,a,n,i){function r(e,t,a,n,i){var r=e,o=t,c=a+" - "+n;if(!l)var l=s;void 0!=i&&null!=i&&(c+=" - "+i),l(r,o,c)}
function s(e,t,a){_gaq.push(["_trackEvent",e,t,a])}
e&&t&&a&&n&&r(e,t,a,n,i)}
function gQueue(e){function t(e){_gaq.push(e)}
_gaq&&t(e)}
function bindGAnchorEvent(e,t,a,n,i,r){var s=e[0],o=function(e,t,a,n,i,r){return function(s){s.target=e,gEvent(t,a,n,i,r),gAnchorEvent(s)}}(s,t,a,n,i,r);e.click(o)}
function bindGModalEvent(e,t,a,n,i,r,s,o,c,l,d){var u=e[0],p=function(e,t,a,n,i,r,s,o,c,l,d){return function(u){u.target=e,gEvent(i,r,s,o,c),anchorClickModal(u,t,a,n,l,d)}}(u,t,a,n,i,r,s,o,c,l,d);e.click(p)}
function bindGSubmitButtonEvent(e,t,a,n,i,r,s){var o=function(e,t,a,n,i,r){return function(s){gEvent(t,a,n,i,r),gSubmitEvent(s,e)}}(t,a,n,i,r,s);e.click(o)}
function gSubmitEvent(e,t){if(ga.create){e&&e.preventDefault&&e.preventDefault();var a=function(e){return function(){e.submit()}}(t);gQueue(a)}}
function gAnchorEvent(e){if(ga.create){e&&e.preventDefault&&e.preventDefault();var t=e.target,a=t.href,n=2==e.which||"_blank"==t.getAttribute("target");gNavigateToUrl(a,n)}}
function gNavigateToUrl(e,t){var a=function(){window.location=e},n=function(){window.open(e)},i=t?n:a,r=function(){return i}(e);gQueue(r)}
var menu_timeouts=[null,null,null,null,null,null,null,null,null],IE6=navigator.userAgent.indexOf("MSIE 6")>=0,loadFnArray=[],touchDevice=void 0,_gaq=_gaq||[],CookieManager=function(e){function t(e){if(e){for(var t in r)e[t]||(e[t]=r[t]);i=e}else i=r}
function a(e,t,a){if(e){var n=new Date;a=(new Date).getTime()+864e5*(a||i.defaultDuration),n.setTime(a),1==i.escapeValue&&(t=escape(t)),"string"!=typeof t&&"number"!=typeof t&&(t=JSON.stringify(t)),e=e+"="+t,n=";expires="+n.toGMTString(),document.cookie=e+n+(";path="+i.path)+(";domain="+i.domain)+(1!=i.secure?"":";secure=true;")}}
function n(){for(var e=document.cookie.split(/[;]{1}[ ]?/),t=[],a=0,n=e.length;n>a;a++){var i=new s(e[a]);t.push(i)}
return t}
var i=void 0,r={escapeValues:!1,defaultDuration:1,path:"/",domain:document.location.host,secure:!1};t(e),this.set=a,this.get=function(e){for(var t=n(),a=0,i=t.length;i>a;a++){var r=t[a];if(r.key==e)return r}
return!1},this.remove=function(e){a(e,"",-1)},this.list=n,this.setConfig=t;var s=function(e){e=e.split("="),this.key=e[0],this.value=e[1]}},cookieMonster=new CookieManager;myMenu=document.getElementsByClassName("account_link")[0],myMenu.addEventListener("mouseover",accountMenuOn),myMenu.addEventListener("mouseout",accountMenuOff);var cyear=cookieMonster.get("car_afg_year").value,qs={},querystringArr=getQueryParams(),pageUrl=window.location.href,pageTitle=document.title,customerac,ref=document.referrer,bot=/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent),mixmatch=cookieMonster.get("mixmatch").value,cmake=cookieMonster.get("car_afg_make").value,compareChart=document.querySelectorAll('table[width="700"]'),addcount=0,cmodel=cookieMonster.get("car_afg_model").value,urlMake="",urlModel="",freePromo=0,dynamicpriceCooke=cookieMonster.get("dynamicpriceCooke").value,flashHistory={},thisexp="",lsitm=document.getElementsByClassName("other-condition-products"),bundle=document.getElementsByClassName("bundledSavings"),makeOffer=document.getElementsByClassName("yellowButton"),priceHidden=document.getElementsByClassName("makeOfferHead"),onsale=document.getElementsByClassName("productSaleBanner"),combo=document.getElementsByClassName("comboProduct"),displayModel="",displayMake="",dismiss=cookieMonster.get("vioDismiss").value,afgexists,wattNm="",pMatch="",jspromoContent="",isdisco="",isooos="",checkfit=document.getElementsByClassName("checkVehicleFit"),freeKit=document.getElementById("freeInstallationAccessories"),maininfo=document.getElementById("mainInformation"),promoc=0,c=0,redirects={},topstatus=document.getElementsByClassName("topInformation"),statuses="",fld=new Date,flashEndTime=cookieMonster.get("flashSaleEnd").value,flashexp=new Date(flashEndTime),socialtraffic=socialTraffic(ref),vehicleSection="",acadded={},newacpanelContainer='<div class="reccomendedAccessories"><div class="reccomendedTitle">Recommended Accessories <a class="view" href="javascript:;" id="viewall">View All <span class="fa fa-angle-right"></span></a></div><div class="acitemsContainer">',newpanelitems="",ac=document.getElementById("accessoryToolsAndProducts"),acitemsarr=[],aclimit=0,cartObj="",cartitems="";if(void 0!==cyear&&void 0!==cmake&&void 0!==cmodel&&(curlMake=cmake.replace(/\+/g,"-").replace(/%26/g,"&").replace(/\s+/g,"-"),curlModel=cmodel.replace(/\+/g,"-").replace(/%26/g,"&").replace(/\s+/g,"-"),cdisplayMake=cmake.replace(/\+/g," "),cdisplayModel=cmodel.replace(/\+/g," ").replace(/%26/g,"and"),afgexists=document.getElementsByClassName("year-make"),afgexists.length>0&&(afgexists[0].innerHTML='<a href="/afg/'+curlMake+"/"+curlModel+"/"+cyear+'">'+cyear+" "+cdisplayMake+"</a>"),afgSelec=document.getElementsByClassName("vs_title"),afgSelec.length>0&&afgSelec[0].innerHTML.indexOf("Stereos")>-1&&(bguide=document.createElement("DIV"),bguide.innerHTML='<a href="https://www.youtube.com/embed/9o6IJ98Q-vs?rel=0&amp;showinfo=0&amp;theme=light&amp;iv_load_policy=3" class="fancyB fancybox.iframe catleafvid"><i class="fa fa-video-camera" aria-hidden="true"></i> Car Stereo Buying Guide</a></span>',afgSelec[0].parentNode.insertBefore(bguide,afgSelec[0]))),querystringArr.length>0)
for(var i=querystringArr.length-1;i>=0;i--)qs[querystringArr[i].name]=querystringArr[i].value;/review-write/g.test(pageUrl)&&addScript("/landing/reviewSimplify6.js");var slides=document.getElementsByClassName("sliderWrapper"),slideWrapper=document.getElementsByClassName("promoSlider")[0];if(slides.length>1){var rotateslider=setInterval("nextSlide()",4500);slideWrapper.addEventListener("mouseover",clearroto),slideWrapper.addEventListener("mouseout",startroto)}
var blsides=document.getElementsByClassName("slide").length,bundles=document.getElementById("bundledSavingsSlider");if(blsides>1&&bundles){var referenceNode=bundles.getElementsByClassName("slidesContainer")[0];document.getElementsByClassName("offerNumber")[0].style.top="-50px";var equals=document.createElement("div");equals.className="equalsSign",equals.innerHTML="<p>=</p>",referenceNode.parentNode.insertBefore(equals,referenceNode)}
bot!==!0&&getPageLocation(),function(e){function t(t){t.preventDefault();var a=e(this),n=a.attr("href");e.fancybox({type:"iframe",href:n+(-1==n.indexOf("?")?"?":"&")+"fancyboxed=1",width:760,height:800,fitToView:!0})}
function a(t){t.preventDefault();var a=e(this),n=a.attr("href");e.fancybox({type:"iframe",href:n+(-1==n.indexOf("?")?"?":"&")+"fancyboxed=1",width:500,height:300,fitToView:!0})}
function n(){var t=e(this),a=t.attr("name"),n=t.data("baseParams");if(n instanceof Array){var i={};e.each(n,function(e,t){i[e]=t}),n=i}
n[a]=t.val(),window.location=window.location.pathname+"?"+e.param(n)}
function i(){function e(){for(var e=0,a=n,i=a.length;i>e;e++)t(a[e])}
function t(e){var t=a(e),n=e.href,i={type:"iframe",href:n,width:500,height:220,padding:0,fitToView:!1},r=function(e){return function(t){t.preventDefault(),jQuery.fancybox(e)}}(i);t.click(r)}
var a=jQuery,n=a(".outOfStockEmailAnchor");e()}
function r(){function e(){var e=t(a),n=t("a",e),i=t("img",e),r=i.attr("alt");n.each(function(){$anchor=t(this),bindGAnchorEvent($anchor,"Global","Violator","Banner","Click",r)})}
var t=jQuery,a=document.getElementById("heroWrapper");a&&e()}
e(function(){function s(){getPlaceholderCompatibility(),bindFixedNavigation(),loadFnIinitialization(),touchDevice=touchDeviceCheck(),o(touchDevice),r(),new GlobalHeaderController,new GlobalFooterController}
function o(t){t?e(document.body).addClass("touchDevice"):e(document.body).addClass("mouseDevice")}
touchDevice=touchDeviceCheck(),s(),e(".reviewsLink").click(t),e(".make_an_offer, .makeAnOfferBlock .make_offer").click(a),e(".productListSortSelect").change(n),i(),"iPad"!=navigator.platform&&"iPhone"!=navigator.platform&&"iPod"!=navigator.platform||e(document.body).addClass("iOS"),jQuery(".footerabDiv .about-footer").click(function(){jQuery(".dropfooter").toggle(),jQuery(this).toggleClass("activebar")}),e(document.getElementById("forceMobileLink")).click(function(){document.cookie="sonic_stop_mobile=; path=/; expires=Fri, 27 Jul 1980 02:47:11 UTC;"})})}(jQuery);var BrowserVariables=function(){function e(){for(var e=0,t=r.length;t>e;e++){var a=r[e],i=new n(a);s.push(i)}
o=s.length}
function t(e){for(var t=0,a=o;a>t;t++){var n=s[t],i=n.key;if(i==e)return n}
return!1}
function a(){return s}
var n=function(e){var t=e.split("=");this.key=t[0],this.value=t[1]},i=location.search.substr(1),r=i.split("&"),s=[],o=0;e(),this.list=a,this.checkVariable=t},YouTubeVideo=function(e){function t(e){var t=e.videoID,n=e.divID;i=new YT.Player(n,{height:e.height||"315",width:e.width||"560",videoId:t,events:{onReady:a}})}
function a(){n()||i.playVideo()}
function n(){var e=navigator.userAgent.toLowerCase(),t=e.lastIndexOf("chrome"),a=e.lastIndexOf("safari"),n=e.lastIndexOf("mobile");return-1==t&&a>-1&&n>-1}
var i=null;YT&&t(e)},GlobalHeaderController=function(){function e(){new NavigationCategoriesController,new SearchController}
e()},SearchController=function(){function e(e){return suggstrip=e.replace(/<b>|<\/b>/g,"").replace(":_all",""),repIn=/\din/.exec(suggstrip),repIn&&(sizeRep=repIn[0].replace(/in/g,"%22"),suggstrip=suggstrip.replace(repIn[0],sizeRep)),suggsname=e.replace(":_all","").replace(":"," "),sStr="/search?keyword="+encodeURIComponent(suggstrip),squery=suggstrip.toLowerCase(),[suggsname,sStr,squery]}
function t(t){jQuery.ajax({method:"GET",url:"https://eucs2.klevu.com/cloud-search/n-search/search?ticket=klevu-14612696479213421&term="+t+"&autoComplete=true&paginationStartsFrom=0&sortPrice=false&ipAddress=undefined&analyticsApiKey=klevu-14612696479213421&klevuShowOutOfStockProducts=false&typeOfSuggestions=category&klevuFetchPopularTerms=false&klevu_priceInterval=50&noOfResultsAC=7&autoCompleteFilters=category&noOfResults=3&autoCompleteFilters=category&klevuSort=rel&responseType=json&resultForZero=1",success:function(t){if(res="",suggs=t.autoComplete,prods=t.result,suggs.length>0)
for(var a=suggs.length-1;a>=0;a--)quRes=e(suggs[a]),sRedirect=redirects[quRes[2]],redStr=quRes[1],void 0!==sRedirect&&(redStr=sRedirect),/:_all:/g.test(suggs[a])||(res+='<a href="'+redStr+'" class="sSuggestion">'+quRes[0]+"</a>");if(prods.length>0){for(var a=prods.length-1;a>=0;a--){if(prods[a].category=='vehicles'){ppstr='<div class="searchSuggestItemPrice cms">Shop Vehicle</div>';psugimg='/landing/home-page/AFG_Icon.png'}else if(/knowledge/.test(prods[a].id)){ppstr='<div class="searchSuggestItemPrice cms">Read Article</div>';psugimg=''}else{ppstr='<div class="searchSuggestItemPrice">$'+prods[a].salePrice+'</div>';psugimg=prods[a].image}
res+='<a href="'+prods[a].url+'" class="searchSuggestItemThumbnail"><div class="searchSuggestItemImg"><img src="'+psugimg+'"></div><div class="searchSuggestItemInfo"><div class="searchSuggestItemName">'+prods[a].name+'</div>'+ppstr+'</div></a>'}
jQuery("#searchShelf").html('<div id="autoSuggestions" dir="auto">'+res+'</div>')}}})}
jQuery("#searchField").keyup(function(e){e.preventDefault();var a=jQuery(this),n=a.val(),i=e.keyCode;return 40==i||38==i||13==i?!1:(t(n),width=a.parent().width(),left=a.position().left,void jQuery("#searchShelf").css({width:width+"px",top:"0px",display:"block",left:left+"px"}))}).keydown(function(t){var a=jQuery(this),n=a.val(),i=jQuery("#searchShelf a"),r=t.keyCode,s=i.filter(".selected"),o=null;if(40==r||38==r||13==r){if(0==s.length&&(0==jQuery("#prefix").length?jQuery(".input-box").append('<input id="prefix" type="hidden" value="'+n+'">'):jQuery("#prefix").val(n)),40==r)i.removeClass("selected"),s.length?s.is(":last-child")?(a.val(n),o=null,i.removeClass("selected")):(o=s.next(),a.val(o.text())):(o=i.eq(0),a.val(o.text()));else if(38==r)i.removeClass("selected"),s.length?s.is(":first-child")?(a.val(n),o=null,i.removeClass("selected")):(o=s.prev(),a.val(o.text())):(o=i.last(),a.val(o.text()));else if(13==r)return 0==s.length?(redirectHref=redirects[n],capQ=toTitleCase(n),redirectHref1=redirects[capQ],void 0!==redirectHref?window.location.href=redirectHref:void 0!==redirectHref1?window.location.href=redirectHref1:(redirectHref=e(n),window.location.href=redirectHref[1])):(o=i.filter(".selected"),window.location.href=o.attr("href")),!1;null!==o?o.addClass("selected"):(prefix=jQuery("#prefix").val(),a.val(prefix))}}),jQuery("#searchField").focus(function(){0==c&&jQuery.ajax({method:"GET",dataType:"text",url:"/landing/redirects11.js",success:function(e){redirects=JSON.parse(e),c++}})}),jQuery("#searchField").blur(function(){setTimeout(function(){jQuery("#searchShelf").css({display:"none"})},500)})},NavigationCategoriesController=function(){function e(e){var t=e.children("a"),a=i(t).text();gEvent("Global","Navigation Categories",a,"Hover")}
function t(){for(var e=jQuery,t=e("#navigationBar").find("a"),a=0,n=t,i=n.length;i>a;a++){var r=e(n[a]),s=r.text()+" - click - "+r.data("level"),o=s.replace(/&amp;/g,"&");bindGAnchorEvent(r,"Global","Navigation Categories",o,"Click",null)}}
function a(){function t(){for(var e=0,t=v,a=t.length;a>e;e++){var r=t[e],o=i(r),c=function(e,t){return function(){n(e,t)}}(o,e),l=function(e){return function(){s(e)}}(o);o.hover(c,l)}}
function a(){var e=(r.list(),r.checkVariable("activeNavCat")),t=void 0;e&&(t=v[parseFloat(e.value)],t&&n(i(t)))}
function n(t,a){function n(){o(),l(),t.addClass("hover"),d=t,a>-1&&e(t)}
d?(s(d,!0),n()):(c(),u=setTimeout(n,f))}
function s(e,t){function a(){e.removeClass("hover")}
function n(){d=void 0}
o(),c(),t?a():(p=setTimeout(a,f),m=setTimeout(n,f))}
function o(){m&&clearTimeout(m)}
function c(){u&&clearTimeout(u)}
function l(){p&&clearTimeout(p)}
var d=void 0,u=void 0,p=void 0,m=void 0,f=200,g=jQuery("#navigationBar"),h=jQuery(".navigationIn",g),y=h.children("ul"),v=y.children("li");a(),t()}
function n(){function e(e){n&&t(n),e.parent().addClass("hover").removeClass("closed"),n=e,i=n[0]}
function t(e){e.parent().removeClass("hover").addClass("closed")}
var a=jQuery("#navigationBar > nav > ul > li > a"),n=null,i=null;a.on("touchstart",function(a){a.preventDefault();var r=jQuery(this);i!=r[0]?e(r):(t(r),n=null,i=null)})}
var i=jQuery,r=(touchDeviceCheck(),new BrowserVariables);a(),n(),t()},GlobalFooterController=function(){function e(){new i,new n}
var t=jQuery,a=document.getElementById("footer"),n=function(){t(".fancyB").fancybox({padding:0,beforeShow:function(){this.href.indexOf("youtube")>-1?(_gaq.push(["_trackEvent","YoutubeVideos","Open","Desktop - "+pType+" - "+this.href]),this.width=640,this.height=360):(this.margin=[150,20,20,20],this.width=t(this.element).data("width")?t(this.element).data("width"):730,this.height=t(this.element).data("height")?t(this.element).data("height"):730)},fitToView:!1})},i=function(){function e(){o?i():n()}
function n(){o=!0,r.addClass("expanded")}
function i(){o=!1,r.removeClass("expanded")}
var r=t(".aboutSonic",a),s=t(".toggleButton",r),o=!1;s.on("click",e)};e()}
function changeLogoInRetinaDisplay(){
	var isRetina = (
		window.devicePixelRatio > 1 ||
		(
			window.matchMedia
			&& window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches
		)
	);
	if(isRetina){
		var image = document.getElementById("website-logo");
		if(image != null) image.src = "/images/rd/logo@2x.png";
	}
}
changeLogoInRetinaDisplay();

//Slice the username character length
if($('.userFirstName').length){
let loginUserName = document.querySelector('.userFirstName').innerHTML;
let sliceUserName = loginUserName.slice(0,18); //With included Welcome
document.querySelector('.userFirstName').innerHTML = sliceUserName + "...";
}

/*NEW VIOLATOR SCRIPT CODE TO MAKE POPUP */
let cpXcl = document.querySelector('#exclusions');
if (cpXcl) {
cpXcl.addEventListener('click', function(){
document.querySelector('.violator-popup').classList.toggle('active-violator');
let blackOverlay = document.querySelector('.black-overlay ');
blackOverlay.classList.toggle('active-body-cover');
document.querySelector('.header-nav-wrapper').style.zIndex = "1999";
blackOverlay.addEventListener('click', function(){
document.querySelector('.violator-popup').classList.remove('active-violator');
this.classList.remove('active-body-cover');
});
document.querySelector('.close-violator').addEventListener('click',function(){
document.querySelector('.black-overlay ').classList.remove('active-body-cover');
document.querySelector('.violator-popup').classList.remove('active-violator');
});
});
}