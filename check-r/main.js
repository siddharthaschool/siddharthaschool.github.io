alert(1)

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

//alert(2)
class myHeader extends HTMLElement{

connectedCallback()
{
//alert(21)	
this.innerHTML=`

<header>
	
	
	<nav>
	<ul>
	
	<li><a href=index.htm>homepage</a></li>
	<li><a href=footer.htm>footerpage</a></li>
	<li><a href=index.htm>homepage</a></li>
	
	</ul>
	</nav>
	</header>


`

}
}
customElements.define('my-header', myHeader)



//alert(3)
class myFooter extends HTMLElement{

connectedCallback()
{
alert("footer executed");
	
	//alert(31)
this.innerHTML=`

<footer>
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"wpemoji":"http:\/\/ed.aislinthemes.com\/modern\/wp-includes\/js\/wp-emoji.js?ver=6.0","twemoji":"http:\/\/ed.aislinthemes.com\/modern\/wp-includes\/js\/twemoji.js?ver=6.0"}};
/**
 * @output wp-includes/js/wp-emoji-loader.js
 */

( function( window, document, settings ) {
	var src, ready, ii, tests;

	// Create a canvas element for testing native browser support of emoji.
	var canvas = document.createElement( 'canvas' );
	var context = canvas.getContext && canvas.getContext( '2d' );

	/**
	 * Checks if two sets of Emoji characters render the same visually.
	 *
	 * @since 4.9.0
	 *
	 * @private
	 *
	 * @param {number[]} set1 Set of Emoji character codes.
	 * @param {number[]} set2 Set of Emoji character codes.
	 *
	 * @return {boolean} True if the two sets render the same.
	 */
	function emojiSetsRenderIdentically( set1, set2 ) {
		var stringFromCharCode = String.fromCharCode;

		// Cleanup from previous test.
		context.clearRect( 0, 0, canvas.width, canvas.height );
		context.fillText( stringFromCharCode.apply( this, set1 ), 0, 0 );
		var rendered1 = canvas.toDataURL();

		// Cleanup from previous test.
		context.clearRect( 0, 0, canvas.width, canvas.height );
		context.fillText( stringFromCharCode.apply( this, set2 ), 0, 0 );
		var rendered2 = canvas.toDataURL();

		return rendered1 === rendered2;
	}

	/**
	 * Detects if the browser supports rendering emoji or flag emoji.
	 *
	 * Flag emoji are a single glyph made of two characters, so some browsers
	 * (notably, Firefox OS X) don't support them.
<script type="text/javascript">
	 *
	 * @since 4.2.0
	 *
	 * @private
	 *
	 * @param {string} type Whether to test for support of "flag" or "emoji".
	 *
	 * @return {boolean} True if the browser can render emoji, false if it cannot.
	 */
	function browserSupportsEmoji( type ) {
		var isIdentical;

		if ( ! context || ! context.fillText ) {
			return false;
		}

		/*
		 * Chrome on OS X added native emoji rendering in M41. Unfortunately,
		 * it doesn't work when the font is bolder than 500 weight. So, we
		 * check for bold rendering support to avoid invisible emoji in Chrome.
		 */
		context.textBaseline = 'top';
		context.font = '600 32px Arial';

		switch ( type ) {
			case 'flag':
				/*
				 * Test for Transgender flag compatibility. This flag is shortlisted for the Emoji 13 spec,
				 * but has landed in Twemoji early, so we can add support for it, too.
				 *
				 * To test for support, we try to render it, and compare the rendering to how it would look if
				 * the browser doesn't render it correctly (white flag emoji + transgender symbol).
				 */
				isIdentical = emojiSetsRenderIdentically(
					[ 0x1F3F3, 0xFE0F, 0x200D, 0x26A7, 0xFE0F ],
					[ 0x1F3F3, 0xFE0F, 0x200B, 0x26A7, 0xFE0F ]
				);

				if ( isIdentical ) {
					return false;
				}

				/*
				 * Test for UN flag compatibility. This is the least supported of the letter locale flags,
				 * so gives us an easy test for full support.
				 *
				 * To test for support, we try to render it, and compare the rendering to how it would look if
				 * the browser doesn't render it correctly ([U] + [N]).
				 */
				isIdentical = emojiSetsRenderIdentically(
					[ 0xD83C, 0xDDFA, 0xD83C, 0xDDF3 ],
					[ 0xD83C, 0xDDFA, 0x200B, 0xD83C, 0xDDF3 ]
				);

				if ( isIdentical ) {
					return false;
				}

				/*
				 * Test for English flag compatibility. England is a country in the United Kingdom, it
				 * does not have a two letter locale code but rather an five letter sub-division code.
				 *
				 * To test for support, we try to render it, and compare the rendering to how it would look if
				 * the browser doesn't render it correctly (black flag emoji + [G] + [B] + [E] + [N] + [G]).
				 */
				isIdentical = emojiSetsRenderIdentically(
					[ 0xD83C, 0xDFF4, 0xDB40, 0xDC67, 0xDB40, 0xDC62, 0xDB40, 0xDC65, 0xDB40, 0xDC6E, 0xDB40, 0xDC67, 0xDB40, 0xDC7F ],
					[ 0xD83C, 0xDFF4, 0x200B, 0xDB40, 0xDC67, 0x200B, 0xDB40, 0xDC62, 0x200B, 0xDB40, 0xDC65, 0x200B, 0xDB40, 0xDC6E, 0x200B, 0xDB40, 0xDC67, 0x200B, 0xDB40, 0xDC7F ]
				);

				return ! isIdentical;
			case 'emoji':
				/*
				 * Why can't we be friends? Everyone can now shake hands in emoji, regardless of skin tone!
				 *
				 * To test for Emoji 14.0 support, try to render a new emoji: Handshake: Light Skin Tone, Dark Skin Tone.
				 *
				 * The Handshake: Light Skin Tone, Dark Skin Tone emoji is a ZWJ sequence combining 🫱 Rightwards Hand,
				 * 🏻 Light Skin Tone, a Zero Width Joiner, 🫲 Leftwards Hand, and 🏿 Dark Skin Tone.
				 *
				 * 0x1FAF1 == Rightwards Hand
				 * 0x1F3FB == Light Skin Tone
				 * 0x200D == Zero-Width Joiner (ZWJ) that links the code points for the new emoji or
				 * 0x200B == Zero-Width Space (ZWS) that is rendered for clients not supporting the new emoji.
				 * 0x1FAF2 == Leftwards Hand
				 * 0x1F3FF == Dark Skin Tone.
				 *
				 * When updating this test for future Emoji releases, ensure that individual emoji that make up the
				 * sequence come from older emoji standards.
				 */
				isIdentical = emojiSetsRenderIdentically(
					[0x1FAF1, 0x1F3FB, 0x200D, 0x1FAF2, 0x1F3FF],
					[0x1FAF1, 0x1F3FB, 0x200B, 0x1FAF2, 0x1F3FF]
				);

				return ! isIdentical;
		}

		return false;
	}

	/**
	 * Adds a script to the head of the document.
	 *
	 * @ignore
	 *
	 * @since 4.2.0
	 *
	 * @param {Object} src The url where the script is located.
	 * @return {void}
	 */
	function addScript( src ) {
		var script = document.createElement( 'script' );

		script.src = src;
		script.defer = script.type = 'text/javascript';
		document.getElementsByTagName( 'head' )[0].appendChild( script );
	}

	tests = Array( 'flag', 'emoji' );

	settings.supports = {
		everything: true,
		everythingExceptFlag: true
	};

	/*
	 * Tests the browser support for flag emojis and other emojis, and adjusts the
	 * support settings accordingly.
	 */
	for( ii = 0; ii < tests.length; ii++ ) {
		settings.supports[ tests[ ii ] ] = browserSupportsEmoji( tests[ ii ] );

		settings.supports.everything = settings.supports.everything && settings.supports[ tests[ ii ] ];

		if ( 'flag' !== tests[ ii ] ) {
			settings.supports.everythingExceptFlag = settings.supports.everythingExceptFlag && settings.supports[ tests[ ii ] ];
		}
	}

	settings.supports.everythingExceptFlag = settings.supports.everythingExceptFlag && ! settings.supports.flag;

	// Sets DOMReady to false and assigns a ready function to settings.
	settings.DOMReady = false;
	settings.readyCallback = function() {
		settings.DOMReady = true;
	};

	// When the browser can not render everything we need to load a polyfill.
	if ( ! settings.supports.everything ) {
		ready = function() {
			settings.readyCallback();
		};

		/*
		 * Cross-browser version of adding a dom ready event.
		 */
		if ( document.addEventListener ) {
			document.addEventListener( 'DOMContentLoaded', ready, false );
			window.addEventListener( 'load', ready, false );
		} else {
			window.attachEvent( 'onload', ready );
			document.attachEvent( 'onreadystatechange', function() {
				if ( 'complete' === document.readyState ) {
					settings.readyCallback();
				}
			} );
		}

		src = settings.source || {};

		if ( src.concatemoji ) {
			addScript( src.concatemoji );
		} else if ( src.wpemoji && src.twemoji ) {
			addScript( src.twemoji );
			addScript( src.wpemoji );
		}
	}

} )( window, document, window._wpemojiSettings );
</script>
<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 0.07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>


<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
</style>



<style id='ed-school-style-inline-css' type='text/css'>
.header-mobile {display: none;}@media screen and (max-width:950px) {.header-left {padding-left: 0;}.wh-header, .wh-top-bar {display: none;}.header-mobile {display: block;}}
</style>


<style id='ed_school_options_style-inline-css' type='text/css'>
#footer-top, #latest-news, #features, #welcome {
    background-repeat: repeat-y !important;
    background-size: 100% !important;
}

@media (max-width: 768px) {
   #footer-top, #latest-news, #features, #welcome {
        background-image: none !important;
    }
}


<script type='text/javascript' id='mega-submenu-js-extra'>
/* <![CDATA[ */
var msm_mega_submenu = {"data":{"submenu_items_position_relative":0,"mobile_menu_trigger_click_bellow":768}};
/* ]]> */
</script>

	<script>function setREVStartSize(e){
			//window.requestAnimationFrame(function() {
				window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;
				window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;
				try {
					var pw = document.getElementById(e.c).parentNode.offsetWidth,
						newh;
					pw = pw===0 || isNaN(pw) || (e.l=="fullwidth" || e.layout=="fullwidth") ? window.RSIW : pw;
					e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
					e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
					e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
					e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
					e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
					e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
					e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);
					if(e.layout==="fullscreen" || e.l==="fullscreen")
						newh = Math.max(e.mh,window.RSIH);
					else{
						e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
						for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];
						e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
						e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
						for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
											
						var nl = new Array(e.rl.length),
							ix = 0,
							sl;
						e.tabw = e.tabhide>=pw ? 0 : e.tabw;
						e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
						e.tabh = e.tabhide>=pw ? 0 : e.tabh;
						e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;
						for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
						sl = nl[0];
						for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}
						var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);
						newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
					}
					var el = document.getElementById(e.c);
					if (el!==null && el) el.style.height = newh+"px";
					el = document.getElementById(e.c+"_wrapper");
					if (el!==null && el) {
						el.style.height = newh+"px";
						el.style.display = "block";
					}
				} catch(e){
					console.log("Failure at Presize of Slider:" + e)
				}
			//});
		  };</script>
<noscript><style> .wpb_animate_when_almost_visible { opacity: 1; }</style></noscript></head>

<body class="home page-template page-template-template-home page-template-template-home-php page page-id-1530 wp-custom-logo tribe-no-js header-top page-title-enabled wpb-js-composer js-comp-ver-6.11.0 vc_responsive elementor-default elementor-kit-2689 elementor-page elementor-page-1530">

<div class="cbp-row wh-footer">
		<div class="cbp-container wh-padding">
					<div data-elementor-type="wp-post" data-elementor-id="1538" class="elementor elementor-1538">
						<div class="elementor-inner">
				<div class="elementor-section-wrap">
					
</div>
	
			
				<section class="elementor-section elementor-top-section elementor-element elementor-element-3c1995d elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3c1995d" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
						<div class="elementor-container elementor-column-gap-default">
							<div class="elementor-row">
					
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ba4a281" data-id="ba4a281" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-b364229 elementor-widget elementor-widget-text-editor" data-id="b364229" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
								<div class="elementor-text-editor elementor-clearfix">
				<p>© 2023 All Rights Reserved</p>					</div>
						</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
									</div>
			</div>
					</div>
				</div>
	</div>
<!--doubt-->
		<script data-cfasync="false" src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
			window.RS_MODULES = window.RS_MODULES || {};
			window.RS_MODULES.modules = window.RS_MODULES.modules || {};
			window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
			window.RS_MODULES.defered = true;
			window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
			window.RS_MODULES.type = 'compiled';
		</script>
				<script>
		( function ( body ) {
			'use strict';
			body.className = body.className.replace( /\btribe-no-js\b/, 'tribe-js' );
		} )( document.body );
		</script>
		<!-- Instagram Feed JS -->
<script type="text/javascript">
var sbiajaxurl = "http://ed.aislinthemes.com/modern/wp-admin/admin-ajax.php";
</script>
<script> /* <![CDATA[ */var tribe_l10n_datatables = {"aria":{"sort_ascending":": activate to sort column ascending","sort_descending":": activate to sort column descending"},"length_menu":"Show _MENU_ entries","empty_table":"No data available in table","info":"Showing _START_ to _END_ of _TOTAL_ entries","info_empty":"Showing 0 to 0 of 0 entries","info_filtered":"(filtered from _MAX_ total entries)","zero_records":"No matching records found","search":"Search:","all_selected_text":"All items on this page were selected. ","select_all_link":"Select all pages","clear_selection":"Clear Selection.","pagination":{"all":"All","next":"Next","previous":"Previous"},"select":{"rows":{"0":"","_":": Selected %d rows","1":": Selected 1 row"}},"datepicker":{"dayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dayNamesShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dayNamesMin":["S","M","T","W","T","F","S"],"monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesShort":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesMin":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"nextText":"Next","prevText":"Prev","currentText":"Today","closeText":"Done","today":"Today","clear":"Clear"}};/* ]]> */ </script><link href="../css-2.css?family=Montserrat:700%2C400%7CRoboto:700%2C400&display=swap" rel="stylesheet" property="stylesheet" media="all" type="text/css">

<script>
		if(typeof revslider_showDoubleJqueryError === "undefined") {function revslider_showDoubleJqueryError(sliderID) {console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");console.log("To fix this, you can:");console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");console.log("2. Find the double jQuery.js inclusion and remove it");return "Double Included jQuery Library";}}
</script>
			<link rel="preload" as="font" id="rs-icon-set-revicon-woff" href="app/plugins/revslider/public/assets/fonts/revicons/revicons.woff?5510888" type="font/woff" crossorigin="anonymous" media="all">
<link rel='stylesheet' id='e-animations-css' href='app/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.6.4' type='text/css' media='all'>
<link rel='stylesheet' id='rs-plugin-settings-css' href='app/plugins/revslider/public/assets/css/rs6.css?ver=6.6.12' type='text/css' media='all'>
<style id='rs-plugin-settings-inline-css' type='text/css'>
		#rev_slider_3_1_wrapper .hesperiden.tparrows{cursor:pointer;background:rgba(0,0,0,0.5);width:40px;height:40px;position:absolute;display:block;z-index:1000;  border-radius:50%}#rev_slider_3_1_wrapper .hesperiden.tparrows.rs-touchhover{background:#000000}#rev_slider_3_1_wrapper .hesperiden.tparrows:before{font-family:'revicons';font-size:20px;color:#ffffff;display:block;line-height:40px;text-align:center}#rev_slider_3_1_wrapper .hesperiden.tparrows.tp-leftarrow:before{content:'\e82c';  margin-left:-3px}#rev_slider_3_1_wrapper .hesperiden.tparrows.tp-rightarrow:before{content:'\e82d';  margin-right:-3px}
</style>
<script type='text/javascript' src='wp-includes/js/dist/vendor/regenerator-runtime.js?ver=0.13.9' id='regenerator-runtime-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/vendor/wp-polyfill.js?ver=3.15.0' id='wp-polyfill-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/vendor/react.js?ver=17.0.1' id='react-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/vendor/lodash.js?ver=4.17.19' id='lodash-js'></script>
<script type='text/javascript' id='lodash-js-after'>
window.lodash = _.noConflict();
</script>
<script type='text/javascript' src='wp-includes/js/dist/vendor/react-dom.js?ver=17.0.1' id='react-dom-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/dom-ready.js?ver=d996b53411d1533a84951212ab6ac4ff' id='wp-dom-ready-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/hooks.js?ver=c6d64f2cb8f5c6bb49caca37f8828ce3' id='wp-hooks-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/i18n.js?ver=ebee46757c6a411e38fd079a7ac71d94' id='wp-i18n-js'></script>
<script type='text/javascript' id='wp-i18n-js-after'>
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script type='text/javascript' src='wp-includes/js/dist/a11y.js?ver=a38319d7ba46c6e60f7f9d4c371222c5' id='wp-a11y-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/url.js?ver=16385e4d69da65c7283790971de6b297' id='wp-url-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/api-fetch.js?ver=63050163caffa6aac54e9ebf21fe0472' id='wp-api-fetch-js'></script>
<script type='text/javascript' id='wp-api-fetch-js-after'>
wp.apiFetch.use( wp.apiFetch.createRootURLMiddleware( "http://ed.aislinthemes.com/modern/wp-json/" ) );
wp.apiFetch.nonceMiddleware = wp.apiFetch.createNonceMiddleware( "e8f02446a4" );
wp.apiFetch.use( wp.apiFetch.nonceMiddleware );
wp.apiFetch.use( wp.apiFetch.mediaUploadMiddleware );
wp.apiFetch.nonceEndpoint = "http://ed.aislinthemes.com/modern/wp-admin/admin-ajax.php?action=rest-nonce";
</script>
<script type='text/javascript' src='wp-includes/js/dist/blob.js?ver=87cf2365cd719a6954f1e2bb8bcc692a' id='wp-blob-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/autop.js?ver=21d1d6c005241b908b592f52ad684a28' id='wp-autop-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/block-serialization-default-parser.js?ver=8ee151736a1e51db2bafbb61ddd60634' id='wp-block-serialization-default-parser-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/deprecated.js?ver=96593d5d272d008fbcb6912fa0b86778' id='wp-deprecated-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/dom.js?ver=3c10edc1abf3fbbc79f17fd7d1d332eb' id='wp-dom-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/escape-html.js?ver=00a5735837e9efe13da1d979f16a7105' id='wp-escape-html-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/element.js?ver=3dfdc75a0abf30f057df44e9a39abe5b' id='wp-element-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/is-shallow-equal.js?ver=649feec00389556f8015a6b97efc1cb1' id='wp-is-shallow-equal-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/keycodes.js?ver=84a0e6bbcf0b9e1ea0184c3f2bf28022' id='wp-keycodes-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/priority-queue.js?ver=efad6460ae6b28406d39866cb10731e0' id='wp-priority-queue-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/compose.js?ver=da94d523b115836ddbf0b3b774ddd94a' id='wp-compose-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/redux-routine.js?ver=5156478c032ea85a2bbdceeb7a43b0c1' id='wp-redux-routine-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/data.js?ver=38ad563aa39c8f314fe6f6e430d81a69' id='wp-data-js'></script>
<script type='text/javascript' id='wp-data-js-after'>
( function() {
	var userId = 0;
	var storageKey = "WP_DATA_USER_" + userId;
	wp.data
		.use( wp.data.plugins.persistence, { storageKey: storageKey } );
	wp.data.plugins.persistence.__unstableMigrate( { storageKey: storageKey } );
} )();
</script>
<script type='text/javascript' src='wp-includes/js/dist/html-entities.js?ver=c6385fb7cd9fdada1cf8892a545f8a26' id='wp-html-entities-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/shortcode.js?ver=d6964e945049b6190adc8770cda168c4' id='wp-shortcode-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/blocks.js?ver=70f0d7113c28590b968147e200d13a68' id='wp-blocks-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/vendor/moment.js?ver=2.29.2' id='moment-js'></script>
<script type='text/javascript' id='moment-js-after'>
moment.updateLocale( 'en_US', {"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"week":{"dow":1},"longDateFormat":{"LT":"g:i a","LTS":null,"L":null,"LL":"F j, Y","LLL":"F j, Y g:i a","LLLL":null}} );
</script>
<script type='text/javascript' src='wp-includes/js/dist/date.js?ver=e0e02b3a1c7037e6cb893486d4680631' id='wp-date-js'></script>
<script type='text/javascript' id='wp-date-js-after'>
wp.date.setSettings( {"l10n":{"locale":"en_US","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"meridiem":{"am":"am","pm":"pm","AM":"AM","PM":"PM"},"relative":{"future":"%s from now","past":"%s ago"}},"formats":{"time":"g:i a","date":"F j, Y","datetime":"F j, Y g:i a","datetimeAbbreviated":"M j, Y g:i a"},"timezone":{"offset":"0","string":"","abbr":""}} );
</script>
<script type='text/javascript' src='wp-includes/js/dist/primitives.js?ver=cadf5cfaabdb15c8c8fc440547afe919' id='wp-primitives-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/rich-text.js?ver=e7d57502b62ec4756783a0cd79238841' id='wp-rich-text-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/warning.js?ver=b9190af8fc6a3a48c580473c6f337b88' id='wp-warning-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/components.js?ver=79d190e9af232aeaa59c1b40aa22932c' id='wp-components-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/keyboard-shortcuts.js?ver=418fddac042f08102c4110f70e13cd47' id='wp-keyboard-shortcuts-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/notices.js?ver=e44820c667bf205cacdfc48cbeb3c2e6' id='wp-notices-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/token-list.js?ver=4ebce6423dfff99d40033fd33ce52cc9' id='wp-token-list-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/wordcount.js?ver=fb8056c75aa0a0569f7ea3ceae97fbc6' id='wp-wordcount-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/block-editor.js?ver=39c7981dd22ec80281080455892940e6' id='wp-block-editor-js'></script>
<script type='text/javascript' src='wp-includes/js/dist/core-data.js?ver=95df951bbac4c9f2fd2e6da80561595d' id='wp-core-data-js'></script>
<script type='text/javascript' id='aislin-testimonials-app-js-extra'>
/* <![CDATA[ */
var aislin_testimonials = {"post_type":"page","thumbnail_sizes":{"thumbnail":"thumbnail","1536x1536":"1536x1536 (1536x1536)","2048x2048":"2048x2048 (2048x2048)","post-thumbnail":"post-thumbnail (150x150)","ed-school-featured-image":"ed-school-featured-image (990x500)","ed-school-medium":"ed-school-medium (768x510)","ed-school-medium-alt":"ed-school-medium-alt (768x410)","ed-school-square":"ed-school-square (768x768)","ed-school-square-small":"ed-school-square-small (420x420)","full-width":"full-width"},"rotator":{"transitions":["fade","fadeout","scrollHorz","scrollVert","flipHorz","flipVert","none"],"title_heading":["h1","h2","h3","h4","h5","h6","div","p"]}};
/* ]]> */
</script>
<script type='text/javascript' src='app/plugins/aislin-testimonials/public/js/app.js?ver=5716d46101357ee0096ab88bc69197f1' id='aislin-testimonials-app-js'></script>
<script type='text/javascript' id='contact-form-7-js-extra'>
/* <![CDATA[ */
var wpcf7 = {"api":{"root":"http:\/\/ed.aislinthemes.com\/modern\/wp-json\/","namespace":"contact-form-7\/v1"}};
/* ]]> */
</script>
<script type='text/javascript' src='app/plugins/contact-form-7/includes/js/index.js?ver=5.5.2' id='contact-form-7-js'></script>
<script type='text/javascript' src='app/plugins/revslider/public/assets/js/rbtools.min.js?ver=6.6.12' defer="" async="" id='tp-tools-js'></script>
<script type='text/javascript' src='app/plugins/revslider/public/assets/js/rs6.min.js?ver=6.6.12' defer="" async="" id='revmin-js'></script>
<script type='text/javascript' src='app/plugins/ed-school-plugin/includes/elementor/assets/js/jquery-parallax.js' id='jquery-parallax-js'></script>
<script type='text/javascript' src='app/themes/ed-school/assets/js/plugins/fitvids.js' id='fitvids-js'></script>
<script type='text/javascript' src='app/themes/ed-school/assets/js/plugins/superfish.js' id='jquery-superfish-js'></script>
<script type='text/javascript' src='app/themes/ed-school/assets/js/plugins/hoverintent.js' id='hoverintent-js'></script>
<script type='text/javascript' src='app/themes/ed-school/assets/js/plugins/scrollup.js' id='scrollup-js'></script>
<script type='text/javascript' src='app/themes/ed-school/assets/js/plugins/jquery.sticky.js' id='jquery-sticky-js'></script>
<script type='text/javascript' src='app/themes/ed-school/assets/js/plugins/natural-width-height.js' id='natural-width-height-js'></script>
<script type='text/javascript' src='app/themes/ed-school/assets/js/plugins/fakeLoader.min.js' id='fakeLoader-js'></script>
<script type='text/javascript' id='ed-school-scripts-js-extra'>
/* <![CDATA[ */
var wheels = {"siteName":"Modern","data":{"useScrollToTop":false,"useStickyMenu":true,"scrollToTopText":"","isAdminBarShowing":false,"initialWaypointScrollCompensation":"120","preloaderSpinner":0,"preloaderBgColor":"#ffffff"}};
/* ]]> */
</script>
<script type='text/javascript' src='app/themes/ed-school/assets/js/wheels-main.min.js' id='ed-school-scripts-js'></script>
<script src='../app/plugins/the-events-calendar/common/src/resources/js/underscore-before.js'></script>
<script type='text/javascript' src='wp-includes/js/underscore.min.js?ver=1.13.3' id='underscore-js'></script>
<script src='../app/plugins/the-events-calendar/common/src/resources/js/underscore-after.js'></script>
<script type='text/javascript' src='app/plugins/ed-school-plugin/includes/elementor/widgets/video-popup/assets/jquery.magnific-popup.min.js?ver=6.0' id='jquery.magnific-popup-js'></script>
<script type='text/javascript' id='sb_instagram_scripts-js-extra'>
/* <![CDATA[ */
var sb_instagram_js_options = {"font_method":"svg","resized_url":"http:\/\/ed.aislinthemes.com\/app\/uploads\/sites\/4\/sb-instagram-feed-images\/","placeholder":"http:\/\/ed.aislinthemes.com\/app\/plugins\/instagram-feed\/img\/placeholder.png"};
/* ]]> */
</script>
<script type='text/javascript' src='app/plugins/instagram-feed/js/sbi-scripts.min.js?ver=2.9.4' id='sb_instagram_scripts-js'></script>
<script type='text/javascript' src='app/plugins/elementor/assets/js/webpack.runtime.js?ver=3.6.4' id='elementor-webpack-runtime-js'></script>
<script type='text/javascript' src='app/plugins/elementor/assets/js/frontend-modules.js?ver=3.6.4' id='elementor-frontend-modules-js'></script>
<script type='text/javascript' src='app/plugins/elementor/assets/lib/waypoints/waypoints.js?ver=4.0.2' id='elementor-waypoints-js'></script>
<script type='text/javascript' src='wp-includes/js/jquery/ui/core.js?ver=1.13.1' id='jquery-ui-core-js'></script>
<script type='text/javascript' src='app/plugins/elementor/assets/lib/swiper/swiper.js?ver=5.3.6' id='swiper-js'></script>
<script type='text/javascript' src='app/plugins/elementor/assets/lib/share-link/share-link.js?ver=3.6.4' id='share-link-js'></script>
<script type='text/javascript' src='app/plugins/elementor/assets/lib/dialog/dialog.js?ver=4.9.0' id='elementor-dialog-js'></script>
<script type='text/javascript' id='elementor-frontend-js-before'>
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":true},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.6.4","is_static":false,"experimentalFeatures":{"e_import_export":true,"e_hidden_wordpress_widgets":true,"landing-pages":true,"elements-color-picker":true,"favorite-widgets":true,"admin-top-bar":true},"urls":{"assets":"http:\/\/ed.aislinthemes.com\/app\/plugins\/elementor\/assets\/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"global_image_lightbox":"yes","active_breakpoints":["viewport_mobile","viewport_tablet"],"lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":1530,"title":"Modern%20%E2%80%93%20Just%20another%20Ed%20Sites%20site","excerpt":"","featuredImage":false}};
</script>
<script type='text/javascript' src='app/plugins/elementor/assets/js/frontend.js?ver=3.6.4' id='elementor-frontend-js'></script>
<script type='text/javascript' src='app/plugins/elementor/assets/js/preloaded-modules.js?ver=3.6.4' id='preloaded-modules-js'></script>
<script id="rs-initialisation-scripts">
		var	tpj = jQuery;

		var	revapi3;

		if(window.RS_MODULES === undefined) window.RS_MODULES = {};
		if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
		RS_MODULES.modules["revslider31"] = {once: RS_MODULES.modules["revslider31"]!==undefined ? RS_MODULES.modules["revslider31"].once : undefined, init:function() {
			window.revapi3 = window.revapi3===undefined || window.revapi3===null || window.revapi3.length===0  ? document.getElementById("rev_slider_3_1") : window.revapi3;
			if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length==0) { window.revapi3initTry = window.revapi3initTry ===undefined ? 0 : window.revapi3initTry+1; if (window.revapi3initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider31"].init()}); return;}
			window.revapi3 = jQuery(window.revapi3);
			if(window.revapi3.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_3_1"); return;}
			revapi3.revolutionInit({
					revapi:"revapi3",
					sliderLayout:"fullwidth",
					visibilityLevels:"1240,1024,778,480",
					gridwidth:"1240,1024,778,480",
					gridheight:"545,400,360,360",
					lazyType:"smart",
					perspectiveType:"local",
					editorheight:"545,400,360,360",
					responsiveLevels:"1240,1024,778,480",
					progressBar:{disableProgressBar:true},
					navigation: {
						mouseScrollNavigation:false,
						onHoverStop:false,
						arrows: {
							enable:true,
							style:"hesperiden",
							left: {

							},
							right: {

							}
						}
					},
					viewPort: {
						global:true,
						globalDist:"-200px",
						enable:false,
						visible_area:"20%"
					},
					fallbacks: {
						allowHTML5AutoPlayOnAndroid:true
					},
			});
			
		}} // End of RevInitScript

		if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
	</script>

	
	</footer>


`

}
}
customElements.define('my-footer', myFooter)