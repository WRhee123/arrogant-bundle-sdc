const Footer = () => {

    return (
        <>
        <div className='footer'>
            <div className="max-width-wrapper">
            <div className="footer-contents">
                <div className="brand">
                <a>
                    <img src="https://cdn.humblebundle.com/static/hashed/4814f84495cd679571cb94896978da3825562075.svg" alt="Humble Bundle Logo" />
                    </a>
                </div>

                <div className="refer-container">
                <p className="refer-message">Get up to $12 Wallet Credit to spend on your next store purchase!</p>
                <a href="https://www.humblebundle.com/refer?hmb_source=footer&hmb_medium=footer_refer&hmb_campaign=refer_a_friend"
                    className="refer-link">Invite a Friend</a>
                </div>

                <section className="footer-links">
                <div className="footer-links-info">
                    <h2>About</h2>
                    <ul className="info-links-list">
                    <li><a href="https://blog.humblebundle.com/" className="links" >Blog</a></li>
                    <li><a href="https://support.humblebundle.com"  className="links">Support</a></li>
                    <li><a href="https://www.humblebundle.com/developer"  className="links">Developer</a></li>
                    </ul>
                </div>
                <div className="footer-links-trending">
                    <h2>Trending Games</h2>
                    <ul className="trending-games-list">

                    <li><a href="https://www.humblebundle.com/store/beamngdrive"  className="links">BeamNG.drive</a></li>

                    <li><a href="https://www.humblebundle.com/store/marvels-midnight-suns-season-pass"  className="links">Marvel&#39;s Midnight Suns Season
                        Pass</a></li>

                    <li><a href="https://www.humblebundle.com/store/farthest-frontier"  className="links">Farthest Frontier</a></li>

                    <li><a href="https://www.humblebundle.com/store/the-callisto-protocol-deluxe" className="links" >The Callisto Protocol - Deluxe
                        Edition</a></li>

                    <li><a href="https://www.humblebundle.com/store/cuphead"  className="links">Cuphead</a></li>

                    <li><a href="https://www.humblebundle.com/store/signalis"  className="links">SIGNALIS</a></li>

                    <li><a href="https://www.humblebundle.com/store/destiny-2-lightfall-and-annual-pass" className="links" >Destiny 2: Lightfall + Annual
                        Pass</a></li>

                    <li><a href="https://www.humblebundle.com/store/elden-ring"  className="links">ELDEN RING</a></li>

                    </ul>
                </div>
                </section>
                <div className="social-and-language-container">

                <div className="language-dropdown-container">
                    <button className="js-language-dropdown language-dropdown">
                    <p><i className="hb hb-globe-fas"></i> Language: English</p> <i class="hb hb-caret-down"></i>
                    </button>
                    <div className="language-container js-language-container">
                    <ul className="language-list">

                        <li className="">
                        <button data-locale="fr" className="js-change-language no-style-button">Français</button>
                        </li>

                        <li className=" active ">
                        <button data-locale="en" className="js-change-language no-style-button">English</button>
                        </li>

                        <li className="">
                        <button data-locale="zh_CN" className="js-change-language no-style-button">简体中文</button>
                        </li>

                        <li className="">
                        <button data-locale="de" className="js-change-language no-style-button">Deutsch</button>
                        </li>

                        <li className="">
                        <button data-locale="it" className="js-change-language no-style-button">Italiano</button>
                        </li>

                        <li className="">
                        <button data-locale="es" className="js-change-language no-style-button">Español</button>
                        </li>

                    </ul>
                    </div>
                </div>

                <div className="socialcontainer">



                    <a href="https://www.facebook.com/humblebundle/"  className="links"><span className="sr-only">Facebook</span></a>
                    <a href="https://twitter.com/humble"  className="links"><span className="sr-only">Twitter</span></a>
                    <a href="https://www.instagram.com/humblebundle"  className="links"><span
                        className="sr-only">Instagram</span></a>

                    <a href="https://blog.humblebundle.com/"  className="links"><span className="sr-only">Blog</span></a>
                </div>
                <p className="humble-community-text">The Humble community has contributed over $240,000,000 to charity since 2010,
                    making an amazing difference to causes all over the world.</p>
                <div className="legal-links">
                    <ul className="legal-links-list">
                    <li><a href="https://www.humblebundle.com/terms" className="links">Terms of Service</a></li>
                    <li><a href="https://www.humblebundle.com/privacy"  className="links">Privacy Policy</a></li>
                    </ul>
                    <ul className="legal-links-list">
                    <li><a href="https://www.humblebundle.com/cookie-policy" className="links" >Cookie Policy</a></li>
                    <li><a href="https://www.humblebundle.com/legal" className="links">Legal Notices</a></li>
                    </ul>
                    <ul className="legal-links-list">
                    <li>
                        <a href="https://www.humblebundle.com/store/super-mario-rpg-switch?hmb_source=humble_home&hmb_medium=product_tile&hmb_campaign=mosaic_section_2_layout_index_2_layout_type_carousel_tile_index_1_c_supermariorpg_switch_storefront#" 
                        className="links" onclick="window.zdconsent.showConsentTool(event);">
                        <img src="https://cdn.ziffstatic.com/pub/icong1.png" /> AdChoices </a>
                    </li>
                    <li><a href="https://dsar.humblebundle.com/" className="links">Do Not Sell My Personal Information</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <p className="humble-community-text">&copy; 2011-2022 Humble Bundle, Inc. a Ziff Davis company. All Rights Reserved.
                Humble Bundle and Humble Store are registered trademarks of Humble Bundle, Inc. and may not be used by third
                parties without express written permission.</p>
            </div>
        </div>
    </>
    )
}

export default Footer