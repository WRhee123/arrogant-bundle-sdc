
const FooterLanguage = () => {
    
    return (
        <>
        <div className="language-dropdown-container">
            <button className="js-language-dropdown">
            <p> Language: English</p>
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
        </>
    )
}

export default FooterLanguage