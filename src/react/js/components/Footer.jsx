import FooterLanguage from "./FooterContents/FooterLanguage"
import FooterLegal from "./FooterContents/FooterLegal"
import FooterLinks from "./FooterContents/FooterLinks"
import FooterRefer from "./FooterContents/FooterRefer"
import FooterSocial from "./FooterContents/FooterSocial"
import FooterTrending from "./FooterContents/FooterTrending"
import "../../css/footer.css"

const Footer = () => {

    return (
    <>
    <div className='footer'>
        <div className="max-width-wrapper">
        <div className="footer-content">
            <div className="brand">
            <a>
                <img src="https://cdn.humblebundle.com/static/hashed/4814f84495cd679571cb94896978da3825562075.svg" alt="Humble Bundle Logo" />
                </a>
            </div>
            <FooterRefer />
            <section className="footer-links">
            <FooterLinks />

            <FooterTrending />
            </section>
            
            <div className="social-and-language-container">

            <FooterLanguage />

            <FooterSocial />
            <p className="humble-community-text">The Humble community has contributed over $240,000,000 to charity since 2010,
                making an amazing difference to causes all over the world.</p>
            <FooterLegal />
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