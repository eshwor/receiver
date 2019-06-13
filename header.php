<script type="text/javascript">
function toggleDesktopMegaMenu(e) {
    e.preventDefault();
    let el = e.target;
    let addClass = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    };
    let hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    };
    let removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };
    let toggleClass = function (el, className) {
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            let classes = el.className.split(' ');
            let existingIndex = classes.indexOf(className);

            if (existingIndex >= 0) {
                classes.splice(existingIndex, 1);
            } else {
                classes.push(className);
            }

            el.className = classes.join(' ');
        }
    };

    Array.prototype.filter.call(el.parentNode.parentNode.children, function(child){
        if (child !== el.parentNode) {
            removeClass(child, 'active');
        }
    });

    toggleClass(el.parentNode, 'active');

    document.querySelectorAll('.mega-menu-parrent > .close-nav-btn').forEach(function (el) {
        el.parentNode.removeChild(el);
    });

    if (hasClass(el.parentNode, 'active')) {
        addClass(document.querySelector('.black-overlay'), 'active-body-cover');
        let div = document.createElement('div');
        div.innerHTML = 'X';
        addClass(div, 'close-nav-btn');
        el.parentNode.querySelector('.mega-menu-parrent').appendChild(div);
    } else {
        removeClass(document.querySelector('.black-overlay'), 'active-body-cover');
    }
}
</script>
<!--NEW NAVIGATION -->
<div class="black-overlay"></div>
<nav class="main-navigation" id="main-navigation-wrapper">
    <div class="header-nav-wrapper">
    <div class="inner-main-wrapper">
        <div class="child-inner-first">
        <div class="logo-hamburger">
            <div class="hamburger">
            <div class="ham-bar"></div>
            <div class="ham-bar"></div>
            <div class="ham-bar"></div>
            </div>
            <a class="logo" href="https://www.sonicelectronix.com/">
            <img src="https://www.sonicelectronix.com/landing/images/whiteTransLogo.png" alt="">
            </a>
        </div>
    </div>
    <div class="child-inner-second">
    <div class="logo-container-wrapper">
        <div class="logo-container-left">
            <div id="header-search" class="header-search skip-content">
            <form id="search_mini_form" action="/lp/search" method="get">
                <div class="input-box">
                <label for="searchField">Search:</label>
                <input id="searchField" type="search" name="s" value="" class="input-text required-entry" maxlength="128" placeholder="Search" autocomplete="off">
                <button id="submitSearch" type="submit" title="Search" class="button search-button"><span><span>Search</span></span></button>
                <div class="searchajax">
                    <div class="searchShelf" id="searchShelf"></div>
                </div>
                </div>
            </form>
            </div>
        </div>
        <div class="logo-container-right">
        <div class="auth-container-wrapper">
            <ul>
            <!--If you want to add account login in here  -->
            <li><a id="myVehicle" href="/afg" onclick="_gaq.push(['_trackEvent', 'Global', 'Header', 'My Vehicle']);"><span class="ava-icon"></span>My vehicle</a></li>
            {{^ loggedIn }}
            <li class="account_link"><a href="/customer/account"><span class="account-icon"></span>My account</a></li>
            {{/ loggedIn }}
            {{# loggedIn }}
            <li class="login-username"><span class="account-icon"></span><span class="userFirstName">Welcome {{ userFirstName }}!</span></li>
            <li class="logout"><a href="/account.php?action=logout">(Logout)</a></li>
            {{/ loggedIn }}
            <li> <a class="fancyB fancybox.ajax help-link" href="https://www.sonicelectronix.com/landing/expertsmodal.html"><span class="help-icon"></span>Help</a></li>
            <li><a id="shoppingCartAnchor" href="/cart" class="cart-link">
                <span class="cart-icon"></span>
                <span class="desktop-only">Cart</span>
                {{# cartItemCount }}
                <div class="itemCount">
                    <span id="cartCounter"> {{ cartItemCount }}</span>
                </div>
                {{/ cartItemCount }}
            </a></li>
            <li class="mobile-only"><span class="mob-search-icon"></span></li>
            </ul>
        </div>
        </div>
    </div>
    <div class="main-navigation">
        <ul>
        <li class="parent-nav"><a class="has-child dynamic-car-text" href="#" onclick="toggleDesktopMegaMenu(event)"> Car &amp; Automotive </a>
            <div class="mega-menu-parrent first-menu-item">
            <div class="header-links">
                <a href="/cat_i465_car-electronics-auto-parts.html">Car Electronics &amp; Automotive</a>
                <a rel="nofollow" href="/cat_i465_car-electronics-auto-parts.html"><span class="gray-link">Shop all</span></a>
            </div>
            <div class="mega-menu-inner-wrapper">
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i857_car-audio.html"><span class="parrent-img doubledin-img"></span></a> </div>
                <h4><a class="blue-link" href="/cat_i857_car-audio.html">Car Audio</a></h4>
                <ul>
                    <li><a href="/cat_i9_car-stereos-radios.html"> Car Stereos </a></li>
                    <li><a href="/cat_i7_car-speakers.html"> Car Speakers </a></li>
                    <li><a href="/cat_i39_car-subwoofers.html"> Car Subwoofers &amp; Boxes</a></li>
                    <li><a href="/cat_i22_car-amplifiers.html">Car Amplifiers </a></li>
                    <li><a href="/cat_i656_car-audio-accessories-installation-parts.html"> Installation Parts</a></li>
                    <li><a href="/cat_i20_eqs-sound-processors.html"> EQs &amp; Sound Processors</a></li>
                    <li><a href="/cat_i2873_car-audio-packages-bundles.html"> Audio Packages &amp; Bundles</a></li>
                </ul>
                </div>
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i16_car-cameras-video-safety-gps.html"><span class="parrent-img dashcamp-img"></span></a> </div>
                <h4><a  class="blue-link" href="/cat_i16_car-cameras-video-safety-gps.html">Cameras, Video &amp; GPS</a></h4>
                <ul>
                    <li><a href="/cat_i249_rearview-backup-cameras.html"> Backup Cameras </a></li>
                    <li><a href="/cat_i960_dash-cams-vehicle-dvr.html?from=16"> Dash Cameras &amp; DVR </a></li>
                    <li><a href="/cat_i2252_car-lcd-monitors-screens.html"> Headrest &amp; Overhead Video </a></li>
                    <li><a href="/cat_i178_in-dash-video-dvd-players.html?from=16"> In-dash Video/DVD </a></li>
                    <li><a href="/cat_i321_in-dash-car-gps-navigation.html?from=186"> In-dash Navigation </a></li>
                    <li><a href="/cat_i186_gps-navigation.html"> GPS Navigation </a></li>
                    <li><a href="/cat_i2268_driver-assistance-vehicle-safety.html"> Driver Safety </a></li>
                </ul>
                </div>
                <div class="nav-col">
                <div class="image-container">
                    <a href="/cat_i656_car-audio-accessories-installation-parts.html"><span class="parrent-img carcharger-img"></span></a>
                </div>
                <h4><a  class="blue-link" href="/cat_i656_car-audio-accessories-installation-parts.html">Accessories &amp; Audio Add-ons</a></h4>
                <ul>
                    <li><a href="/cat_i145_sound-dampening-deadening.html"> Sound Damping </a></li>
                    <li><a href="/cat_i701_car-batteries-power.html"> Batteries, Capacitors &amp; Power </a></li>
                    <li><a href="/cat_i104_siriusxm-satellite-radio.html"> SiriusXM Satellite Radio </a></li>
                    <li><a href="/cat_i430_bluetooth-car-kits.html"> Bluetooth Kits &amp; Controllers </a></li>
                    <li><a href="/cat_i2941_android-apple-iphone-integration.html"> Android &amp; iPhone Integration </a></li>
                    <li><a href="/cat_i978_cell-phone-car-mounts.html?from=1733"> Phone Mounts &amp; Chargers </a></li>
                </ul>
                </div>
                <div class="nav-col">
                <div class="image-container">
                    <a href="/cat_i27_remote-start-car-alarms.html"><span class="parrent-img dashspeed-img"></span></a>
                </div>
                <h4><a  class="blue-link" href="/cat_i27_remote-start-car-alarms.html">Remote Start &amp; Car Alarms</a></h4>
                <ul>
                    <li><a href="/cat_i479_remote-start.html"> Remote Start </a></li>
                    <li><a href="/cat_i133_all-car-alarms.html"> Car Alarms </a></li>
                    <li><a href="/cat_i1088_keyless-entry.html"> Keyless Entry </a></li>
                    <li><a href="/cat_i509_vehicle-specific-immobilizer-bypass-modules.html"> Immobilizer Bypass </a></li>
                    <li><a href="/cat_i440_vehicle-gps-tracking.html"> Tracking &amp; Monitoring </a></li>
                    <li><a href="/cat_i510_car-alarm-accessories-installation.html"> Car Security Accessories </a></li>
                </ul>
                </div>
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i847_car-parts-auto-accessories.html"><span class="parrent-img remote-img"></span></a> </div>
                <h4><a  class="blue-link" href="/cat_i847_car-parts-auto-accessories.html">Automotive Accessories</a></h4>
                <ul>
                    <li><a href="/cat_i978_cell-phone-car-mounts.html?from=1733"> Phone Mounts &amp; Chargers </a></li>
                    <li><a href="/cat_i1340_automotive-lighting.html"> Vehicle Lighting</a></li>
                    <li><a href="/cat_i136_radar-detectors-accessories.html?from=847"> Radar Detectors </a></li>
                </ul>
                </div>
            </div>
            </div>
        </li>
        <li class="parent-nav"><a class="has-child" href="#" onclick="toggleDesktopMegaMenu(event)"> Marine </a>
            <div class="mega-menu-parrent fourth-menu-item">
            <div class="header-links">
                <a href="/cat_i131_marine-audio-electronics.html">Marine Audio &amp; Electronics</a>
                <a rel="nofollow" href="/cat_i131_marine-audio-electronics.html"><span class="gray-link">Shop all</span></a>
            </div>
            <div class="mega-menu-inner-wrapper">
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i131_marine-audio-electronics.html"><span class="parrent-img marine-img"></span></a> </div>
                <ul>
                    <li><a href="/cat_i183_marine-stereo-radio.html"> Radios &amp; Stereos </a></li>
                    <li><a href="/cat_i2735_marine-bluetooth-controllers-kits.html"> Bluetooth Controllers </a></li>
                    <li><a href="/cat_i2615_marine-amplifiers.html"> Amplifiers </a></li>
                    <li><a href="/cat_i181_marine-speakers.html"> All Speakers </a></li>
                    <li><a href="/cat_i455_marine-tower-speakers.html"> Tower Speakers </a></li>
                    <li><a href="/cat_i2727_marine-sound-bar-speakers-soundbars.html"> Sound Bars </a></li>
                    <li><a href="/cat_i184_marine-subwoofers.html"> Subwoofers &amp; Boxes </a></li>
                    <li><a href="/cat_i2401_marine-audio-packages-bundles.html"> Audio Packages &amp; Bundles </a></li>
                    <li><a href="/cat_i454_marine-accessories-installation.html"> Accessories &amp; Installation Parts </a></li>
                </ul>
                </div>
                <div class="free-space">
                <div class="box __one">
                    <p class="box-title">Specials</p>
                    <a href="/lp/marine-boat-audio-and-electronics-specials">
                    <div class="parrent-img">
                    <img src="https://www.sonicelectronix.com/landing/icons/14.1.png" alt="">
                    </div>
                    </a>
                </div>
                <div class="box __two">
                    <p class="box-title">Outlet and open box</p>
                    <a href="/cat_i131_marine-audio-electronics.html?ls=1">
                    <div class="parrent-img">
                    <img src="https://www.sonicelectronix.com/landing/icons/15.1.png" alt="">
                    </div>
                    </a>
                </div>
                <div class="box __three">
                    <p class="box-title">Articles and videos</p>
                    <a href="/lp/marine-boat-audio-articles-and-videos">
                    <div class="parrent-img">
                    <img src="https://www.sonicelectronix.com/landing/icons/16.1.png" alt="">
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </li>
        <li class="parent-nav"><a class="has-child dynamic-utv-text" href="#" onclick="toggleDesktopMegaMenu(event)"> UTV &amp; ATV </a>
            <div class="mega-menu-parrent second-menu-item">
            <div class="header-links">
                <a href="/cat_i1313_powersports-utv-sxs-atv.html">UTV, SxS, &amp; ATV Electronics</a>
                <a rel="nofollow" href="/cat_i1313_powersports-utv-sxs-atv.html"><span class="gray-link">Shop all</span></a>
            </div>
            <div class="mega-menu-inner-wrapper">
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i1313_powersports-utv-sxs-atv.html"><span class="parrent-img utv-img"></span></a> </div>
                <ul>
                    <li><a href="/cat_i1851_utv-atv-sxs-stereos-bluetooth.html"> Radios &amp; Receivers </a></li>
                    <li><a href="/cat_i2839_bluetooth-kits-for-utv-atv-sxs.html"> Bluetooth Controllers &amp; Kits </a></li>
                    <li><a href="/cat_i2611_utv-atv-sxs-amplifiers.html"> Amplifiers </a></li>
                    <li><a href="/cat_i1854_utv-atv-sxs-speakers.html"> All Speakers </a></li>
                    <li><a href="/cat_i1318_utv-atv-sxs-sound-bars-pod-speakers.html"> Sound Bars &amp; Pods </a></li>
                    <li><a href="/cat_i2415_utv-atv-sxs-subwoofers-sub-boxes.html"> Subwoofers &amp; Enclosures </a></li>
                    <li><a href="/cat_i2408_utv-atv-sxs-vehicle-specific-upgrades.html"> Vehicle Specific </a></li>
                    <li><a href="/cat_i2403_utv-atv-sxs-packages-bundles.html"> Audio Packages &amp; Bundles </a></li>
                    <li><a href="/cat_i1852_utv-atv-sxs-accessories.html"> Accessories &amp; Install Parts </a></li>
                </ul>
                </div>
                <div class="free-space">
                <div class="box __one">
                    <p class="box-title">Specials</p>
                    <a href="/lp/powersports-utv-sxs-atv-audio-electronics-specials">
                    <div class="parrent-img">
                    <img src="https://www.sonicelectronix.com/landing/icons/14.1.png" alt="">
                    </div>
                    </a>
                </div>
                <div class="box __two">
                    <p class="box-title">Outlet and open box</p>
                    <a href="/cat_i1313_powersports-utv-sxs-atv.html?ls=1">
                    <div class="parrent-img">
                    <img src="https://www.sonicelectronix.com/landing/icons/15.1.png" alt="">
                    </div>
                    </a>
                </div>
                <div class="box __three">
                    <p class="box-title">Articles and videos</p>
                    <a href="/lp/powersports-utv-sxs-atv-audio-articles-and-videos">
                    <div class="parrent-img">
                        <img src="https://www.sonicelectronix.com/landing/icons/16.1.png" alt="">
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </li>
        <li class="parent-nav"><a class="has-child" href="#" onclick="toggleDesktopMegaMenu(event)"> Motorcycle </a>
            <div class="mega-menu-parrent third-menu-item">
            <div class="header-links">
                <a href="/cat_i1850_motorcycle-audio-electronics.html">Motorcycle Audio &amp; Electronics</a>
                <a rel="nofollow" href="/cat_i1850_motorcycle-audio-electronics.html"><span class="gray-link">Shop all</span></a>
            </div>
            <div class="mega-menu-inner-wrapper">
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i1850_motorcycle-audio-electronics.html"><span class="parrent-img motorcycle-img"></span></a> </div>
                <ul>
                    <li><a href="/cat_i2613_motorcycle-stereos.html"> Radios &amp; Stereos </a></li>
                    <li><a href="/cat_i1314_motorcycle-amplifiers.html"> Amplifiers </a></li>
                    <li><a href="/cat_i2937_motorcycle-speakers-subs-speaker-kits.html"> Speakers &amp; Speaker Kits </a></li>
                    <li><a href="/cat_i2406_motorcycle-accessories-installation-parts.html"> Accessories &amp; Install Parts </a></li>
                    <li><a href="/cat_i2531_motorcycle-lighting.html"> Lighting </a></li>
                    <li><a href="/cat_i2359_motorcycle-audio-packages.html"> Audio Packages &amp; Bundles </a></li>
                </ul>
                </div>
                <div class="free-space">
                <div class="box __one">
                    <p class="box-title">Specials</p>
                    <a href="/lp/motorcycle-audio-and-electronics-specials">
                    <div class="parrent-img">
                    <img src="https://www.sonicelectronix.com/landing/icons/14.1.png" alt="">
                    </div>
                    </a>
                </div>
                <div class="box __two">
                    <p class="box-title">Outlet and open box</p>
                    <a rel="nofollow" href="/cat_i1850_motorcycle-audio-electronics.html?ls=1">
                    <div class="parrent-img">
                    <img src="https://www.sonicelectronix.com/landing/icons/15.1.png" alt="">
                    </div>
                    </a>
                </div>
                <div class="box __three">
                    <p class="box-title">Articles and videos</p>
                    <a href="/lp/motorcycle-audio-and-electronics-articles-and-videos">
                    <div class="parrent-img">
                        <img src="https://www.sonicelectronix.com/landing/icons/16.1.png" alt="">
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </li>
        <li class="parent-nav"><a class="has-child" href="#" onclick="toggleDesktopMegaMenu(event)"> Portables </a>
            <div class="mega-menu-parrent personal-item">
            <div class="header-links">
                <a href="/cat_i226_personal-portable-electronics.html">Portable &amp; Personal Electronics</a>
                <a rel="nofollow" href="/cat_i226_personal-portable-electronics.html"><span class="gray-link">Shop all</span></a>
            </div>
            <div class="mega-menu-inner-wrapper">
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i354_headphones.html"><span class="parrent-img headphone-img"></span></a> </div>
                <h4><a  class="blue-link" href="/cat_i354_headphones.html">Headphones</a></h4>
                <ul>
                    <li><a href="/cat_i355_in-ear-headphones-earbuds.html"> In-Ear (Earbuds) </a></li>
                    <li><a href="/cat_i1085_on-ear-headphones.html"> On-Ear </a></li>
                    <li><a href="/cat_i736_over-ear-headphones.html"> Over-Ear </a></li>
                    <li><a href="/cat_i646_bluetooth-wireless-headphones.html"> Bluetooth Wireless </a></li>
                </ul>
                </div>
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i885_portable-speakers-radios-players.html"><span class="parrent-img portablespeaker-img"></span></a> </div>
                <h4><a   class="blue-link" href="/cat_i885_portable-speakers-radios-players.html">Speakers &amp; Audio</a></h4>
                <ul>
                    <li><a href="/cat_i1663_portable-bluetooth-speakers.html"> Wireless Bluetooth Speakers </a></li>
                    <li><a href="/cat_i364_boomboxes.html"> Boomboxes </a></li>
                    <li><a href="/cat_i343_bluetooth-audio-accessories.html"> Bluetooth Accessories </a></li>
                </ul>
                </div>
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i2251_portable-audio-accessories.html"><span class="parrent-img charger-img"></span></a> </div>
                <h4><a   class="blue-link" href="/cat_i2251_portable-audio-accessories.html">Accessories &amp; More</a></h4>
                <ul>
                    <li><a href="/cat_i462_cables-connectors.html"> Chargers &amp; Power Adapters </a></li>
                    <li><a href="/cat_i1559_laptop-stands.html"> Docks &amp; Stands </a></li>
                    <li><a href="/cat_i1322_power-banks-backup-batteries.html"> Battery Power Banks </a></li>
                    <li><a href="/cat_i234_cell-phone-accessories.html"> Cell Phone Accessories </a></li>
                </ul>
                </div>
            </div>
                <div class="free-space"></div>
            </div>
        </li>
        <li class="parent-nav"><a class="has-child" href="#" onclick="toggleDesktopMegaMenu(event)"> Fitness </a>
            <div class="mega-menu-parrent sixth-menu-item">
            <div class="header-links">
                <a href="/cat_i2927_fitness-health.html">Fitness &amp; Health</a>
                <a rel="nofollow" href="/cat_i2927_fitness-health.html"><span class="gray-link">Shop all</span></a>
            </div>
            <div class="mega-menu-inner-wrapper">
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i2927_fitness-health.html"><span class="parrent-img roller-img"></span></a> </div>
                <ul>
                    <li><a href="/cat_m1379_i1585_victor-fitness-massagers.html"> Vibrating REVIVE Roller </a></li>
                    <li><a href="/item_168543_Victor.Fitness-LiftLocks1-Black.html"> Barbell Collars (LiftLocks) </a></li>
                    <li><a href="/item_168535_Victor.Fitness-PYNpad.html"> Barbell Pad (PYNpad) </a></li>
                    <li><a href="/cat_m1379_i2931_victor-fitness-resistance-bands.html"> Resistance Bands </a></li>
                    <li><a href="/item_168509_Victor.Fitness-TrigStick1.html"> Massage Stick </a></li>
                    <li><a href="/item_168505_Victor.Fitness-VicGrips.html"> Weightlifting Gloves</a></li>
                    <li><a href="/cat_m1379_i2933_victor-fitness-yoga.html"> Yoga Mats </a></li>
                </ul>
                </div>
                <div class="free-space"> </div>
            </div>
            </div>
        </li>
        <li class="parent-nav"><a class="has-child dynamic-home-office" href="#" onclick="toggleDesktopMegaMenu(event)"> Home &amp; Office </a>
            <div class="mega-menu-parrent sevent-menu-item">
            <div class="header-links">
                <a href="/cat_i499_home-office-electronics.html">Home &amp; Office Electronics</a>
                <a rel="nofollow" href="/cat_i499_home-office-electronics.html"><span class="gray-link">Shop all</span></a>
            </div>
            <div class="mega-menu-inner-wrapper">
                <div class="nav-col">
                <div class="image-container"> <a href="/cat_i499_home-office-electronics.html"><span class="parrent-img home-office-img"></span></a> </div>
                <ul>
                    <li><a href="/cat_i1559_laptop-stands.html"> Laptop Stands </a></li>
                    <li><a href="/cat_i1558_macbook-laptop-docking-stations-usb-hub-adapters.html"> USB Hubs &amp; Docking Stations </a></li>
                    <li><a href="/cat_i2943_phone-mounts-chargers-for-home-desk-office.html"> Phone Mounts &amp; Chargers </a></li>
                    <li><a href="/cat_i1663_portable-bluetooth-speakers.html"> Bluetooth Wireless Speakers </a></li>
                    <li><a href="/cat_i364_boomboxes.html"> Boomboxes </a></li>
                    <li><a href="/cat_i354_headphones.html"> Headphones </a></li>
                </ul>
                </div>
                <div class="free-space"> </div>
            </div>
            </div>
        </li>
        <li class="parent-nav"><a class="has-child" href="#" onclick="toggleDesktopMegaMenu(event)"> Specials </a>
            <div class="mega-menu-parrent eighth-menu-item">
            <div class="header-links">
                <a href="/cat_i2244_specials-promotions.html">Specials &amp; Promotions</a>
                <a rel="nofollow" href="/cat_i2244_specials-promotions.html"><span class="gray-link">Shop all</span></a>
            </div>
            <div class="mega-menu-inner-wrapper">
                <div class="nav-col">
                <div class="image-container" style="display:none;"> <a href="/cat_i2244_specials-promotions.html"><span class="parrent-img clearance-img"></span></a> </div>
                <ul>
                    <li><a href="/lp/on-sale"> Price Drops </a></li>
                    <li><a href="/lp/vip-rewards"> VIP (Free 2-day + 10% Rewards) </a></li>
                    <li><a href="/coupons"> Coupons </a></li>
                    <li><a href="/liquidation_station.html"> Outlet (Open Box, Refurbished) </a></li>
                    <li><a href="/cat_i1856_gift-guides.html"> Gift Guides </a></li>
                </ul>
                </div>
                <div class="free-space" style="top:0;"> </div>
            </div>
            </div>
        </li>
        </ul>
    </div>
    </div>
    </div>
    </div></nav>
    <!--NEW NAV END-->
    <!-- SIDEBAR HAMBURGER MEGA MENU FOR DESKTOP AND MOBILE  -->
    <div class="hero-menu">
    <div class="top-bar">
        <a class="hero-menu-logo" href="https://www.sonicelectronix.com/"> <img src="https://www.sonicelectronix.com/landing/images/whiteTransLogo.png" alt=""> </a>
        <div class="close-hero-menu">
        <div class="ham-bar"></div>
        <div class="ham-bar"></div>
        </div>
    </div>
    <div class="top-section">
        <ul>
            <li class="account_link"><a class="sidebar-account-icon" href="/customer/account">My account</a></li>
            <li><a class="sidebar-my-vehicle-icon myVehicle" href="/afg" onclick="_gaq.push(['_trackEvent', 'Global', 'Header', 'My Vehicle']);">My vehicle</a></li>
            <li> <a class="fancyB fancybox.ajax sidebar-help-icon" href="/landing/expertsmodal.html">Help</a></li>
        </ul>
    </div>
    <div class="menu-section">
        <ul class="menu level-1" >
        <!-- Parent -->
        <div class="category-div">SHOP BY CATEGORY <a href="/viewcat.php" style="text-decoration: underline;color: inherit;position: absolute;right: 0;top: 0.3rem;">See all</a></div>
        <li class='no-border-top has-child-level-1'><h4 class="title">Car &amp; Automotive</h4>
                <ul class="level-2">
                <li><a class="dynamic-title-link" href="/cat_i465_car-electronics-auto-parts.html">Car &amp; Automotive <span class="see-all-link">See all</span></a></li>
                <li class="has-child-level-2"><h4 class="title">Car Audio</h4>
                    <ul class="level-3">
                    <li><a class="dynamic-title-link" href="/cat_i857_car-audio.html">CAR AUDIO <span class="see-all-link">See all</span></a></li>
                    <li><a href="/cat_i9_car-stereos-radios.html"> Car Stereos </a></li>
                    <li><a href="/cat_i7_car-speakers.html"> Car Speakers </a></li>
                    <li><a href="/cat_i39_car-subwoofers.html"> Car Subwoofers </a></li>
                    <li><a href="/cat_i22_car-amplifiers.html">Car Amplifiers </a></li>
                    <li class="has-child-level-3"><h4 class="title">Installation Parts</h4>
                        <!--LEVEL 4 SUB Menu Start Here-->
                        <ul class="level-4">
                            <li><a class="dynamic-title-link" href="/cat_i656_car-audio-accessories-installation-parts.html">INSTALLATION PARTS <span class="see-all-link">See all</span></a></li>
                            <li><a href="/cat_i1733_car-stereo-accessories-installation.html"> Stereo Installation </a>
                            <li><a href="/cat_i166_speaker-installation-accessories.html"> Speaker Installation </a></li>
                            <li><a href="/cat_i453_subwoofer-installation-accessories.html"> Sub Boxes &amp; Installation </a></li>
                            <li><a href="/cat_i3_amplifier-installation-accessories.html"> Amplifier Installation </a></li>
                            <li><a rel="nofollow" href="/cat_i656_car-audio-accessories-installation-parts.html">Shop all Installation Parts</a></li>
                        </ul>
                        <!--LEVEL 4 End Here  -->
                    </li>
                    <li class="has-child-level-3"><h4 class="title">Accessories &amp; Add-ons</h4>
                        <!--LEVEL 4 SUB Menu Start Here-->
                        <ul class="level-4">
                            <li><a class="dynamic-title-link" href="/cat_i656_car-audio-accessories-installation-parts.html">ACCESSORIES &amp; ADD-ONS <span class="see-all-link">See all</span></a></li>
                            <li><a href="/cat_i145_sound-dampening-deadening.html"> Sound Damping </a></li>
                            <li><a href="/cat_i701_car-batteries-power.html"> Batteries, Capacitors &amp; Power </a></li>
                            <li><a href="/cat_i20_eqs-sound-processors.html"> EQs &amp; Sound Processors</a></li>
                            <li><a href="/cat_i104_siriusxm-satellite-radio.html"> SiriusXM Satellite Radio </a></li>
                            <li><a href="/cat_i430_bluetooth-car-kits.html"> Bluetooth Kits &amp; Controllers </a></li>
                            <li><a href="/cat_i2941_android-apple-iphone-integration.html"> Android &amp; iPhone Integration </a></li>
                            <li><a href="/cat_i978_cell-phone-car-mounts.html?from=1733"> Phone Mounts &amp; Chargers </a></li>
                            <li><a rel="nofollow" href="/cat_i656_car-audio-accessories-installation-parts.html">Shop all Accessories &amp; Add-ons</a></li>
                            </ul>
                        <!--LEVEL 4 End Here  -->
                    </li>
                    <li><a href="/cat_i20_eqs-sound-processors.html"> EQs &amp; Sound Processors</a></li>
                    <li><a href="/cat_i2873_car-audio-packages-bundles.html"> Audio Packages &amp; Bundles</a></li>
                    <li><a rel="nofollow" href="/cat_i857_car-audio.html">Shop all Car Audio</a></li>
                    </ul>
                </li>
                <li class="has-child-level-2"><h4 class="title">Cameras, Video &amp; GPS</h4>
                    <ul class="level-3">
                        <li><a class="dynamic-title-link" href="/cat_i16_car-cameras-video-safety-gps.html">CAMERAS, VIDEO &amp; GPS <span class="see-all-link">See all</span></a></li>
                        <li><a href="/cat_i249_rearview-backup-cameras.html"> Backup Cameras </a></li>
                        <li><a href="/cat_i960_dash-cams-vehicle-dvr.html?from=16"> Dash Cameras &amp; DVR </a></li>
                        <li><a href="/cat_i2252_car-lcd-monitors-screens.html"> Headrest &amp; Overhead Video </a></li>
                        <li><a href="/cat_i178_in-dash-video-dvd-players.html?from=16"> In-dash Video/DVD </a></li>
                        <li><a href="/cat_i321_in-dash-car-gps-navigation.html?from=186"> In-dash Navigation </a></li>
                        <li><a href="/cat_i186_gps-navigation.html"> GPS Navigation </a></li>
                        <li><a href="/cat_i2268_driver-assistance-vehicle-safety.html"> Driver Safety </a></li>
                        <li><a rel="nofollow" href="/cat_i16_car-cameras-video-safety-gps.html">Shop all Cameras, Video &amp; GPS</a></li>
                    </ul>
                </li>
                <li class="has-child-level-2"><h4 class="title">Remote Start &amp; Car Alarms</h4>
                    <ul class="level-3">
                    <li><a class="dynamic-title-link" href="/cat_i27_remote-start-car-alarms.html">REMOTE START &amp; ALARMS <span class="see-all-link">See all</span></a></li>
                    <li><a href="/cat_i479_remote-start.html"> Remote Start </a></li>
                    <li><a href="/cat_i133_all-car-alarms.html"> Car Alarms </a></li>
                    <li><a href="/cat_i1088_keyless-entry.html"> Keyless Entry </a></li>
                    <li><a href="/cat_i509_vehicle-specific-immobilizer-bypass-modules.html"> Immobilizer Bypass </a></li>
                    <li><a href="/cat_i440_vehicle-gps-tracking.html"> Tracking &amp; Monitoring </a></li>
                    <li><a href="/cat_i510_car-alarm-accessories-installation.html"> Car Security Accessories </a></li>
                    <li><a rel="nofollow" href="/cat_i27_remote-start-car-alarms.html">Shop all Remote Start &amp; Alarms</a></li>
                    </ul>
                </li>
                <li class="has-child-level-2"><h4 class="title">Automotive Accessories</h4>
                    <ul class="level-3">
                    <li><a class="dynamic-title-link" href="/cat_i847_car-parts-auto-accessories.html">AUTO ACCESSORIES <span class="see-all-link">See all</span></a></li>
                    <li><a href="/cat_i978_cell-phone-car-mounts.html?from=1733"> Phone Mounts &amp; Chargers </a></li>
                    <li><a href="/cat_i1340_automotive-lighting.html"> Vehicle Lighting </a></li>
                    <li><a href="/cat_i136_radar-detectors-accessories.html?from=847"> Radar Detectors </a></li>
                    <li><a rel="nofollow" href="/cat_i847_car-parts-auto-accessories.html">Shop all Automotive Accessories</a></li>
                    </ul>
                </li>
                <li><a rel="nofollow" href="/cat_i465_car-electronics-auto-parts.html">Shop all Car &amp; Automotive</a></li>
                </ul>
        </li>
        <!-- Parent -->
        <li class='has-child-level-1'><h4 class="title">Marine</h4>
            <ul class="level-2">
                <li><a class="dynamic-title-link" href="/cat_i131_marine-audio-electronics.html">MARINE <span class="see-all-link">See all</span></a></li>
                <li><a href="/cat_i183_marine-stereo-radio.html"> Radios &amp; Stereos </a></li>
                <li><a href="/cat_i2735_marine-bluetooth-controllers-kits.html"> Bluetooth Controllers </a></li>
                <li><a href="/cat_i2615_marine-amplifiers.html"> Amplifiers </a></li>
                <li><a href="/cat_i181_marine-speakers.html"> All Speakers </a></li>
                <li><a href="/cat_i455_marine-tower-speakers.html"> Tower Speakers </a></li>
                <li><a href="/cat_i2727_marine-sound-bar-speakers-soundbars.html"> Sound Bars </a></li>
                <li><a href="/cat_i184_marine-subwoofers.html"> Subwoofers &amp; Boxes </a></li>
                <li><a href="/cat_i2401_marine-audio-packages-bundles.html"> Audio Packages &amp; Bundles </a></li>
                <li><a href="/cat_i454_marine-accessories-installation.html"> Accessories &amp; Installation Parts </a></li>
                <li><a href="/cat_i131_marine-audio-electronics.html">Shop all Marine</a></li>
            </ul>
        </li>
        <!-- Parent -->
        <li class='has-child-level-1'><h4 class="title">UTV &amp; ATV</h4>
            <ul class="level-2">
                <li><a class="dynamic-title-link" href="/cat_i1313_powersports-utv-sxs-atv.html">UTV &amp; ATV <span class="see-all-link">See all</span></a></li>
                <li><a href="/cat_i1851_utv-atv-sxs-stereos-bluetooth.html"> Radios &amp; Receivers </a></li>
                <li><a href="/cat_i2839_bluetooth-kits-for-utv-atv-sxs.html"> Bluetooth Controllers &amp; Kits </a></li>
                <li><a href="/cat_i2611_utv-atv-sxs-amplifiers.html"> Amplifiers </a></li>
                <li><a href="/cat_i1854_utv-atv-sxs-speakers.html"> All Speakers </a></li>
                <li><a href="/cat_i1318_utv-atv-sxs-sound-bars-pod-speakers.html"> Sound Bars &amp; Pods </a></li>
                <li><a href="/cat_i2415_utv-atv-sxs-subwoofers-sub-boxes.html"> Subwoofers &amp; Enclosures </a></li>
                <li><a href="/cat_i2408_utv-atv-sxs-vehicle-specific-upgrades.html"> Vehicle Specific </a></li>
                <li><a href="/cat_i2403_utv-atv-sxs-packages-bundles.html"> Audio Packages &amp; Bundles </a></li>
                <li><a href="/cat_i1852_utv-atv-sxs-accessories.html"> Accessories &amp; Install Parts </a></li>
                <li><a href="/cat_i1313_powersports-utv-sxs-atv.html">Shop all UTV, ATV &amp; SxS</a></li>
            </ul>
        </li>
        <!-- Parent -->
        <li class='has-child-level-1'><h4 class="title">Motorcycle</h4>
            <ul class="level-2">
            <li><a class="dynamic-title-link" href="/cat_i1850_motorcycle-audio-electronics.html">MOTORCYCLE <span class="see-all-link">See all</span></a></li>
            <li><a href="/cat_i2613_motorcycle-stereos.html"> Radios &amp; Stereos </a></li>
            <li><a href="/cat_i1314_motorcycle-amplifiers.html"> Amplifiers </a></li>
            <li><a href="/cat_i2937_motorcycle-speakers-subs-speaker-kits.html"> Speakers &amp; Speaker Kits </a></li>
            <li><a href="/cat_i2406_motorcycle-accessories-installation-parts.html"> Accessories &amp; Install Parts </a></li>
            <li><a href="/cat_i2531_motorcycle-lighting.html"> Lighting </a></li>
            <li><a href="/cat_i2359_motorcycle-audio-packages.html"> Audio Packages &amp; Bundles </a></li>
            <li><a href="/cat_i1850_motorcycle-audio-electronics.html">Shop all Motorcycle</a></li>
            </ul>
        </li>
        <!-- Parent -->
        <li class='has-child-level-1'><h4 class="title">Portables</h4>
            <ul class="level-2">
            <li><a class="dynamic-title-link" href="/cat_i226_portable-personal-electronics.html">PORTABLES <span class="see-all-link">See all</span></a></li>
            <li class="has-child-level-2"><h4 class="title">Headphones</h4>
                <ul class="level-3">
                <li><a class="dynamic-title-link" href="/cat_i354_headphones.html">HEADPHONES</a></li>
                <li><a href="/cat_i355_in-ear-headphones-earbuds.html"> In-Ear (Earbuds) </a></li>
                <li><a href="/cat_i1085_on-ear-headphones.html"> On-Ear </a></li>
                <li><a href="/cat_i736_over-ear-headphones.html"> Over-Ear </a></li>
                <li><a href="/cat_i646_bluetooth-wireless-headphones.html"> Bluetooth Wireless </a></li>
                <li><a rel="no-follow" href="/cat_i354_headphones.html">Shop all Headphones</a></li>
                </ul>
            </li>
            <li class="has-child-level-2"><h4 class="title">Speakers &amp; Audio</h4>
                <ul class="level-3">
                <li><a class="dynamic-title-link" href="/cat_i885_portable-speakers-radios-players.html">SPEAKERS &amp; AUDIO <span class="see-all-link">See all</span></a></li>
                <li><a href="/cat_i1663_portable-bluetooth-speakers.html"> Wireless Bluetooth Speakers </a></li>
                <li><a href="/cat_i364_boomboxes.html"> Boomboxes </a></li>
                <li><a href="/cat_i343_bluetooth-audio-accessories.html"> Bluetooth Accessories </a></li>
                <li><a rel="no-follow" href="/cat_i885_portable-speakers-radios-players.html">Shop all Speakers &amp; Audio</a></li>
                </ul>
            </li>
            <li class="has-child-level-2"><h4 class="title">Accessories &amp; More</h4>
                <ul class="level-3">
                <li><a class="dynamic-title-link" href="/cat_i2251_portable-audio-accessories.html">ACCESSORIES &amp; MORE <span class="see-all-link">See all</span></a></li>
                <li><a href="/cat_i462_cables-connectors.html"> Chargers &amp; Power Adapters </a></li>
                <li><a href="/cat_i1559_laptop-stands.html"> Docks &amp; Stands </a></li>
                <li><a href="/cat_i1322_power-banks-backup-batteries.html"> Battery Power Banks </a></li>
                <li><a href="/cat_i234_cell-phone-accessories.html"> Cell Phone Accessories </a></li>
                <li><a rel="no-follow" href="/cat_i2251_portable-audio-accessories.html">Shop all Accessories &amp; More</a></li>
                </ul>
            </li>
            <li><a href="/cat_i226_personal-portable-electronics.html">Shop all Portables</a></li>
            </ul>
        </li>
        <!-- Parent -->
        <li class='has-child-level-1'><h4 class="title">Fitness</h4>
            <ul class="level-2">
            <li><a class="dynamic-title-link" href="/cat_i2927_fitness-health.html">FITNESS <span class="see-all-link">See all</span></a></li>
            <li><a href="/cat_m1379_i1585_victor-fitness-massagers.html"> Vibrating REVIVE Roller </a></li>
            <li><a href="/item_168543_Victor.Fitness-LiftLocks1-Black.html"> Barbell Collars (LiftLocks) </a></li>
            <li><a href="/item_168535_Victor.Fitness-PYNpad.html"> Barbell Pad (PYNpad) </a></li>
            <li><a href="/cat_m1379_i2931_victor-fitness-resistance-bands.html"> Resistance Bands </a></li>
            <li><a href="/item_168509_Victor.Fitness-TrigStick1.html"> Massage Stick </a></li>
            <li><a href="/item_168505_Victor.Fitness-VicGrips.html"> Weightlifting Gloves</a></li>
            <li><a href="/cat_m1379_i2933_victor-fitness-yoga.html"> Yoga Mats </a></li>
            <li><a href="/cat_i2927_fitness-health.html">Shop all Fitness</a> </li>
            </ul>
        </li>
        <!-- Parent -->
        <li class='has-child-level-1'><h4 class="title">Home &amp; Office</h4>
            <ul class="level-2">
            <li><a class="dynamic-title-link" href="/cat_i499_home-office-electronics.html">HOME &amp; OFFICE <span class="see-all-link">See all</span></a></li>
            <li><a href="/cat_i1559_laptop-stands.html"> Laptop Stands </a></li>
            <li><a href="/cat_i1558_macbook-laptop-docking-stations-usb-hub-adapters.html"> USB Hubs &amp; Docking Stations </a></li>
            <li><a href="/cat_i2943_phone-mounts-chargers-for-home-desk-office.html"> Phone Mounts &amp; Chargers </a></li>
            <li><a href="/cat_i1663_portable-bluetooth-speakers.html"> Bluetooth Wireless Speakers </a></li>
            <li><a href="/cat_i364_boomboxes.html"> Boomboxes </a></li>
            <li><a href="/cat_i354_headphones.html"> Headphones </a></li>
            <li><a href="/cat_i499_home-office-electronics.html">Shop all Home &amp; Office</a></li>
            </ul>
        </li>
        <!-- Parent -->
        <li class='has-child-level-1'><h4 class="title">Specials</h4>
            <ul class="level-2">
                <li><a class="dynamic-title-link" href="/cat_i2244_specials-promotions.html">SPECIALS <span class="see-all-link">See all</span></a></li>
                <li><a href="/lp/on-sale"> Price Drops </a></li>
                <li><a href="/lp/vip-rewards"> VIP: Free 2-day + 10% Rewards </a></li>
                <li><a href="/coupons"> Coupons </a></li>
                <li><a href="/liquidation_station.html"> Outlet (Open Box, Refurbished) </a></li>
                <li><a href="/cat_i1856_gift-guides.html"> Gift Guides </a></li>
                <li><a href="/cat_i2244_specials-promotions.html">Shop all Specials</a></li>
            </ul>
        </li>
        </ul>
    </div> <!--END OF MAIN HERO MENU-->
    </div>

<div id="globalPromo"></div>
<script type="text/javascript">
/* Violator Desktop */
var QueryString = function() {
    for (var e = {}, t = window.location.search.substring(1), o = t.split("&"), s = 0; s < o.length; s++) {
        var a = o[s].split("=");
        if ("undefined" == typeof e[a[0]]) e[a[0]] = decodeURIComponent(a[1]);
        else if ("string" == typeof e[a[0]]) {
            var i = [e[a[0]], decodeURIComponent(a[1])];
            e[a[0]] = i;
        } else e[a[0]].push(decodeURIComponent(a[1]));
    }
    return e;
}();
function setCookie(a, n, o) {
    var e = new Date;
    e.setTime(e.getTime() + 24 * o * 60 * 60 * 1e3);
    var r = "expires=" + e.toUTCString();
    document.cookie = a + "=" + n + "; " + r + "; path=/";
}
function getCookie(a) {
    for (var n = a + "=", o = document.cookie.split(";"), e = 0; e < o.length; e++) {
        for (var r = o[e];
            " " == r.charAt(0);) r = r.substring(1);
        if (0 == r.indexOf(n)) return r.substring(n.length, r.length);
    }
    return "";
}
var year = getCookie("car_afg_year"),
    make = getCookie("car_afg_make"),
    model = getCookie("car_afg_model"),
    freehp = getCookie("freeoffer"),
    promovio = document.getElementById("freehp"),
    shopvio = document.getElementById("whyshopsonic");
if (freehp !== "1" && promovio !== null) {
    promovio.style.display = 'block';
} else {
    if (shopvio !== undefined && shopvio !== null) {
        shopvio.style.display = 'block';
    }
}
if (year !== '' && model !== '' && make !== '') {
    var urlMake = make.replace(/\+/g, "-").replace(/\s+/g, '-'),
        urlModel = model.replace(/\+/g, "-").replace(/%26/g, "&").replace(/\s+/g, '-'),
        displayMake = make.replace(/\+/g, " "),
        displayModel = model.replace(/\+/g, " ").replace(/%26/g, "and");
    myv = document.getElementById('myVehicle');
    myv.href = '/afg/' + urlMake + '/' + urlModel + '/' + year;
    myv.innerHTML = '<span class="vIcon"></span> My ' + displayModel;
}
flashdiscount = ['FLSOUND5', 5, 20, 20];
cReviewCode = 'HDREVIEW50509';
efl = getCookie('eflash');
if (QueryString.utm_campaign == 'Flash_Sale' || efl !== '') {
    flashdiscount = ['EFLSOUND10', 10, 30, 30];
    if (efl == '') {
        setCookie('eflash', 1);
    }
}
freeCodes = ['KICK25'];
</script>
